// const count = 8;
// console.log('count: %d oh This beatiful', count);
// // Prints: count: 5, to stdout
// console.log('count:', count);
// // Prints: count: 5, to stdout
// Use 'import' instead of 'require' for ES modules
import https from 'https';
import http from 'http';
import {Requests, Response} from './requeib.mjs';

var requests = new Requests();
var resp = new Response();
let data = {
    name: 'John',
    age: 30
};

// requests.get(https, 'www.google.com', callback);
requests.get(https, 'www.google.com', '/', resp);

console.log(resp.data);
// requests.post(https, 'www.google.com', '/', data, (resp) => {console.log(resp);});
// requests.delete(https, 'www.google.com', '/', data, (resp) => {console.log(resp);});
// requests.put(https, 'www.google.com', '/', data, (resp) => {console.log(resp);});
// // requests.options(https, 'www.google.com', '/', data, (resp) => {console.log(resp);});
// requests.patch(https, 'www.google.com', '/', data, (resp) => {console.log(resp);});

//console.log(callback);
// console.log("\n\n\n\n\n\n\n");
//console.log(callback2);




// requests.get(https, 'www.google.com', (resp) => {console.log(resp);});