# Searchico
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

var results = collection.find('alex');
/* returns [
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 2, name: 'Alexey Hopper', location: 'Lake Charles' }
] */

var results = collection.find('orlea');
/* returns [
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 3, name: 'Jack Tyson', location: 'New Orleans' }
] */
```

### Options
```js
var searchico = require('searchico');
var data = [
    { id: 1, name: 'Alex Carter', location: 'New Orleans' },
    { id: 2, name: 'Alexey Hopper', location: 'Lake Charles' },
    { id: 3, name: 'Jack Tyson', location: 'New Orleans' },
    { id: 4, name: 'Tyler Miles', location: 'Camas' }
];
var options = {
    case_sensitive: true,   // false by default
    hyper_indexing: true,   // true by default, high speed search, memory intensive
    hyper_caching: true,    // false by default, even faster, memory intensive
    replace_umlauts: true,  // true by default, allows finding umlauts with their english alphabets
}
var collection = searchico(data, options);
```