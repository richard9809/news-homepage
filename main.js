const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

window.onload = function(){
    // check the screen width on page load
    checkWidth();

    // check the screen width on resize
    window.onresize = checkWidth;
}

  function checkWidth() {
    if(window.innerWidth < 601){
      document.getElementById("firstImage").src = "/images/image-web-3-mobile.jpg";
      document.querySelector("section[name='section']").className = "padding-block-400";
      document.querySelector("section[name='section-2']").className = "padding-block-400";
    } else {
      document.getElementById("firstImage").src = "/images/image-web-3-desktop.jpg";
      document.querySelector("section[name='section']").className = "padding-block-700";
      document.querySelector("section[name='section-2']").className = "padding-block-700";
    }
  }

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});