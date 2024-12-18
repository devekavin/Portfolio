console.log("%c Kavin!!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113);padding:20px;");
console.log("%cHey Curious, If you like my work feel free to contact me @Kavin", "color:greenyellow; font-family:monospace; font-size: 15px");
// copyright year
let $4fa36e821943b400$var$currentYear = new Date();
document.getElementById("year").innerHTML = $4fa36e821943b400$var$currentYear.getFullYear();
// toggle button
document.getElementById("switch").addEventListener("click", function() {
    let bodyTheme = document.body;
    bodyTheme.classList.toggle("theme");
});
// scroll to top
document.getElementById("scrollBtn1").addEventListener("click", function() {
    document.getElementById("containerForScroll").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
document.getElementById("scrollBtn2").addEventListener("click", function() {
    document.getElementById("containerForScroll").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
document.getElementById("scrollBtn3").addEventListener("click", function() {
    document.getElementById("containerForScroll").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


//# sourceMappingURL=index.js.map
