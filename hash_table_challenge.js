// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const firstRecurringCharacter = (input) => {
    const uniqueElement = []
    for (let i = 0; i < input.length; i++){
        if (!uniqueElement || !uniqueElement.includes(input[i])) {
            uniqueElement.push(input[i])
        } else {
        return input[i]
        }
    }
    return undefined
}

const firstRecurringCharacter2 = (input) => {
    let map = {}
    for (let i = 0; i < input.length; i++){
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined
}

// console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter2([2,3,4,5])); 

console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])); 
console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])); 
console.log(firstRecurringCharacter2([2,3,4,5])); 