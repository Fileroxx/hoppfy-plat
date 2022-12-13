"use strict";
var openMenu = document.querySelector(".open-menu"),
    closeMenu = document.querySelector(".close-menu"),
    menu = document.querySelector(".menu-mobile"),
    navigationsLeft = document.querySelector(".arrow-left"),
    navigationsright = document.querySelector(".arrow-right"),
    slide = document.querySelector(".slide-galery"),
    menuOpts = document.querySelectorAll(".menu-m"),
    trailBI = document.querySelector(".begginer"),
    trailA = document.querySelector(".advanced"),
    gridTpl = document.querySelectorAll(".grid-template"),
    btnBegner = document.querySelector(".beg"),
    btnInter = document.querySelector(".int"),
    btnAdvc = document.querySelector(".adv"),
    modal = document.querySelector(".modal"),
    user = document.querySelectorAll(".user-card"),
    userTesti = document.querySelectorAll(".user-text"),
    navBtn = document.querySelectorAll(".btn-faq"),
    navContent = document.querySelectorAll(".nav-faq"),
    scrollValue = 0,
    faqList = document.querySelectorAll(".wrap-faq"),
    header = document.querySelector("header"),
    testiCounter = 0;

function openModal(e) {
    e = "https://www.youtube.com/embed/".concat({
        gb: "93iOx4OKLgg",
        ls: "cL-cHtRDtOo",
        hm: "M0juBlRCJNc",
        tn: "BuZlh8lXliI",
        sk: "RGnJa5cLVWo",
        ff: "JZJQcITNrb0",
        mf: "dQChevfVxRw",
        fb: "t0NxxdOdEzc",
        bp: "XtO1qRcifEI",
        fg: "O3RKkGAuvAU"
    }
    [e],
        "?controls=0");
    modal.classList.remove("show"),
        modal.classList.add("show"),
        document.querySelector(".frame-video").src = e
}
function closeModal() {
    modal.classList.remove("show"),
    document.querySelector(".frame-video").src = ""
}
function backTop() { window.scrollTo({ top: 0, behavior: "smooth" }) }
function readMore() { window.scrollTo({ top: 830, behavior: "smooth" }) }
function testimonial(e) {
    testiCounter + e < 0 || 2 < testiCounter + e ? testiCounter = 0 : testiCounter += e,
        userTesti.forEach(function (e) { e.classList.remove("active") }),
        user.forEach(function (e) { e.classList.remove("active") }),
        userTesti[testiCounter].classList.add("active"),
        user[testiCounter].classList.add("active")
}
function switchFaq(e) {
    navBtn.forEach(function (e) { e.classList.remove("active") }),
        navContent.forEach(function (e) { e.classList.remove("active") }),
        navBtn[e].classList.add("active"),
        navContent[e].classList.add("active")
}
function showMoreclass(e) {
    document.querySelector(".right-content>ul").classList.toggle("open"),
        e.classList.toggle("open")
}
function openTrail(e) {
    e.children[1].classList.toggle("open"),
        e.children[0].classList.toggle("open")
}
function slideFooter(e) {
    var t = document.querySelector(".menu-content");
    scrollValue += e, t.scrollTo({
        top: scrollValue, behavior: "smooth"
    })
}
function openAccordion(e) {
    e.children[0].classList.toggle("open"),
        e.children[1].classList.toggle("open")
}
function scrollHorizontal() {
    var t, s, c = document.querySelector(".slide-galery"),
        o = !1; c.addEventListener("mousedown",
            function (e) {
                o = !0, c.classList.add("active"),
                    t = e.pageX - c.offsetLeft,
                    s = c.scrollLeft
            }),
            c.addEventListener("mouseleave",
                function () {
                    o = !1, c.classList.remove("active")
                }),
            c.addEventListener("mouseup",
                function () { o = !1, c.classList.remove("active") }),
            c.addEventListener("mousemove",
                function (e) {
                    o && (e.preventDefault(),
                        e = 3 * (e.pageX - c.offsetLeft - t),
                        c.scrollLeft = s - e)
                })
}
btnBegner.addEventListener("click", function () {
    btnBegner.classList.remove("active"),
        btnBegner.classList.add("active"),
        btnInter.classList.remove("active"),
        btnAdvc.classList.remove("active"),
        gridTpl.forEach(function (e) {
            e.classList.remove("beg"),
                e.classList.remove("int"),
                e.classList.remove("adv")
        }),
        gridTpl[0].classList.add("beg"),
        trailBI.classList.remove("active-i"),
        trailBI.classList.remove("active-b"),
        trailA.classList.remove("active-a"),
        trailBI.classList.add("active-b")
}),
    btnInter.addEventListener("click", function () {
        btnBegner.classList.remove("active"),
            btnInter.classList.remove("active"),
            btnInter.classList.add("active"),
            btnAdvc.classList.remove("active"),
            gridTpl.forEach(function (e) {
                e.classList.remove("beg"),
                    e.classList.remove("int"),
                    e.classList.remove("adv")
            }),
            gridTpl[1].classList.add("int"),
            trailBI.classList.remove("active-i"),
            trailBI.classList.remove("active-b"),
            trailA.classList.remove("active-a"),
            trailBI.classList.add("active-i")
    }),
    btnAdvc.addEventListener("click", function () {
        btnBegner.classList.remove("active"),
            btnInter.classList.remove("active"),
            btnAdvc.classList.remove("active"),
            btnAdvc.classList.add("active"),
            gridTpl.forEach(function (e) {
                e.classList.remove("beg"),
                    e.classList.remove("int"),
                    e.classList.remove("adv")
            }),
            gridTpl[2].classList.add("adv"),
            trailBI.classList.remove("active-i"),
            trailBI.classList.remove("active-b"),
            trailA.classList.remove("active-a"),
            trailA.classList.add("active-a")
    }),
    faqList.forEach(function (e) {
        e.addEventListener("click",
            function () {
                e.children[0].children[1].classList.toggle("active"),
                    e.children[1].classList.toggle("open")
            })
    }),
    openMenu.addEventListener("click",
        function () {
            menu.classList.add("show"),
                menu.classList.remove("hidden")
        }),
    closeMenu.addEventListener("click", function () {
        menu.classList.add("hidden"),
            menu.classList.remove("show"),
            setTimeout(function () {
                menu.classList.remove("hidden")
            },
                2e3)
    }),
    navigationsLeft.addEventListener("click",
        function () {
            var e = 200,
                t = setInterval(function () {
                    --slide.scrollLeft, 0 === --e && window.clearInterval(t)
                },
                    1)
        }),
    navigationsright.addEventListener("click", function () {
        var e = 0, t = setInterval(function () {
            slide.scrollLeft += 1, 200 <= (e += 1) && window.clearInterval(t)
        },
            1)
    }),
    window.onscroll = function () {
        150 < window.scrollY ? (header.classList.remove("scrolled"),
            header.classList.add("scrolled")) : header.classList.remove("scrolled")
    },
    scrollHorizontal();
var canonical = document.querySelector("link[rel='canonical']");
canonical && canonical.setAttribute("href", window.location.href);
var BLOG_URL = "",
    btnsBlog = document.querySelectorAll(".btn-blog");
btnsBlog.forEach(function (e) {
    e.setAttribute("href", BLOG_URL)
}
);
var WHATSAPP_DEFAULT_URL = "",
    whatsappSupportLink = document.getElementById("whatsappSupport");
whatsappSupportLink.href = WHATSAPP_DEFAULT_URL;