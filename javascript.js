$(".banner______part").slick({
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  

  
const menu = document.getElementById("burger____menu");
const firstSide = document.getElementById("first-side");
const closeMenu = document.getElementById("close");
const total = document.getElementById("hello1");


menu.addEventListener("click", menuFunc);
closeMenu.addEventListener("click", closeIocn);

function menuFunc() {
  firstSide.classList.add("navClass");
  document
    .querySelector(".admin____overlay")
    .classList.add("show__adminOverlay");

  // total.style.zIndex = "-1";
}

function closeIocn() {
  firstSide.classList.remove("navClass");
  document
    .querySelector(".admin____overlay")
    .classList.remove("show__adminOverlay");

  // total.style.zIndex = "-1";
}

document.addEventListener("click", (event) => {
  if (event.target.closest("#close")) return;
  if (event.target.closest("#first-side")) return;

  if (event.target.classList[1] === "show__adminOverlay") {
    document
      .querySelector(".admin____overlay")
      .classList.remove("show__adminOverlay");
    firstSide.classList.remove("navClass");
    // total.style.zIndex = "-1";
  }
});

const carticonMenu = document.getElementById("cartIcon");
const right = document.getElementById("right-side");
const cartClose = document.getElementById("closeIconForCart");
const mobileMenu = document.querySelector(".main_____mobile___menu");

carticonMenu.addEventListener("click", cartIoconRightBar);
cartClose.addEventListener("click", cartCloseIcon);

function cartIoconRightBar() {
  right.classList.add("navClass1");
  document
    .querySelector(".admin____overlayyyy")
    .classList.add("show__adminOverlayyy");

}

function cartCloseIcon() {
  right.classList.remove("navClass1");
  document
    .querySelector(".admin____overlayyyy")
    .classList.remove("show__adminOverlayyy");
    // mobileMenu.style.zIndex = "-100";

}

document.addEventListener("click", (event) => {
  if (event.target.closest("#closeIconForCart")) return;
  if (event.target.closest("#right-side")) return;

  if (event.target.classList[1] === "show__adminOverlayyy") {
    document
      .querySelector(".admin____overlayyyy")
      .classList.remove("show__adminOverlayyy");
      right.classList.remove("navClass1");
    // mobileMenu.style.zIndex = "-100";



  }

});