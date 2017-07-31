# Searchico
[![Build Status](https://travis-ci.org/illusion1993/searchico.svg?branch=master)](https://travis-ci.org/illusion1993/searchico)
[![npm version](https://badge.fury.io/js/searchico.svg)](https://badge.fury.io/js/searchico)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/illusion1993/searchico/master/LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)

> A **very** fast full-text search in JavaScript

## Install
### From NPM
```sh
npm install searchico
```
### From GitHub
```sh
npm install git+https://github.com/illusion1993/searchico.git
```
## Documentation
### Init
```js
var searchico = require('searchico');
var collection = searchico([
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 2, name: 'Alexey Hopper', location: 'Lake Charles' },
    { id: 3, name: 'Jack Tyson', location: 'New Orleans' },
    { id: 4, name: 'Tyler Miles', location: 'Camas' }
]);
var results1 = collection.find('alex');
var results2 = collection.find('orlea');

/* 
results1 = [
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 2, name: 'Alexey Hopper', location: 'Lake Charles' }
] 
results2 = [
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 3, name: 'Jack Tyson', location: 'New Orleans' }
] 
*/
```

### Options
```js
var searchico = require('searchico');
var options = {
    case_sensitive: true,   // false by default
    hyper_indexing: true,   // true by default, high speed search, memory intensive
    hyper_caching: true,    // false by default, even faster, memory intensive
    replace_umlauts: true,  // true by default, allows finding umlauts with their english alphabets
    deep: false,            // true by default, allows indexing objects deeply
    keys: ['id', 'name']    // name of keys in objects to add into index
};
var data = [
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 2, name: 'Alexey Hopper', location: 'Lake Charles' },
    { id: 3, name: 'Jack Tyson', location: 'New Orleans' },
    { id: 4, name: 'Tyler Miles', location: 'Camas' }
];
var collection = searchico(data, options);
var results = collection.find('Ty');
```

### Usages
 - **Object arrays**
   ```js
    var data = [{ id:2, name: 'Apple' }, { id: 14, name: 'Orange' }];
    var collection = searchico(data);
   ```
 - **String Arrays**
   ```js
   var data = ['Apple', 'Orange', 'Guava'];
   var collection = searchico(data);
   ```
 - **Mixed Arrays**
   ```js
   var data = ['Apple', { id: 14, name: 'Orange' }, 'Guava'];
   var collection = searchico(data);
   ```

## License
[MIT][license] © [Vikram Singh Rathore][author]

[license]: LICENSE
[author]: https://github.com/illusion1993
