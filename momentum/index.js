$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}

const images=['momentum_img/8.jpg','momentum_img/12.jpg','momentum_img/hp_christmas.png']
const img_num=3;

const getRandom=() {
    return Math.floor(Math.random()*img_num)
}

const paintimg(imgNum){
    const background_img="url('"images[imgNum]+"')";
    // background_img.src=images[img_num];
    body.style.background-image=background_img;
}