function success(item) {}

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
