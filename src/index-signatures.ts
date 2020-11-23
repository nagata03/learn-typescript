export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Sho';
profile.age = 34;
profile.nationality = 'Japan';
