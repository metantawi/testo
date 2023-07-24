// ------------------------------------------------
// up button

up = document.querySelector(".up")
// body = document.querySelector("body")
// show in scrool
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    up.style.display = "block"
  }
  else {
        up.style.display = "none"
  }
}

// up top on click
up.onclick = function () {
  window.scrollTo ({
    top:0,
    behavior:"smooth",
  })
    // up.classList.add("dark")
}


// ------------------------------------------------
// Recently create

let click = document.querySelector(".click")
let show = document.querySelector(".show")
let done = document.querySelector(".done")

// click show
click.onclick = function () {
  show.style.display = "block"
  click.style.display = "none"
  done.style.display = "block"
}
// click un show
done.onclick = function () {
  show.style.display = "none"
    done.style.display = "none"
    click.style.display = "block"
}


// --------------------------------------------
// Hot Picks filter portfolio 

let lis = document.querySelectorAll(".portfolio li")
let boxes = document.querySelectorAll(".prics .box")

// click
lis.forEach((li) => {
  li.addEventListener("click", removeactive)
  li.addEventListener("click", manges)
})

// remove active class 
function removeactive () {
  lis.forEach((li)=> {
    li.classList.remove("active")
    this.classList.add("active")
  })
}

// filter boxes
function manges () {
  boxes.forEach((box) => {
    box.style.display = "none"
  })
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
  el.style.display = "block"
  })
}


// --------------------------------------------
// Explore filter portfolio 

let listow = document.querySelectorAll(".explore li")
let boxestow = document.querySelectorAll(".explore .box")

// click
listow.forEach((li)=> {
  li.addEventListener("click", removeclass)
  li.addEventListener("click", mangeboxes)
})

// remove active class 
function removeclass () {
  listow.forEach((li)=> {
  li.classList.remove("active")
  this.classList.add("active")
  })
}

// filter boxes 
function mangeboxes() {
  boxestow.forEach((box)=> {
    box.style.display = "none"
    document.querySelectorAll(this.dataset.cat).forEach((el)=> {
      el.style.display = "block"
    })
  })
}


// -------------------------------------------------------
// open and close munebar

// مطلوب تغير الكل لاول علشان المنيو بار نظهر
let home = document.querySelector(".home")
let nav = document.querySelector("nav ul")
let toogle = document.querySelector(".navbar .toggle")
let close = document.querySelector(".navbar .close")

// click open
    toogle.onclick = function () {
    toogle.style.display = "none"
    close.style.display = "block"
    nav.style.transform = "translateX(0%)"
}

// click close 
    close.onclick = function () {
    nav.style.transform = "translateX(-200%)"
    toogle.style.display = "block"
    close.style.display = "none"
}

// click key close
document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.style.transform = "translateX(-200%)"
    toogle.style.display = "block"
    close.style.display = "none"
  }
}

// click screen close munebar
// home.onclick = function () {
//   nav.style.transform = "translateX(-200%)"
//   toogle.style.display = "block"
//   close.style.display = "none"
// }

// -------------------------------------------------------
// click color a

// مطلوب عملها للكل
let color = document.querySelector(".frist")

color.onclick = function () {
  color.style.color = "red"
}

// -------------------------------------------------------


// let click = document.querySelector("nav .list a")

// click.onclick = function () {
//   click.classList.add("click")
// }

// let clicktow = document.querySelector("navbar nav ul") 

// clicktow.onclick = function () {
//   clicktow.classList.add("color")
// }

navbarcolor = document.querySelector(".navbar nav ul")

navbarcolor.onclick = function () {
  navbarcolor.classList.add("color")
}


form = document.querySelector(".sign-up-page form .input-password") 
icon = document.querySelector(".icon a")

icon.onclick = function () {
  form.input = type = text
}

// let faq = document.querySelector("faq .box h2") 
// let text = document.querySelector("faq .box p") 

// faq.onclick = function () {
//   text.classList.add("color")
// }


// dark
// let body = document.querySelector("body")
// let darkclick = document.querySelector(".darks i")
// let darkclicktow = document.querySelector(".darks img")
// let color = document.querySelectorAll(".c-white")

//   darkclick.onclick = function () {
//   darkclicktow.style.display = "block"
//   darkclick.style.display = "none"
//   body.classList.add("darks")
//   color.classList.add("main")
// }
//   darkclicktow.onclick = function () {
//   body.classList.remove("darks")
//   darkclicktow.style.display = "none"
//   darkclick.style.display = "block"
// }


