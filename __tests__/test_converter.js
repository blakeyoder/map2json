const map2json = require('../src/map2json.js');

test('Map is converted to valid JSON', () => {
  const anonFnc = () => {console.log('fnc called')};

  const input = [[1, ['hello', 'world']], ['fnc', anonFnc]];
  const outputObjj = {"1": ["hello", "world"], "fnc": anonFnc};

  const inputMap = new Map(input);
  const objFromMap = map2json(inputMap);

  expect(objFromMap).toEqual(outputObjj);
});
