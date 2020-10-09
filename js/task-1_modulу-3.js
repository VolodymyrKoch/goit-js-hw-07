// // -----task-1_modul-3----
let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

//Write code under this line

user.mood = "happy";
user["full time"] = true;
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  message = message + `${key}:${user.key}\n`;
}
// for (const key of keys) {
//   message += `${key}:${user[key]}\n`;
// }
// // ----------------------------------------------------
console.log(user);
console.log(message);
console.log(keys);
// console.log(key);
