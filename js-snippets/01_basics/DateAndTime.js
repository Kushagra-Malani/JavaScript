// Dates

// Note: month starts from '0' i.e zero based indexing is followed
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// If we want to declare a specific date then:
let myCreatedDate = new Date(2024, 0, 22)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2024-01-22")
console.log(myCreatedDate2.toLocaleString());