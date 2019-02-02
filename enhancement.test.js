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
  describe("SUCCESS METHOD", () => {
    const expectedArmor = {
        origName: "Pauldron",
        name: "[+1] Pauldron",
        type: "armor",
        durability: 100,
        enhancement: 1
      };
  
      test("Increase armor enhancement by 1", () => {
        expect(enhance.success(Pauldron)).toEqual(expectedArmor);
      });
  
      const expectedArmorAbove15 = {
        origName: "Plackart",
        name: "[TRI] Plackart",
        type: "armor",
        durability: 100,
        enhancement: 18
      };
  
      test("Increase armor enhancement by 1 above 15", () => {
        expect(enhance.success(Plackart)).toEqual(expectedArmorAbove15);
      });
  
      const expectedWeapon = {
        origName: "Sickle",  
        name: "[+1] Sickle",
        type: "weapon",
        durability: 100,
        enhancement: 1
      };
  
      test("Increase weapon enhancement by 1", () => {
        expect(enhance.success(Sickle)).toEqual(expectedWeapon);
      });
  
      const expectedWeaponAbove15 = {
        origName: "Battle_Axe",  
        name: "[TET] Battle_Axe",
        type: "weapon",
        durability: 100,
        enhancement: 19
      };
  
      test("Increase weapon enhancement by 1 above 15", () => {
        expect(enhance.success(Battle_Axe)).toEqual(expectedWeaponAbove15);
      });    
  });
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
