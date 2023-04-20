// Destructuring Arrays

let friends = ['John', 'James', 'Jeff', 'Josie', 'Julie', 'Janine']

const [friend1, friend2, friend3, ...rest] = friends

// console.log(friend1) // string
// console.log(friend2) // string
// console.log(friend3) // string
// console.log(rest) // []

friends = ['Kenny', ...friends, 'Jimmy']
console.log(friends) // []
