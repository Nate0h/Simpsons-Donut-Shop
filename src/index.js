import './styles.css';
const content = document.getElementById('content');
function buildHome(){


   const title = document.createElement('div');
   title.textContent = "The Simpson's Donut Shop";
   content.appendChild(title);
   const nav = document.createElement('div');
   nav.textContent = "HI Im Maggie";
   buildNavigation(nav);
   const body  = document.createElement('div');
   buildBody(body);

   const footer = document.createElement('div');
   buildFooter(footer);

}

function buildNavigation(nav){


   const donutHome = document.createElement('div');
   const donutMenu = document.createElement('div');
   const donutContact = document.createElement('div');

   const home = document.createElement('div');
   const menu = document.createElement('div');
   const contact = document.createElement('div');

   home.textContent = "Ha";
   menu.textContent = "Ha";
   contact.textContent = "Ha";


   donutHome.appendChild(home);
   donutMenu.appendChild(menu);
   donutContact.appendChild(contact);
 
   nav.appendChild(donutHome);
   nav.appendChild(donutMenu);
   nav.appendChild(donutContact);
   nav.classList.add('nav');

   content.appendChild(nav);

}

function buildBody(body){
   
   const leftBody = document.createElement('div');
   const rightBody = document.createElement('div');
   leftBody.textContent = "Hi I'm Bart";
   rightBody.textContent = "Hi I'm Lisa";

   const about = document.createElement('div');
   const aboutText = document.createElement('div');
   about.appendChild(aboutText);

   const order = document.createElement('div');
   const orderButton = document.createElement('button');
   order.appendChild(orderButton);

   const hours = document.createElement('div');
   const schedule = document.createElement('div');
   hours.appendChild(schedule);

   rightBody.appendChild(about);
   rightBody.appendChild(order);
   rightBody.appendChild(hours);

   body.appendChild(leftBody);
   body.appendChild(rightBody);
   body.classList.add('body-container');
   
   content.appendChild(body);
}

function buildFooter(footer){

   const author = document.createElement('div');
   author.textContent = "Created By Nate-O";
   const img = new Image();

   footer.appendChild(author);
   footer.appendChild(img);

   content.appendChild(footer);

}

buildHome();