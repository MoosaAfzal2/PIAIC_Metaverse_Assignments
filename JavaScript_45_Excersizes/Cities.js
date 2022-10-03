function Describe_City(City = "Karachi", Country = "Pakistan") {
    console.log(City, "is a city of", Country)
}

Describe_City()
Describe_City("Islamabad")
Describe_City("Hyderabad")

function City_Country(City, Country = "Pakistan") {
    var String = City + "," + Country
    return String
}

console.log(City_Country("Karachi"))
console.log(City_Country("Islamabad"))
console.log(City_Country("Lahore"))