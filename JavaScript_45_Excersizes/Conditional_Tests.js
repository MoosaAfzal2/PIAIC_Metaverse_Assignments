const Cars = ["Ferrari", "Honda", "lamborghni"]
const Car = "Honda"
console.log("Honda" == Car)
console.log("Ferrari" == Car)
console.log("HONDA" == Car.toUpperCase())
console.log("honda" == Car)
console.log(Car.length > 3)
console.log(Car.length < 2)
console.log("Honda" == Car || "Ferrari" == Car)
console.log("Honda" == Car && "Ferrari" == Car)
console.log(Cars.includes(Car))
console.log(!Cars.includes(Car))