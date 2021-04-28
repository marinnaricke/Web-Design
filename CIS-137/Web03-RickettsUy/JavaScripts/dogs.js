function showGender(gender)
{
    if (gender == "a")
    {
        document.getElementById("allTable").style.display = "block";
        document.getElementById("maleTable").style.display = "none";
        document.getElementById("femaleTable").style.display = "none";
        document.getElementById("overTable").style.display = "none";
        document.getElementById("underTable").style.display = "none";
    }
    else if (gender == "m")
    {
        document.getElementById("maleTable").style.display = "block";
        document.getElementById("allTable").style.display = "none";
        document.getElementById("femaleTable").style.display = "none";
        document.getElementById("overTable").style.display = "none";
        document.getElementById("underTable").style.display = "none";
    }
    else
    {
        document.getElementById("femaleTable").style.display = "block";
        document.getElementById("allTable").style.display = "none";
        document.getElementById("maleTable").style.display = "none";
        document.getElementById("overTable").style.display = "none";
        document.getElementById("underTable").style.display = "none";
    }
}

function showAge(age,gender)
{
    if (age == "all")
    {
        document.getElementById("allTable").style.display = "block";
        document.getElementById("maleTable").style.display = "none";
        document.getElementById("femaleTable").style.display = "none";
        document.getElementById("overTable").style.display = "none";
        document.getElementById("underTable").style.display = "none";
    }
    else if (age == "o")
    {
        document.getElementById("overTable").style.display = "block";
        document.getElementById("maleTable").style.display = "none";
        document.getElementById("allTable").style.display = "none";
        document.getElementById("femaleTable").style.display = "none";
        document.getElementById("underTable").style.display = "none";
    }
    else
    {
        document.getElementById("underTable").style.display = "block";
        document.getElementById("femaleTable").style.display = "none";
        document.getElementById("allTable").style.display = "none";
        document.getElementById("maleTable").style.display = "none";
        document.getElementById("overTable").style.display = "none";
    }
}