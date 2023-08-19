const course = {
    coursename: "javascript course",
    price: "999",
    courseInstructure: "subodh",
}

console.log(course.courseInstructure);//First way to print
const { courseInstructure } = course//Second Method to print
console.log(courseInstructure);

const {courseInstructure : Instructor } =course; //Destructure
console.log(Instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]