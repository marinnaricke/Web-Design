function showSkunk()
{
    if (document.getElementById("checkboxSkunk").checked == true)
    {
        document.getElementById("skunk").src = "../images/skunkTwo.jpg";
    }
    else
    {
        document.getElementById("skunk").src = "../images/adoptCats/adoptcat14.jpg";
    }
}