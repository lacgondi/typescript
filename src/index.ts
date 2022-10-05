import { User } from "./User";

function square(szam: number) {
  return szam * szam;
}

let message: string = "Hello cruel world";
console.log(message);
let value: any = 5;
value = "dope";

if (message.startsWith("H")) {
  console.log("H-val kezdődik");
  value = 1;
} else {
  value = 2;
}

let s: number = square(3);

let a:User = new User("dog", 45);
a.kiir();



let users :User[] = [];
users.push(new User("secondUser", 10));
users.push(a);
console.log(users);
let u = users[1];
for(let e of users){
    e.kiir();
}
let usernames : Array<string> = ['str1', 'user2'];
let userHalmaz : Set<User> =new Set();

let nevUser : Map<string, User> = new Map();
let nevUser2 = new Map<string, User>();
nevUser2.set("usernev", new User("usernev",33));
nevUser2.get("usernev")?.kiir();

function sum(t:number[]| string[]){
    
}
// console.log(sum([1,24,8982]));
// console.log(sum(['a','sf','ca']));

function IDKiir(id:string|number){
    if(typeof id === 'number'){
        console.log(id);
    }else{
        console.log(id.toUpperCase());
    }
}

IDKiir(12);
IDKiir("asjkdif");

let elem = document.getElementById('asdf');
if(elem !== null){
    console.log(elem.textContent)
}
console.log(elem?.textContent);

function szamol(){
    let szam = document.getElementById('szam');
    document.getElementById('kimenet')?.textContent = square(szam)
}

function init(){
    document.getElementById('szam')?.addEventListener('input', szamol);
}

document.addEventListener('DOMContentLoaded', init);