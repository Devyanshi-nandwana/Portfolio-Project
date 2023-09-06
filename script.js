// const colorButton= document.getElementById("colorButton");
// const header= document.querySelector("header");

const color =[ "#FF3333" , "#FF9C33" , "#FCFF33" , "#B5FF33 " , "#46FF33" , "#33FFBE" , "#33D4FF" , "#3393FF", "#3358FF" , "#6133FF" ,"#D133FF" , "#FF33F3" , "#FF33BE" , "#FF338D" , "#FF3368" , "#FF3336"]

function changecolor(){
    console.log("click");
    const randomIndex = Math.floor(Math.random()*color.length );
    // header.style.backgroundcolor=color[randomIndex];
    document.getElementById("man").style.backgroundColor=color[randomIndex];
}