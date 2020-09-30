let times = document.querySelectorAll("header .time div");
[...times].forEach(li=> li.onclick=function(){
    document.querySelector("header .time div.active").classList.remove("active");
    this.classList.add("active");
});


document.querySelector('header .log').onclick=function(){
    console.log('asdasd');
    document.querySelector('header .log .form').classList.remove('d-none');
} 
