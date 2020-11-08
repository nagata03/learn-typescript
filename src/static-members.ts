export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Nagata';
  static lastName: string = 'Sho';

  static work(): string {
    return `Hey, guys! This is ${this.firstName}!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
