// const testString = 'a*e34^&as6Fuip'
// const withoutDigits = 'asdlkT'
//
// const passwordRegex = /[0-9]+[A-Z]+[!?,.:;*-+/=@#$%^&_'"`~]+[a-z]+/
// const emailRegex =
// 	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
// const emailRegex =
// 	"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
// const regex = new RegExp(emailRegex)

// console.log(regex.test('test@email.ru'))
// console.log(emailRegex.toString())


// let testTimeout = setTimeout(() => console.log('testTimeout'), 5000)
// clearTimeout(testTimeout)
// testTimeout = null



let testValue = {value: 0};

const testFunction = (value) => {
	testValue.value += 5
}

testFunction(testValue)

console.log(testValue)



