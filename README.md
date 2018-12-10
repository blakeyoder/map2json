# map2json

Convert a JS [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to a JS `Object`.
The Map data structure gives developers a handful of different, and often useful features in comparison to a plain `Object`.
For a deeper dive into the `Object` vs. `Map` comparison, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared.

**Installation:**
```$ npm i --save map2json```

**Example Code:**
```
$ const map2json = require('map2json');
$ const anonFnc = () => {console.log('fnc called')};
$ const inputMap = new Map([[1, ['hello', 'world']], ['fnc', anonFnc]]);
$ const objFromMap = map2json(inputMap);
$ console.log(objFromMap)
$ { '1': [ 'hello', 'world' ], fnc: [Function: anonFnc] }
```

**Note:** This package does not provide a 2-way data conversion. It _only_ transforms a `Map` into an `Object`. 
For example, this could be useful for manipulating data within a Map while outputting `JSON` to a REST API.
