map2json = (inputMap) => {
  if (!(inputMap instanceof Map)) {
    throw new Error(`${inputMap} is not a valid Map`);
  }

  const outputObj = {}
  inputMap.forEach((k, v) => {
    return outputObj[v] = k;
  });
  return outputObj;
}

module.exports = map2json;
