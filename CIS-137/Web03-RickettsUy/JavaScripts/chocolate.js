function showChocolate()
{
    if (document.getElementById("checkboxChocolate").checked == true)
    {
        document.getElementById("chocolate").src = "../images/chocolateTwo.jpg";
    }
    else
    {
        document.getElementById("chocolate").src = "../images/adoptDogs/adoptdog9.jpg";
    }
}