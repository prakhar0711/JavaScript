//destructuring
const course = {
  coursename: "javascript",
  price: "999",
  courseInstructor: "tushar",
};

const { courseInstructor: instructor } = course;
console.log(instructor);
