const enhance = require("./enhancementHandler");

const {
  Sword,
  Polearm,
  Warhammer,
  Wand,
  Sickle,
  Battle_Axe,
  Mace
} = require("./weapon");

const {
  Comb,
  Helm,
  Visor,
  Gorget,
  Pauldron,
  Breastplate,
  Plackart,
  Fauld,
  Rerebrace,
  Couter,
  Vambrace,
  Gauntlet,
  Cuisse,
  Poleyn,
  Fan_plates,
  Greave,
  Sabaton,
  Chain_Mail
} = require("./armor");

describe("GAME TEST SUITE", () => {
  describe("SUCCESS METHOD", () => {});
  describe("FAIL METHOD", () => {});
  describe("REPAIR METHOD", () => {});
  const repairedArmor = {
    name: "Breastplate",
    type: "armor",
    durability: 100,
    enhancement: 0
  };

  test("Repair Breastplate armor", () => {
    expect(enhance.repair(Breastplate)).toEqual(repairedArmor);
  });

  const repairedWeapon = {
    name: "Warhammer",
    type: "weapon",
    durability: 100,
    enhancement: 0
  };

  test("Repair Warhammer weapon", () => {
    expect(enhance.repair(Warhammer)).toEqual(repairedWeapon);
  });
});
