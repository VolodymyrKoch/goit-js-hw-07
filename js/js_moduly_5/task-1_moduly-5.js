// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со
// значениями свойств login и email объекта.
function Account(login, email) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function () {
  return `login: ${this.login}, email : ${this.email}`;
};
console.log(typeof Account.prototype.getInfo);
// // 'function'

const mango = new Account("Mangozedog", "mango@dog.woof");
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

// Объект, созданный вызовом new Account('Mangozedog', 'mango@dog.woof')
// при вызове метода getInfo() должен возвращать строку 'login : Mangozedog,
// email: mango@dog.woof'
