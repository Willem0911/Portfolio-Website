function showMobileNav() {
    let mobileNav = document.getElementById("mobileNav");
    mobileNav.style.width = "100vw";
    
}
function hideMobileNav() {
    let mobileNav = document.getElementById("mobileNav");
    mobileNav.style.width = "0vw";
}
let text = document.getElementById("fullName");
let fullText = text.innerHTML;
let lenText = fullText.length;
text.innerHTML = "";
let endText = ""
console.log(lenText);
let i = 0;
const myFunction = (i) => {
    setTimeout(() => {
        endText += fullText[i];
        text.innerHTML = endText + "|";
        i++;

        if (i < lenText){
            
            myFunction(i);
        }
        else {
            endText = endText.slice(0, -1);
            text.innerHTML = endText;
        }
    },75);
};
myFunction(i);