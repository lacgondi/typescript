"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
function square(szam) {
    return szam * szam;
}
let message = "Hello cruel world";
console.log(message);
let value = 5;
value = "dope";
if (message.startsWith("H")) {
    console.log("H-val kezdődik");
    value = 1;
}
else {
    value = 2;
}
let s = square(3);
let a = new User_1.User("dog", 45);
a.kiir();
let users = [];
users.push(new User_1.User("secondUser", 10));
users.push(a);
console.log(users);
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames = ['str1', 'user2'];
let userHalmaz = new Set();
let nevUser = new Map();
let nevUser2 = new Map();
nevUser2.set("usernev", new User_1.User("usernev", 33));
(_a = nevUser2.get("usernev")) === null || _a === void 0 ? void 0 : _a.kiir();
function sum(t) {
}
// console.log(sum([1,24,8982]));
// console.log(sum(['a','sf','ca']));
function IDKiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
IDKiir(12);
IDKiir("asjkdif");
let elem = document.getElementById('asdf');
if (elem !== null) {
    console.log(elem.textContent);
}
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
function szamol() {
    let szam = parseInt(document.getElementById('szam').value);
    document.getElementById('kimenet').textContent = square(szam).toString();
}
function init() {
    var _a;
    (_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', szamol);
}
document.addEventListener('DOMContentLoaded', init);
