const array = [];
var Randomizer = 0;

for (i = 1; i <= 49; i++) {
  Randomizer = Math.floor(Math.random() * 900) + 100;
  array.push(Randomizer);
  console.log(i + ". " + Randomizer);
}
