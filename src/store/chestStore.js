// Utilities
import { defineStore } from "pinia";
import { DropPool } from "@/classes/DropPool";
import { DropElement } from "@/classes/DropElement";
import { computed, ref } from "vue";

export const useChestStore = defineStore("chest", () => {
  const chestCount = ref(0);
  const goldenKeyMode = ref(false);
  const fifthDropProc = ref(false);
  const leftDrops = ref(
    new DropPool("Left", [
      new DropElement(86694, "Black Lion Stattuette (x2)", 516, 2), //Black Lion Stattuette (x2)
      new DropPool(
        "Dye Kit",
        [
          new DropElement(87603, "Dye Kit 1", 2018, 1, false), // Dye: Awakened Dye Kit (Gray, Yellow)
          new DropElement(77470, "Dye Kit 2", 2138, 1, false), // Dye: Winter Chimes Dye Kit (Yellow, White)
          new DropElement(98106, "Dye Kit 3", 1955, 1, false), // Dye: Jade Dye Kit (Green, Green)
          new DropElement(68005, "Dye Kit 4", 1979, 1, false), // Dye: Glint's Winter Dye Kit (Blue, Pink)
        ],
        { normalize: true }
      ),
      new DropElement(42877, "Metabolic Primer", 977), //Metabolic Primer (red)
      new DropElement(19996, "Revive Orb", 2656), // Revive Orb
      new DropElement(64736, "Transmutation Charges (5x)", 2624, 5), // Transmutation Charges (5x)
      new DropElement(20349, "Upgrade Extractor", 1346), // Upgrade Extractor
      new DropElement(8469, "Utility Primer", 1004), // Utility Primer (blue)
    ])
  );

  const rightDrops = ref(
    new DropPool("Right", [
      new DropElement(43998, "Black Lion Claim Ticket Scrap", 2698), // Black Lion Claim Ticket Scrap	2698
      new DropElement(48830, "Black Lion Commemorative Coin", 858), // Black Lion Commemorative Coin	858
      new DropElement(88001, "Black Lion Lockbreaker Kit", 837), // Black Lion Lockbreaker Kit	837
      new DropElement(101321, "Black Lion Material Bag", 1612, 1, false), // Black Lion Material Bag: SotO	1612
      new DropElement(78474, "Black Lion Miniature Claim Ticket", 1330), // Black Lion Miniature Claim Ticket	1330
      new DropElement(86474, "Guaranteed Armor Unlock", 842), // Guaranteed Armor Unlock (Blue)	842
      new DropElement(79696, "Guaranteed Wardrobe Unlock", 1338), // Guaranteed Wardrobe Unlock (Gold)	1338
      new DropElement(86452, "Guaranteed Weapon Unlock", 798), // Guaranteed Weapon Unlock (Brown)	798
      new DropElement(39124, "Heavy Crafting Bag (x2)", 1924, 2), // Heavy Crafting Bag (x2) (T6)	1924
      new DropElement(39123, "Large Crafting Bag (x2)", 1932, 2), // Large Crafting Bag (x2) (T5)	1932
      new DropElement(67280, "Teleport to Friend", 2215), // Teleport to Friend	2215
      new DropElement(86804, "Tyrian Exchange Voucher", 829), // Tyrian Exchange Voucher	829
    ])
  );

  const fifthDrops = ref(
    new DropPool("Fifth Drops", [
      new DropPool("Exclusive", [
        new DropElement(102027, "Rerun Exclusive", 285, 1, true, true),
        new DropElement(102085, "New Exclusive", 488, 1, true, true),
      ]),
      new DropPool("Uncommon", [
        new DropElement(43992, "Black Lion Claim Ticket", 238, 1, false),
        new DropPool(
          "Uncommon Weapon Skins",
          [
            new DropElement(98917, "Uncommon Axe Skin", 66, 1, true),
            new DropElement(98903, "Uncommon Dagger Skin", 62, 1, true),
            new DropElement(98876, "Uncommon Focus Skin", 56, 1, true),
            new DropElement(98894, "Uncommon Greatsword Skin", 44, 1, true),
            new DropElement(98881, "Uncommon Hammer Skin", 51, 1, true),
            new DropElement(98906, "Uncommon Longbow Skin", 66, 1, true),
            new DropElement(98948, "Uncommon Mace Skin", 51, 1, true),
            new DropElement(98897, "Uncommon Pistol Skin", 51, 1, true),
            new DropElement(98939, "Uncommon Rifle Skin", 46, 1, true),
            new DropElement(98951, "Uncommon Scepter Skin", 52, 1, true),
            new DropElement(98933, "Uncommon Shield Skin", 55, 1, true),
            new DropElement(98896, "Uncommon Short Bow Skin", 60, 1, true),
            new DropElement(98950, "Uncommon Staff Skin", 38, 1, true),
            new DropElement(98952, "Uncommon Sword Skin", 55, 1, true),
            new DropElement(98912, "Uncommon Torch Skin", 41, 1, true),
            new DropElement(98947, "Uncommon Warhorn Skin", 58, 1, true),
          ],
          { normalize: true }
        ),
        new DropElement(95482, "Vintage Black Lion Weapon Box", 57, 1, false),
      ]),
      new DropPool("Rare", [
        new DropElement(86694, "Black Lion Stattuette (x25)", 18, 25, false),
        new DropElement(
          80967,
          "Golden Black Lion Chest Key (x3)",
          10,
          3,
          false
        ),
        new DropElement(49147, "Mystery Tonic", 28, 1, true),
        new DropPool(
          "Rare Weapon Skins",
          [
            new DropElement(95237, "Rare Axe Skin", 11, 1, true),
            new DropElement(95182, "Rare Dagger Skin", 14, 1, true),
            new DropElement(95218, "Rare Focus Skin", 8, 1, true),
            new DropElement(95242, "Rare Greatsword Skin", 11, 1, true),
            new DropElement(95176, "Rare Hammer Skin", 21, 1, true),
            new DropElement(95217, "Rare Longbow Skin", 16, 1, true),
            new DropElement(95228, "Rare Mace Skin", 7, 1, true),
            new DropElement(95187, "Rare Pistol Skin", 12, 1, true),
            new DropElement(95192, "Rare Rifle Skin", 19, 1, true),
            new DropElement(95235, "Rare Scepter Skin", 18, 1, true),
            new DropElement(95174, "Rare Shield Skin", 21, 1, true),
            new DropElement(95224, "Rare Short Bow Skin", 18, 1, true),
            new DropElement(95203, "Rare Staff Skin", 12, 1, true),
            new DropElement(95173, "Rare Sword Skin", 17, 1, true),
            new DropElement(95243, "Rare Torch Skin", 14, 1, true),
            new DropElement(95178, "Rare Warhorn Skin", 12, 1, true),
          ],
          { normalize: true }
        ),
        new DropPool(
          "Gathering Tool Glyphs",
          [
            new DropElement(92915, "Glyph 1", 22, 1, true),
            new DropElement(90664, "Glyph 2", 14, 1, true),
          ],
          { normalize: true }
        ),
        new DropPool(
          "Home Instance Nodes",
          [
            new DropElement(68094, "Node 1", 14, 1, true),
            new DropElement(79085, "Node 2", 21, 1, true),
            new DropElement(79063, "Node 3", 18, 1, true),
            new DropElement(81853, "Node 4", 15, 1, true),
          ],
          { normalize: true }
        ),
      ]),
      new DropPool(
        "Super Rare",
        [
          new DropElement(78455, "Endless Reinforcing Contract", 2, 1, false),
          new DropElement(
            86497,
            "Endless Upgrade Extractor Contract",
            1,
            1,
            false
          ),
          new DropElement(35984, "Permanent Bank Access Contract", 2, 1, false),
          new DropElement(
            35985,
            "Permanent Black Lion Merchant Contract",
            2,
            1,
            false
          ),
          new DropElement(
            38507,
            "Permanent Hair Stylist Contract",
            2,
            1,
            false
          ),
          new DropElement(
            35986,
            "Permanent Trading Post Express Contract",
            4,
            1,
            false
          ),
          new DropElement(
            99989,
            "Permanent Crafting Station Contract",
            1,
            1,
            false
          ),
        ],
        { normalize: true }
      ),
    ])
  );

  const exclusiveDrops = computed(() => fifthDrops.value.dropList[0]);

  const uncommonDrops = computed(() => fifthDrops.value.dropList[1]);

  const rareDrops = computed(() => fifthDrops.value.dropList[2]);

  const superRareDrops = computed(() => fifthDrops.value.dropList[3]);

  function openNewChest() {
    this.chestCount++;
    this.leftDrops.randomDrop(this.chestCount);
    this.rightDrops.randomDrop(this.chestCount);
    this.fifthDropProc = this.goldenKeyMode || Math.random() < 0.1;
    if (this.fifthDropProc) {
      this.fifthDrops.randomDrop(this.chestCount);
    }
  }

  function updateDrop(dropPath, fieldsToChange) {
    let target = this[dropPath[0]];
    if (typeof target === "function") {
      target = target();
    }
    for (let i = 1; i < dropPath.length; i++) {
      target = target.dropList[dropPath[i]];
    }
    Object.assign(target, fieldsToChange);
  }

  function resetHistory() {
    this.chestCount = 0;
    this.leftDrops.resetHistory(this.chestCount);
    this.rightDrops.resetHistory(this.chestCount);
    this.fifthDrops.resetHistory(this.chestCount);
  }

  return {
    chestCount,
    fifthDropProc,
    goldenKeyMode,
    leftDrops,
    rightDrops,
    exclusiveDrops,
    uncommonDrops,
    rareDrops,
    superRareDrops,
    fifthDrops,
    openNewChest,
    updateDrop,
    resetHistory,
  };
});
