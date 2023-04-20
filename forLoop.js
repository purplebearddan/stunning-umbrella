// For Loop

for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// using a for loop with an array
const colors = ['red', 'green', 'blue']
//                       3
// for (let x = 0; x < colors.length; x++) {
//     console.log(colors[x])
// }

// for...of
// for use with arrays
for (const color of colors) {
    console.log(color)
}

// For...in Loop
// for use with objects
const book = {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    language: 'English',
    genre: ['High Fantasy', 'Adventure'],
}

const books = [book, book, book, book]

for (const key in book) {
    console.log(`${key}: ${book[key]}`)
}

for (const book of books) {
    console.log('--------------------------')
    for (const key in book) {
        console.log(`${key.toUpperCase()}: ${book[key]}`)
    }
}

// for (const doggo of doggos) {
//     pet(doggo)
// }
