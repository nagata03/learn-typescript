export {};

class Person {
  // 下の書き方の場合、readonly である場合以外は public は明記する必要がある
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Sho', 34);
console.log(me);
