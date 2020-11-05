export {};

function double(value: number): number;
function double(value: string): string;

// overload するときは関数の実態側での型宣言は any 型でよい
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

//function double(value: string): string {
//  return value + value;
//}

console.log(double(100));
console.log(double('Go'));
//console.log(double(true));
