// Destructuring 
const course = {
    coursename: "aptitude",
    price: "899",
    courseFaculty:"Amit"
}
const {courseFaculty: faculty} = course //destructuring
console.log(faculty)