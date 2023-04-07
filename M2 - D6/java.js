function changeH1(){
    let title = document.querySelector("h1");
    title.innerText = "SmartShop";
    
}
console.log(changeH1());

function changeBG() {
    let pageBg = document.querySelector("body");
    pageBg.style.background = "#f1f1f1";

}
console.log(changeBG());

function changeAddress() {
    let addres = document.getElementById("address");
    addres.innerText = "via MartinaFranca";
    
}
console.log(changeAddress());

function addClassToLink() {
    let links = document.querySelectorAll("a");

    for ( i= 0; i < links.length; i++){
        links[i].classList.add("amazonLink")
    }
}

console.log(addClassToLink());

function imageClass() {
    let img = document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++) {
        img[i].classList.add ("visibility");
        
    }
}
console.log(imageClass());

function priceColor() {
    let price = document.querySelectorAll(".price");
    let red = 200;
    let green = 200;
    let blue = 200;
    red = Math.round(Math.random()* 255);
     green = Math.round(Math.random() * 255);
     blue = Math.round(Math.random() * 255);
     let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
    for (let i = 0; i < price.length; i++) {
        price[i].style.color = randomColor;
        
    }
}
console.log(priceColor());


