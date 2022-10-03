const Age = 18

if (Age < 2) {
    console.log("This Person is a Baby")
}
else if (Age < 2 && Age <= 4) {
    console.log("This Person is a Toddler")
}
else if (Age < 4 && Age <= 13) {
    console.log("This Person is a Kid")
}
else if (Age < 13 && Age <= 20) {
    console.log("This Person is a Teenager")
}
else if (Age < 20 && Age <= 65) {
    console.log("This Person is a Adult")
}
else if (Age > 65) {
    console.log("This Person is a Elder")
}