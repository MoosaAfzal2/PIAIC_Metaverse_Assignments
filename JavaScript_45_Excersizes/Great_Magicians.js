function Make_Great(Magicians) {
    for (i in Magicians) {
        Magicians[i] = "The Great " + Magicians[i]
    }
}

Make_Great(Magicians)
console.log(Magicians)