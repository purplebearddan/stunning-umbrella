//  For Each Loop

const students = [
    {
        name: 'John Smith',
        course: 'Front End Development',
        startDate: '20/04/2023',
    },
    {
        name: 'Jane Smith',
        course: 'Data Science',
        startDate: '20/04/2023',
    },
    {
        name: 'Gary Jones',
        course: 'Full Stack Development',
        startDate: '20/04/2023',
    },
    {
        name: 'Samantha Hughes',
        course: 'Front End Development',
        startDate: '20/04/2023',
    },
]

// String[]
// Number[]
// Object[]

students.forEach((student, index) => {
    console.log(
        index,
        `Welcome ${student.name}, you are due to start your ${student.course} on ${student.startDate}!`,
    )
})

// Array.map()
const studentNames = students.map(({ name, course }) => {
    return [name, course]
})

studentNames.forEach((name) => console.log(name))

// Array.filter()
const nonFrontendStudents = students.filter(({ course }) => {
    return course !== 'Front End Development'
})

console.log(nonFrontendStudents)

// Array.reduce()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbersSum = numbers.reduce((accumulator, currentItem) => {
    return accumulator + currentItem
})

console.log(numbersSum)

// // Callback Functions

// // funciton that takes a function as an argument/parameter

// const otherCallback = (arg, cb) => {
//     console.log(arg)
//     return cb(5)
// }

// const functionName = (cb) => {
//     cb('Hello World', console.log)
// }
// console.log(functionName(otherCallback))
