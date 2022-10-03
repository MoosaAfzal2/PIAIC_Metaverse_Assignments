function Make_Album(Album_name, Artist_name, Tracks) {
    var Album = {
        Album: Album_name,
        Artist: Artist_name,
        Tracks: Tracks
    }
    return Album
}

console.log(Make_Album("Thriller", "Michael Jackson", 20))
console.log(Make_Album("Back in Black", "AC/DC", 10))
console.log(Make_Album("Hotel California", "Eagles", 30))