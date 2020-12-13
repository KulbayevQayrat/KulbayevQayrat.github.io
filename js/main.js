
let modal = document.querySelector('.modal');
let modalAdv = document.querySelector('.modal__adv');
let timer = document.querySelector('.time');
let modalImg = document.getElementById("modal_video");
let close = document.getElementsByClassName("close")[0];

const modals = (id) => {
    console.log(id);
    modal.style.display = "block";
    modalImg.src = id;
};

close.addEventListener('click', function () {
    modal.style.display = "none";
    modalAdv.style.display = 'none';
    if (modalImg.paused) {
        modalImg.play();
    } else {
        modalImg.pause();
    }
});

/////////////
let x = 0,
    container = $('.center'),
    container1 = $('.center1'),
    container2 = $('.center2'),
    container3 = $('.center3'),
    container4 = $('.center4'),
    container5 = $('.center5'),
    items = container.find('li'),
    items1 = container1.find('li'),
    items2 = container2.find('li'),
    items3 = container3.find('li'),
    items4 = container4.find('li'),
    items5 = container5.find('li'),
    containerHeight = 0,
    numberVisible = 7,
    intervalSec = 500;
if(!container.find('li:first').hasClass("first")){
    container.find('li:first').addClass("first");
}
if(!container1.find('li:first').hasClass("first")){
    container1.find('li:first').addClass("first");
}
if(!container2.find('li:first').hasClass("first")){
    container2.find('li:first').addClass("first");
}
if(!container3.find('li:first').hasClass("first")){
    container3.find('li:first').addClass("first");
}
if(!container4.find('li:first').hasClass("first")){
    container4.find('li:first').addClass("first");
}
if(!container5.find('li:first').hasClass("first")){
    container5.find('li:first').addClass("first");
}
items.each(function(){
    if(x < numberVisible){
        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});
items1.each(function(){
    if(x < numberVisible){
        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});
items2.each(function(){
    if(x < numberVisible){
        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});
items3.each(function(){
    if(x < numberVisible){
        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});
items4.each(function(){
    if(x < numberVisible){
        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});
items5.each(function(){
    if(x < numberVisible){
        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});
container.css({ height: containerHeight, overflow: "hidden" });
container1.css({ height: containerHeight, overflow: "hidden" });
container2.css({ height: containerHeight, overflow: "hidden" });
container3.css({ height: containerHeight, overflow: "hidden" });
container4.css({ height: containerHeight, overflow: "hidden" });
container5.css({ height: containerHeight, overflow: "hidden" });
function vertCycle() {
    let firstItem = container.find('li.first').html();

    container.append('<li>'+firstItem+'</li>');
    firstItem = '';
    container.find('li.first').animate({ marginTop: "-50px" }, 10,
        function(){  $(this).remove();
            container.find('li:first').addClass("first");
        });
}
function vertCycle1() {
    let firstItem1 = container1.find('li.first').html();

    container1.append('<li>'+firstItem1+'</li>');
    firstItem1 = '';
    container1.find('li.first').animate({ marginTop: "-50px" }, 10,
        function(){  $(this).remove();
            container1.find('li:first').addClass("first");
        });
}
function vertCycle2() {
    let firstItem2 = container2.find('li.first').html();
    container2.append('<li>'+firstItem2+'</li>');
    firstItem2 = '';
    container2.find('li.first').animate({ marginTop: "-50px" }, 10,
        function(){  $(this).remove();
            container2.find('li:first').addClass("first");
        });
}
function vertCycle3() {
    let firstItem3 = container3.find('li.first').html();
    container3.append('<li>'+firstItem3+'</li>');
    firstItem3 = '';
    container3.find('li.first').animate({ marginTop: "-50px" }, 10,
        function(){  $(this).remove();
            container3.find('li:first').addClass("first");
        });
}
function vertCycle4() {
    let firstItem4 = container4.find('li.first').html();
    container4.append('<li>'+firstItem4+'</li>');
    firstItem4 = '';
    container4.find('li.first').animate({ marginTop: "-50px" }, 10,
        function(){  $(this).remove();
            container4.find('li:first').addClass("first");
        });
}
function vertCycle5() {
    let firstItem5 = container5.find('li.first').html();
    container5.append('<li>'+firstItem5+'</li>');
    firstItem5 = '';
    container5.find('li.first').animate({ marginTop: "-50px" }, 10,
        function(){  $(this).remove();
            container5.find('li:first').addClass("first");
        });
}
if(intervalSec < 10){
    intervalSec = 10;
}
let init = setInterval("vertCycle()",intervalSec);
let init1 = setInterval("vertCycle1()",intervalSec);
let init2 = setInterval("vertCycle2()",intervalSec);
let init3 = setInterval("vertCycle3()",intervalSec);
let init4 = setInterval("vertCycle4()",intervalSec);
let init5 = setInterval("vertCycle5()",intervalSec);
container.hover(function(){
    clearInterval(init);
}, function(){
    init = setInterval("vertCycle()",intervalSec);
});
container1.hover(function(){
    clearInterval(init1);
}, function(){
    init1 = setInterval("vertCycle1()",intervalSec);
});
container2.hover(function(){
    clearInterval(init2);
}, function(){
    init2 = setInterval("vertCycle2()",intervalSec);
});
container3.hover(function(){
    clearInterval(init3);
}, function(){
    init3 = setInterval("vertCycle3()",intervalSec);
});
container4.hover(function(){
    clearInterval(init4);
}, function(){
    init4 = setInterval("vertCycle4()",intervalSec);
});
container5.hover(function(){
    clearInterval(init5);
}, function(){
    init5 = setInterval("vertCycle5()",intervalSec);
});
