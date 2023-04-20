// While Loop

// let phrase = '1'

// // Check the condition before the first run
// // While the condition is true...
// while (phrase.length < 10) {
//     // ...log the number...
//     console.log(phrase)

//     // ...add 1 each time the loop runs to stop it looping infiniately...
//     phrase += phrase.length
//     // start again!
// }

// // ########

// // Check the condition after the first run
// do {
//     console.log('phrase')
// } while (false)

// Check a password but lock the user out if they guess 3 times
let passAttempt = 0
let passwordGuessed = false

const checkPassword = (passwordValue) => {
    const pass = prompt('What is the password?')
    passAttempt++

    if (pass == passwordValue) {
        passwordGuessed = true
    } else {
        passwordGuessed = false
    }
    return pass
}

do {
    let password = checkPassword('Password123')
    console.log(password)
} while (passAttempt <= 3 && !passwordGuessed)
