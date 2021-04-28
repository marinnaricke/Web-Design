function displayDogPics()
{
    var dogTimer = setInterval("showDogPics();", 6000);
}

function showDogPics()
{
    var dogRn;
    dogRn = Math.floor(Math.random() * 15) + 1;
    document.getElementById("DogImages").src = "images/adoptDogsThumb/adoptdog" +
        dogRn + "thumb.jpg";
}

function displayCatPics()
{
    var catTimer = setInterval("showCatPics();", 5000);
}

function showCatPics()
{
    var catRn;
    catRn = Math.floor(Math.random() * 12) + 1;
    document.getElementById("CatImages").src = "images/adoptCatsThumb/adoptcat" +
        catRn + "thumb.jpg";
}