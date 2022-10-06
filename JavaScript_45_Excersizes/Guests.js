// ***** Guests List *****
const Guests = ["Umar", "Ali", "Areeb"]
for (var i in Guests) {
    console.log(`Hello ${Guests[i]}, Would you like to Come to Dinner Today?`)
}

// ***** Changing Guests List *****
console.log("\nUmar cannot Come to Dinner.\n")

Guests[0] = "Imran"
for (var i in Guests) {
    console.log(`Hello ${Guests[i]}, Would you like to Come to Dinner Today?`)
}
console.log("\nI have Found a Bigger Dinner Table!\n")

// ***** More Guests List *****
Guests.unshift("Kamran")
Guests.splice(2, 0, "Mustafa")
Guests.push("Abdullah")

for (var i in Guests) {
    console.log(`Hello ${Guests[i]}, Would you like to Come to Dinner Today?`)
}

// ***** Shrink Guests List *****
console.log("\nI can only invite Two people to Dinner, Sorry!\n")

const not_invited = Guests.splice(2)
for (var i in Guests) {
    console.log(`Hello ${not_invited[i]}, I am sorry i can only invite two People`)
}

for (var i in Guests) {
    console.log(`Hello ${Guests[i]}, You are Still Invited`)
}

Guests.splice(0, 2)
console.log(Guests)