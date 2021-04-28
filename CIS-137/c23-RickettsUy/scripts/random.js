//Generate random #s
//Says create a random number from 1 to 3
function startInterval()
{
    rnTimer = window.setInterval("getRandom()", 1500);
}

function stopInterval()
{
    clearInterval(rnTimer);
}

function getRandom()
{
    //rn = Math.floor(Math.random() * 500) + 100;
    //window.alert(rn);
    beginPixel = document.getElementById("TextBegin").value;
    range = document.getElementById("TextRange").value;
    rn = Math.floor(Math.random() * parseInt(range)) + parseInt(beginPixel);
    document.getElementById("TextRandom").value= rn;
}

