const marvel_heros1 = ["thor", "ironman", "spiderman"]
const dc_heros1 = ["superman", "flash", "batman"]

marvel_heros1.push(dc_heros1)
console.log(marvel_heros1);

const marvel_heros2 = ["thor", "ironman", "spiderman"]
const dc_heros2 = ["superman", "flash", "batman"]

const new_heros = [...marvel_heros2, ...dc_heros2]
console.log(new_heros);

const another_array = [1,2,3,[4,5,6],7,[9,8,[7,6,5]]]
console.log(another_array);
const useable_array = another_array.flat(Infinity)
console.log(useable_array);

const name1 = "Hitesh"
const num1 = [1,2,3]
console.log(Array.isArray(name1));
console.log(Array.isArray(num1));
console.log(Array.from(name1));

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));