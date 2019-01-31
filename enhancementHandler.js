const enhancementLevels = ["PRI", "DUO", "TRI", "TET", "PEN"];

function success(item) {
  if (item.enhancement >= 0 && item.enhancement <= 15) {
    item.enhancement += 1;
    item.name = `[+${item.enhancement}] ${item.origName}`;
  } else if (item.enhancement === 15) {
    item.enhancement += 1;
    item.name = `[PRI] ${item.origName}`;
  } else if (item.enhancement === 16) {
    item.enhancement += 1;
    item.name = `[DUO] ${item.origName}`;
  } else if (item.enhancement === 17) {
    item.enhancement += 1;
    item.name = `[TRI] ${item.origName}`;
  } else if (item.enhancement === 18) {
    item.enhancement += 1;
    item.name = `[TET] ${item.origName}`;
  } else if (item.enhancement === 19) {
    item.enhancement += 1;
    item.name = `[PEN] ${item.origName}`;
  }
  return item;
}

function fail(item) {}

function repair(item) {
  let repairedItem = {
    name: item.name,
    type: item.type,
    durability: 100,
    enhancement: item.enhancement
  };
  return repairedItem;
}

module.exports = {
  success,
  fail,
  repair
};
