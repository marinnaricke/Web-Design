function displayAnimalPics()
{
    var animalTimer = setInterval("showAnimalPics();", 4000);
}

function showAnimalPics()
{
    var animalRn;
    animalRn = Math.floor(Math.random() * 10) + 1;
    document.getElementById("holidayPics").src = "images/holidayAnimals/festive" +
        animalRn + ".jpg";
}