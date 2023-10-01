let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#50d50d"

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", () =>
{
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Товар 1");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", () =>
{
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Товар 2");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", () =>
{
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Товар 3");
        item = "3";
        tg.MainButton.show();
    }
});


btn4.addEventListener("click", () =>
{
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Товар 4");
        item = "4";
        tg.MainButton.show();
    }
});


btn5.addEventListener("click", () =>
{
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Товар 5");
        item = "5";
        tg.MainButton.show();
    }
});


btn6.addEventListener("click", () =>
{
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Товар 6");
        item = "6";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    tg.sendData(JSON.stringify(item));
});

let usercard = document.getElementById("usercard")
let p = document.createElement("p")
p.innerText = `${tg.initDataUnsafe.user.first_name}`;

usercard.appendChild(p);
