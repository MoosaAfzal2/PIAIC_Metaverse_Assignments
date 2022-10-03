var Magicians = ["Gandalf The Grey", "Saruman The White", "Radagast The Brown"]

function Show_Magicians(Magicians) {
    for (i in Magicians) {
        console.log(Magicians[i])
    }
}

Show_Magicians(Magicians)

function Make_Great(Magicians) {
    for (i in Magicians) {
        Magicians[i] = "The Great " + Magicians[i]
    }
}

Make_Great(Magicians)
console.log(Magicians)