let nextBtn=document.querySelector(".next");
let preBtn=document.querySelector(".pre");
let animal=document.querySelectorAll(".animal");
let listItem=document.querySelectorAll(".animal .list");
let thumbnail=document.querySelectorAll(".animal .thumbnail");
let timeRunning=3000;
let runTimeOut;

nextBtn.onclick=function(){
    showSlider('next');
}
preBtn.onclick=function(){
    showSlider('pre');
}
function showSlider(type){
    let itemSlider=document.querySelectorAll(".animal .list .item");
    let itemThumbnail=document.querySelectorAll(".animal .thumbnail");
    if(type=='next'){
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        animal.classList.add('next')
    }
    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(() => {
        animal.classList.remove("next")
    }, timeRunning);
}