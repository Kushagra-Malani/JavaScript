// De-structuring
const course = {
    name: "JS full",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: Prof} = course
console.log(Prof);