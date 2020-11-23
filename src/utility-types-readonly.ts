export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Sho',
  age: 34,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 30,
};

//friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
