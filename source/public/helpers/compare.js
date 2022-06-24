function compareByTime(a, b) {
  if (a.time > b.time) {
    return 1;
  }
  return -1;
}

function compareByState(a, b) {
  const AA = a.state === 'open' ? 1 : 0;
  const AB = b.state === 'open' ? 1 : 0;

  if (AA > AB) {
    return 1;
  }
  return -1;
}

function compareByPriority(a, b) {
  if (a.priority < b.priority) {
    return 1;
  }
  return -1;
}

export {compareByTime, compareByState, compareByPriority};
