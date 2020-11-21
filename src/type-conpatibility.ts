export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

//fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(34, 'Sho');

// オブジェクト間の代入でも型の互換性は必ず評価される
// その時各々の型が一致しているかどうかは全く気にしない
// 代入されるオブジェクトで持つメンバが代入するオブジェクトの方でも存在するか、
// そしてメンバの型に互換性があるかを評価する
