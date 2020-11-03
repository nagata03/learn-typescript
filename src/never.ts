export {};

function newError(message: string): never {
  throw new Error(message);
}

try {
  let result = newError('test');
  console.log('hogehoge');
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = newError('only me!');
