var user_names = ["umar", "moosa", "ali", "abdullah", "areeb"]
var new_users = ["Moosa", "Babar", "Ali", "Fakhar", "Raza"]

for (i in new_users) {
    if (user_names.includes(new_users[i].toLowerCase())) {
        console.log("Please Enter a new username")
    }
    else {
        console.log("This Username is available.")
    }
}