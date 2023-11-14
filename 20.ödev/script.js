let dog = {
    dogName: 'Sylvie',
    dogLeg: 4,
    dogColor: 'brown',
    dogAge: 10,
    // yeni özellik
    dogBreed: 'golden'
}

dogBark = function(){
    return 'woof woof'
}
console.log(dog)

dogBark()

let name = dog.dogName
let leg = dog.dogLeg
let color = dog.dogColor
let age = dog.dogAge
let cins = dog.dogBreed

console.log(name)
console.log(leg)
console.log(color)
console.log(age)
console.log(cins)
