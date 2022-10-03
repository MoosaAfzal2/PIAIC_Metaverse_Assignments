var Cities = "Karachi Peshawar Islamabad Hyderabad"
var Cities = Cities.split(" ")
console.log(Cities)

const Cities_Object = {}
for (var i = 0; i < Cities.length;i++) {
    Cities_Object["City_" + i] = Cities[i]
}

console.log(Cities_Object)