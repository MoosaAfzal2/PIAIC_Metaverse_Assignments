var user_names = ["Umar", "Admin", "Ali", "Abdullah", "Areeb"]

for (var i in user_names) {
    if (user_names[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?")
    }
    else {
        console.log(`Hello ${user_names[i]}, thank you for logging in again.`)
    }
}