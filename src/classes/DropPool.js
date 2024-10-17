export class DropPool {
  constructor(
    label,
    dropList,
    { normalize = false, weight, exclude = false } = {
      normalize: false,
      exclude: false,
    }
  ) {
    this.label = label;
    this.dropList = dropList;
    this.normalize = normalize;
    this.weight = weight;
    this.exclude = exclude;
    this.lastRandom = null;
  }

  getWeight(onlySubSum = false) {
    if (!onlySubSum) {
      if (this.exclude) return 0;
      if (this.weight) return this.weight;
    }

    return this.dropList.reduce((acc, curr) => {
      return acc + curr.getWeight();
    }, 0);
  }

  resetHistory() {
    for (let drop of this.dropList) {
      drop.resetHistory();
    }
  }

  randomDrop(chestsOpened) {
    if (this.normalize) return this.randomDropNormalized(chestsOpened);

    const dropPoolTotal = this.getWeight();
    let rngValue = Math.random() * dropPoolTotal;
    for (let drop of this.dropList) {
      rngValue -= drop.getWeight();
      if (rngValue < 0) {
        this.lastRandom = drop.randomDrop(chestsOpened);
        return this.lastRandom;
      }
    }
  }

  randomDropNormalized(chestsOpened) {
    const dropPoolCount = this.dropList.length;
    let rngValue = Math.random() * dropPoolCount;
    return this.dropList[Math.floor(rngValue)].randomDrop(chestsOpened);
  }

  setNormalize(newVal) {
    this.normalize = newVal;
  }

  getDropPercent(totalWeight) {
    let result = this.dropList.map((x) => x.getDropPercent(totalWeight));
    return { poolTotal: this.getWeight() / totalWeight, poolList: result };
  }
}
