function getCards()
{
    rn1 = Math.floor(Math.random() * 11) + 1;
    document.getElementById("imageCard1").src = "images/cards/" + rn1 + "h.jpg";
    document.getElementById("imageCard1").style.visibility = "visible";

    rn2 = Math.floor(Math.random() * 11) + 1;
    document.getElementById("imageCard2").src = "images/cards/" + rn2 + "h.jpg";
    document.getElementById("imageCard2").style.visibility = "visible";

    rn3 = Math.floor(Math.random() * 11) + 1;
    document.getElementById("imageCard3").src = "images/cards/" + rn3 + "h.jpg";
    document.getElementById("imageCard3").style.visibility = "visible";

    total = rn1 + rn2 + rn3;

    if (total>21)
    {
        document.getElementById("TextBoxTotal").value = "Total is " +
            total + ". Your Busted!";
    }
    else
    {
        document.getElementById("TextBoxTotal").value = "Total is " +
            total + ". You Win!"
    }
}