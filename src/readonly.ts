export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Sho');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'しょう';
