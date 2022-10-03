function Make_Cars(Manufacturer = "Honda", Model = "Civic", Color, Top_Speed) {
    Car = {
        Manufacturer: Manufacturer,
        Model: Model,
        Color: Color,
        Top_Speed: Top_Speed
    }
    return Car
}

console.log(Make_Cars("Honda","Civic","Red","137 mph"))
console.log(Make_Cars("Toyota","Camry","Black","135 mph"))