let name = 'burak berber'
//uzunluk özelliği
console.log(name.length)
//convert to upper case

console.log(name.toUpperCase())
console.log(name.toLowerCase())

//includes methods
let password='abc123password896'
console.log(password.includes('password'))

//trim
console.log(name.trim())

//exampleArea
//isvalidPassword
let isValidPassword= function (password){
if(password.lenght>8 && !password.includes('password'))
return true
 else {
    return false
 }
}
//lenght is more than 8 - and it doesn't contain the word password

console.log(isValidPassword('asdfg'))
console.log(isValidPassword('abc123'))
console.log(isValidPassword('asdfpa'))
console.log(isValidPassword('8'))
console.log(isValidPassword('7'))
console.log(isValidPassword('burakburakburakburak'))
console.log(isValidPassword('niğdeniğde'))






