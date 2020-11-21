export {};

let name: any = 'Sho';

//let length = name.length as string;
let length = (name as string).length;
//let length = (<string>name).length; // この書き方は推奨されていない　JSXの記法とよく似ているため

//length = 'foo';
