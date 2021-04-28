function showGender(gender) {
    if (gender == "a") {
        document.getElementById("allCatTable").style.display = "block";
        document.getElementById("maleCatTable").style.display = "none";
        document.getElementById("femaleCatTable").style.display = "none";
        document.getElementById("overCatTable").style.display = "none";
        document.getElementById("underCatTable").style.display = "none";
    }
    else if (gender == "m") {
        document.getElementById("maleCatTable").style.display = "block";
        document.getElementById("allCatTable").style.display = "none";
        document.getElementById("femaleCatTable").style.display = "none";
        document.getElementById("overCatTable").style.display = "none";
        document.getElementById("underCatTable").style.display = "none";
    }
    else {
        document.getElementById("femaleCatTable").style.display = "block";
        document.getElementById("allCatTable").style.display = "none";
        document.getElementById("maleCatTable").style.display = "none";
        document.getElementById("overCatTable").style.display = "none";
        document.getElementById("underCatTable").style.display = "none";
    }
}

function showAge(age) {
    if (age == "all") {
        document.getElementById("allCatTable").style.display = "block";
        document.getElementById("maleCatTable").style.display = "none";
        document.getElementById("femaleCatTable").style.display = "none";
        document.getElementById("overCatTable").style.display = "none";
        document.getElementById("underCatTable").style.display = "none";
    }
    else if (age == "o") {
        document.getElementById("overCatTable").style.display = "block";
        document.getElementById("maleCatTable").style.display = "none";
        document.getElementById("allCatTable").style.display = "none";
        document.getElementById("femaleCatTable").style.display = "none";
        document.getElementById("underCatTable").style.display = "none";
    }
    else {
        document.getElementById("underCatTable").style.display = "block";
        document.getElementById("femaleCatTable").style.display = "none";
        document.getElementById("allCatTable").style.display = "none";
        document.getElementById("maleCatTable").style.display = "none";
        document.getElementById("overCatTable").style.display = "none";
    }
}