# node-imei
## Description
imei generator/checker (via Luhn algorithm) forked from [https://github.com/BadMachine/node-imei](https://github.com/BadMachine/node-imei)
with minor changes made to make this package Typescript-compatible. Also added types definitions

## Installation
    $ npm install node-imei-ts
    
## Usage
``` javascript
var imei = require('node-imei-ts');

console.log(IMEI.random()); // returns string with random imei

console.log(IMEI.device("Apple","iPhone3G")); // returns string with imei by device TAC

console.log(IMEI.isValid("860921035123120")); // returns true
```

``` typescript
export imei from 'node-imei-ts'

console.log(IMEI.random()); // returns string with random imei

console.log(IMEI.device("Apple","iPhone3G")); // returns string with imei by device TAC

console.log(IMEI.isValid("860921035123120")); // returns true
```

### random()
Returns a string with valid imei. Script makes string with 3 parts:
1st part is TAC (Type Allocation Code)
2nd part is random value from 100000 to 999999
3rd part is last digit(Luhn digit)

### isValid(imei)
Returns a boolean value.
# Also
codes.js contains json object with Type Allocation Codes.
## If you want to extend the file
Just add new TAC`s in codes.js
More info and examples of TAC`s you can find at 
[wiki](https://en.wikipedia.org/wiki/Type_Allocation_Code)
or
[OSMOCOM direct link to download TACs db in json](http://tacdb.osmocom.org/export/tacdb.json)

# License

  [MIT](LICENSE)
