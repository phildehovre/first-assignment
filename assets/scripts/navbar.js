document.addEventListener("DOMContentLoaded", () => {
    // Define the navbar HTML.
    let navbar = `        
    <nav class="nav_main" role="navigation" aria-label="Main">
    <a href="/" aria-label="Home page">
        <div id="logo_placeholder" role="img" aria-label="Logo"></div>
    </a>
    <ul id="desktop_nav" role="menubar">
        <div id="follower" aria-hidden="true"></div>
    </ul>
    <ul id="mobile_nav" role="menubar">
        <div class="hamburger_ctn">
            <div class="bar top"></div>
            <div class="bar center"></div>
            <div class="bar bottom"></div>
            <div class="hamburger_content">
                <li role="menuitem" style="--order: 1" class="cta">
                    <a href="today.html">
                    Start your journey</a><i class="fas fa-arrow-right"></i></li>
                <li role="menuitem" style="--order: 2"><a href="/">Home</a></li>
                <li role="menuitem" style="--order: 3"><a href="">Features</a></li>
                <li role="menuitem" style="--order: 4"><a href="about.html">About</a></li>
                <li role="menuitem" style="--order: 5"><a href="contact.html">Contact</a></li>
            </div>
        </div>
    </ul>
</nav>`
    // Select all placeholders with the class nav_placeholder.
    let navContainers = document.querySelectorAll('.nav_placeholder')
    navContainers.forEach(container => {
        // Inject the navbar HTML into each placeholder.
        container.innerHTML = navbar
    })
})

const navButtons = [
    {name: "Home", link: "/"},
    {name: "About", link: "about.html"},
    {name: "Contact", link: "contact.html"},
    {name: "Start your journey", link: "today.html"},
]

/**
 * @function
 * @description This function creates the navbar "follower" button effect.
*/
document.addEventListener('DOMContentLoaded', () => {
    // Create follower element
    const follower = document.querySelector('#follower')
    // Initially invisible
    follower.style = `opacity: 0;`

    // Select the desktop nav list and add event listeners
  const list = document.querySelector("#desktop_nav")
  list.addEventListener("mouseenter", () => {
      // Make follower visible
      follower.style = `opacity: 1;`
    })
    // Return to initial state with transition
  list.addEventListener("mouseleave", () => {
    follower.style = `
    opacity: 0; 
    transition: all 0.5s ease-in-out;`
  })
  navButtons.forEach((button, index) => {
    let item = document.createElement('li')
    item.classList.add('nav_link')
    item.setAttribute('role', 'menuitem')

    let link = document.createElement('a')
    link.textContent = button.name
    link.href = button.link

    item.appendChild(link)
    
    item.addEventListener("mouseenter", () => {
    /* 
    Move follower to the position of the hovered element.
    The follower has a position absolute but its width might change
    depending on screen size, we must use the follower's own width to calculate
    the position of the hovered element, width which they will always share.
    */
      let percentage = Number(index * 100)
    /* The follower will move by n times its own width of 100%
    and will always be positionned correctly relative to the hovered element.
    */
      follower.style = `transform: translateX(${percentage}%)`
    })
    list.appendChild(item)
    
  });
})

document.addEventListener('scroll', () => {
    let nav = document.querySelector('.nav_main')
    if (window.scrollY > 1) {
        nav.style = `transition: all 0.5s ease-in-out;`
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})
