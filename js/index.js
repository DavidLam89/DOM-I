const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let i = 1;
let navitems = document.querySelectorAll("header nav a");
navitems.forEach( element => {
  element.style.color = "green";
  element.textContent = siteContent["nav"][`nav-item-${i}`];
  i++;
});

let history_btn = document.createElement("a");
let text = document.createTextNode("History");
nav_items = document.getElementsByTagName("nav")[0];
history_btn.appendChild(text);
nav_items.prepend(history_btn);
nav_items.firstChild.style.color = "green";

let home_btn = document.createElement("a");
text = document.createTextNode("Home");
home_btn.appendChild(text);
nav_items.prepend(home_btn);
nav_items.firstChild.style.color = "green";

let cta_image = document.getElementById("cta-img");
cta_image.setAttribute('src', siteContent["cta"]["img-src"]);

let cta_text = document.getElementsByClassName("cta-text");
cta_text[0].children[0].textContent = siteContent["cta"]["h1"];
cta_text[0].children[1].textContent = siteContent["cta"]["button"];

let top_content = document.getElementsByClassName("text-content");
top_content[0].children[0].textContent = siteContent["main-content"]["features-h4"];
top_content[0].children[1].textContent = siteContent["main-content"]["features-content"];

top_content[1].children[0].textContent = siteContent["main-content"]["about-h4"];
top_content[1].children[1].textContent = siteContent["main-content"]["about-content"];

top_content[2].children[0].textContent = siteContent["main-content"]["services-h4"];
top_content[2].children[1].textContent = siteContent["main-content"]["services-content"];

top_content[3].children[0].textContent = siteContent["main-content"]["product-h4"];
top_content[3].children[1].textContent = siteContent["main-content"]["product-content"];

top_content[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
top_content[4].children[1].textContent = siteContent["main-content"]["vision-content"];

let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contact = document.getElementsByClassName("contact");
contact[0].children[0].textContent = siteContent["contact"]["contact-h4"];
contact[0].children[1].textContent = siteContent["contact"]["address"];
contact[0].children[2].textContent = siteContent["contact"]["phone"];
contact[0].children[3].textContent = siteContent["contact"]["email"];

let footer = document.getElementsByTagName("footer");
footer[0].children[0].textContent = siteContent["footer"]["copyright"];

