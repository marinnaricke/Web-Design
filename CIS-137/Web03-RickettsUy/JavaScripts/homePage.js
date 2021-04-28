function startTimer()
{
    timer = setTimeout("loadPopup();", 1000);
}

function loadPopup()
{
    window.open('popUp.htm', '', 'scrollbars=0, resizable=0, top=200px, left=450px, width=450px, height=425px, padding=20px, position=fixed, margin-left=-220px, z-index=301');
}

