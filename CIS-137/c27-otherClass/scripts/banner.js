
// Banner Ad Functions
function displayAds()
{
    var timer = setInterval("showBannerAd();", 5000);
}

function showBannerAd()
{
    //Create a random number  (to get upper range - add together and subtract 1)
    var myRandomNumber;
    myRandomNumber = Math.floor(Math.random() * 5) + 1;  //RN between 1 and 5
    //window.alert("Random Number is " + myRandomNumber);
    document.getElementById("ImageBanner").src = "images/Nature" +
                myRandomNumber + ".PNG";
}

// Other functions

