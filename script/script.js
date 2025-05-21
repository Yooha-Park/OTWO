var swiper = new Swiper(".mySwiper.media_img", {
    navigation: {
      nextEl: ".media_img .swiper-button-next",
      prevEl: ".media_img .swiper-button-prev",
    },
    loop:true,
    autoplay:{
      delay:2800,
    },
  });
  
  var swiper = new Swiper(".offline_store_pic", {
    navigation: {
      nextEl: ".offline_store_pic .swiper-button-next",
      prevEl: ".offline_store_pic .swiper-button-prev",
    },
    loop:true,
  autoplay:{
    delay:2800,
  },
  });



  

  var swiper = new Swiper(".mySwiper.ad_banner", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:{
      delay:2800,
    },
  });


  var swiper = new Swiper(".mySwiper.top_banner", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:{
      delay:2800,
    },
  });


//검색창 띄우기

// let Search= document.querySelector(".search_icon");
// let SearchWrap= document.querySelector(".search_wrap");
// let Close= document.querySelector(".close");
// let More= document.querySelector(".more_icon");
// let MenuWrap= document.querySelector(".menu_wrap");

$('.search_icon').click(function(){
  $('.search_wrap').toggle();
});

$('.more_icon').click(function(){
  $('.menu_wrap').toggle();
});


// const boxElement = document.querySelector('.search_wrap');
// const toggleButton = document.querySelector('.search_icon');

// toggleButton.addEventListener('click', function() {
//     boxElement.classList.toggle('.search_none'); // 토글할 클래스 이름
// });


// function SearchClick(){
//   SearchWrap.style.display="block";
// }

// Search.addEventListener("click",SearchClick);

// function CloseClick(){
//   SearchWrap.style.display="none";
// }


// Close.addEventListener("click",CloseClick);


// 토글로 온오프하기 메뉴바

// const boxElement = document.querySelector('.menu_wrap');
// const toggleButton = document.querySelector('.more_icon');

// toggleButton.addEventListener('click', function() {
//     boxElement.classList.toggle('menu_none'); // 토글할 클래스 이름
// });


