function startInterval()
{
    rnTimer = window.setInterval("changeBlocks()", 1000);
}

function changeBlocks()
{
    rn1 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("Div1").style.zIndex = rn1;

    rn2 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("Div2").style.zIndex = rn2;

    rn3 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("Div3").style.zIndex = rn3;

}