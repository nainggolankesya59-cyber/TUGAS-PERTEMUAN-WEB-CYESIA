const genre = document.querySelector("#genre");

const daftarGenre = [
    "ACTION",
    "HORROR",
    "ROMANCE",
    "COMEDY"
];

let i = 0;

setInterval(function(){

    i++;

    if(i >= daftarGenre.length){
        i = 0;
    }

    genre.textContent = daftarGenre[i];

},4000);


document.querySelector("#register").addEventListener("click",function(){

    alert("Website Dalam Perbaikan");

});

document.querySelector("#login").addEventListener("click",function(){

    alert("Website Dalam Perbaikan");

});