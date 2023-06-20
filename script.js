let imageSlider1 = document.querySelector(".image_slider_1");
let imageSlider2 = document.querySelector(".image_slider_2");
let imageSlider3 = document.querySelector(".image_slider_3");
let imageSlider4 = document.querySelector(".image_slider_4");
let imageSlider5 = document.querySelector(".image_slider_5");
let dot1 = document.querySelectorAll(".dot_1");
let dot2 = document.querySelectorAll(".dot_2");
let dot3 = document.querySelectorAll(".dot_3");
let dot4 = document.querySelectorAll(".dot_4");
let dot5 = document.querySelectorAll(".dot_5");
let goToTopBtn = document.querySelector(".go_to_top_btn");
let ourMenuLink = document.querySelector(".our_menu");
let ourMenuList = document.querySelector(".our_menu_list");
let ourMenuDropDownIcon = document.querySelector(".our_menu_drop_down_icon");
let openMenuBars = document.querySelector(".fa-bars");
let imageSliderContainer = document.querySelector(".image_slider_container");
let menuCardsContainer = document.querySelector(".menu_cards_container");
let links = document.querySelector(".links");
let footer = document.querySelector(".footer");
let dropDownMenuLinks = document.querySelector(".drop_down_menu_links");
let crossBtnOption = document.querySelector(".cross_btn_option");
let navbarRight = document.querySelector(".navbar_right");
let ourMenuOption = document.querySelector(".our_menu_option");
let ourMenuFullMenu = document.querySelector(".our_menu_full_menu");
let faPlusMenu = document.querySelector(".fa-plus-menu");
let faMinusMenu = document.querySelector(".fa-minus-menu");
let ourCompanyPage = document.querySelector(".our_company_page");
let ourCommunity = document.querySelector(".our_community");
let ourHistory = document.querySelector(".our_history");
let linksRightSideFirst = document.querySelector(".links_right_side_first");
let linksPlusFirst = linksRightSideFirst.querySelector(".links-plus");
let linksMinusFirst = linksRightSideFirst.querySelector(".links-minus");
let careersPage = document.querySelector(".careers_page");
let corporate = document.querySelector(".corporate");
let restaurant = document.querySelector(".restaurant");
let linksRightSideSecond = document.querySelector(".links_right_side_second");
let linksPlusSecond = linksRightSideSecond.querySelector(".links-plus");
let linksMinusSecond = linksRightSideSecond.querySelector(".links-minus");
let contactUsPage = document.querySelector(".contact_us_page");
let suggestion = document.querySelector(".suggestion");
let complaint = document.querySelector(".complaint");
let linksRightSideThird = document.querySelector(".links_right_side_third");
let linksPlusThird = linksRightSideThird.querySelector(".links-plus");
let linksMinusThird = linksRightSideThird.querySelector(".links-minus");
let newsroomPage = document.querySelector(".newsroom_page");
let local = document.querySelector(".local");
let linksRightSideFourth = document.querySelector(".links_right_side_fourth");
let linksPlusFourth = linksRightSideFourth.querySelector(".links-plus");
let linksMinusFourth = linksRightSideFourth.querySelector(".links-minus");


let slider = 1;
let counter = 1;

setInterval(function() {
    if (slider == 1) {
        imageSlider1.style.display = "block";
        imageSlider2.style.display = "none";
        imageSlider3.style.display = "none";
        imageSlider4.style.display = "none";
        imageSlider5.style.display = "none";
        slider = 2;
    } else if (slider == 2) {
        imageSlider2.style.display = "block";
        imageSlider1.style.display = "none";
        imageSlider3.style.display = "none";
        imageSlider4.style.display = "none";
        imageSlider5.style.display = "none";
        slider = 3;
    } else if (slider == 3) {
        imageSlider3.style.display = "block";
        imageSlider1.style.display = "none";
        imageSlider2.style.display = "none";
        imageSlider4.style.display = "none";
        imageSlider5.style.display = "none";
        slider = 4;
    } else if (slider == 4) {
        imageSlider4.style.display = "block";
        imageSlider1.style.display = "none";
        imageSlider2.style.display = "none";
        imageSlider3.style.display = "none";
        imageSlider5.style.display = "none";
        slider = 5;
    } else {
        imageSlider5.style.display = "block";
        imageSlider1.style.display = "none";
        imageSlider2.style.display = "none";
        imageSlider3.style.display = "none";
        imageSlider4.style.display = "none";
        slider = 1;
    }
}, 5000);

dot1[0].addEventListener("click", () => {
    imageSlider1.style.display = "block";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 2;
});

dot2[0].addEventListener("click", () => {
    imageSlider2.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 3;
});

dot3[0].addEventListener("click", () => {
    imageSlider3.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 4;
});

dot4[0].addEventListener("click", () => {
    imageSlider4.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 5;
});

dot5[0].addEventListener("click", () => {
    imageSlider5.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    slider = 1;
});

dot1[1].addEventListener("click", () => {
    imageSlider1.style.display = "block";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 2;
});

dot2[1].addEventListener("click", () => {
    imageSlider2.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 3;
});

dot3[1].addEventListener("click", () => {
    imageSlider3.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 4;
});

dot4[1].addEventListener("click", () => {
    imageSlider4.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 5;
});

dot5[1].addEventListener("click", () => {
    imageSlider5.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    slider = 1;
});

dot1[2].addEventListener("click", () => {
    imageSlider1.style.display = "block";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 2;
});

dot2[2].addEventListener("click", () => {
    imageSlider2.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 3;
});

dot3[2].addEventListener("click", () => {
    imageSlider3.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 4;
});

dot4[2].addEventListener("click", () => {
    imageSlider4.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 5;
});

dot5[2].addEventListener("click", () => {
    imageSlider5.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    slider = 1;
});

dot1[3].addEventListener("click", () => {
    imageSlider1.style.display = "block";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 2;
});

dot2[3].addEventListener("click", () => {
    imageSlider2.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 3;
});

dot3[3].addEventListener("click", () => {
    imageSlider3.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 4;
});

dot4[3].addEventListener("click", () => {
    imageSlider4.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 5;
});

dot5[3].addEventListener("click", () => {
    imageSlider5.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    slider = 1;
});

dot1[4].addEventListener("click", () => {
    imageSlider1.style.display = "block";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 2;
});

dot2[4].addEventListener("click", () => {
    imageSlider2.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 3;
});

dot3[4].addEventListener("click", () => {
    imageSlider3.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider4.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 4;
});

dot4[4].addEventListener("click", () => {
    imageSlider4.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider5.style.display = "none";
    slider = 5;
});

dot5[4].addEventListener("click", () => {
    imageSlider5.style.display = "block";
    imageSlider1.style.display = "none";
    imageSlider2.style.display = "none";
    imageSlider3.style.display = "none";
    imageSlider4.style.display = "none";
    slider = 1;
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if (scroll > 100) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
});

ourMenuLink.addEventListener("mouseover", () => {
    ourMenuList.style.display = "block";
    ourMenuDropDownIcon.style.transform = "rotate(180deg)";
});

ourMenuLink.addEventListener("mouseout", () => {
    ourMenuList.style.display = "none";
    ourMenuDropDownIcon.style.transform = "rotate(0deg)";
});

ourMenuList.addEventListener("mouseover", () => {
    ourMenuList.style.display = "block";
    ourMenuDropDownIcon.style.transform = "rotate(180deg)";
});

ourMenuList.addEventListener("mouseout", () => {
    ourMenuList.style.display = "none";
    ourMenuDropDownIcon.style.transform = "rotate(0deg)";
});

openMenuBars.addEventListener("click", () => {
    dropDownMenuLinks.style.display =  "block";
    imageSliderContainer.style.display = "none";
    menuCardsContainer.style.display = "none";
    links.style.display = "none";
    footer.style.display = "none";
    openMenuBars.style.display = "none";
    crossBtnOption.style.display = "block";
    navbarRight.style.display = "none";
});

crossBtnOption.addEventListener("click", () => {
    dropDownMenuLinks.style.display = "none";
    imageSliderContainer.style.display = "block";
    menuCardsContainer.style.display = "flex";
    links.style.display = "block";
    footer.style.display = "block";
    openMenuBars.style.display = "block";
    crossBtnOption.style.display = "none";
    navbarRight.style.display = "flex";
    ourMenuFullMenu.style.display = "none";
    faPlusMenu.style.display = "block";
    faMinusMenu.style.display = "none";
    counter = 1;
});

ourMenuOption.addEventListener("click", () => {
    if (counter == 1) {
        ourMenuFullMenu.style.display = "block";
        faMinusMenu.style.display = "block";
        faPlusMenu.style.display = "none";
        counter = 2;
    } else {
        ourMenuFullMenu.style.display = "none";
        faMinusMenu.style.display = "none";
        faPlusMenu.style.display = "block";
        counter = 1;
    }
});

linksPlusFirst.addEventListener("click", () => {
    ourCompanyPage.style.display = "block";
    ourCommunity.style.display = "block";
    ourHistory.style.display = "block";
    linksPlusFirst.style.display = "none";
    linksMinusFirst.style.display = "block";
});

linksMinusFirst.addEventListener("click", () => {
    ourCompanyPage.style.display = "none";
    ourCommunity.style.display = "none";
    ourHistory.style.display = "none";
    linksPlusFirst.style.display = "block";
    linksMinusFirst.style.display = "none";
});

linksPlusSecond.addEventListener("click", () => {
    careersPage.style.display = "block";
    corporate.style.display = "block";
    restaurant.style.display = "block";
    linksPlusSecond.style.display = "none";
    linksMinusSecond.style.display = "block";
});

linksMinusSecond.addEventListener("click", () => {
    careersPage.style.display = "none";
    corporate.style.display = "none";
    restaurant.style.display = "none";
    linksPlusSecond.style.display = "block";
    linksMinusSecond.style.display = "none";
});

linksPlusThird.addEventListener("click", () => {
    contactUsPage.style.display = "block";
    suggestion.style.display = "block";
    complaint.style.display = "block";
    linksPlusThird.style.display = "none";
    linksMinusThird.style.display = "block";
});

linksMinusThird.addEventListener("click", () => {
    contactUsPage.style.display = "none";
    suggestion.style.display = "none";
    complaint.style.display = "none";
    linksPlusThird.style.display = "block";
    linksMinusThird.style.display = "none";
});


linksPlusFourth.addEventListener("click", () => {
    newsroomPage.style.display = "block";
    local.style.display = "block";
    linksPlusFourth.style.display = "none";
    linksMinusFourth.style.display = "block";
});

linksMinusFourth.addEventListener("click", () => {
    newsroomPage.style.display = "none";
    local.style.display = "none";
    linksPlusFourth.style.display = "block";
    linksMinusFourth.style.display = "none";
});
