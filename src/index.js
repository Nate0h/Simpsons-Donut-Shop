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
   buildContactBody(body);
   //buildMenuBody(body);
   //buildBody(body);

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


function buildMenuBody(body){

   const gridContainer = document.createElement('div');
   gridContainer.setAttribute("id",'grid-container');

   for (let i = 1; i <= 8; i++ ){
    const cell = document.createElement('div');
    cell.setAttribute("id",`cell-${i}`);
    cell.textContent = "Yeahh";
    cell.classList.add('grid-cell');

    const img = document.createElement('img');
    img.classList.add('menu-img');
    cell.appendChild(img);

    const itemContainer = document.createElement('div');
    itemContainer.setAttribute("id",`item-${i}`);
    const itemName = document.createElement('div');
    const priceName = document.createElement('div');
    itemName.classList.add('item');
    priceName.classList.add('price');
    itemContainer.classList.add('item-container');
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(priceName);
    cell.appendChild(itemContainer);
    
    const description = document.createElement('div');
    description.setAttribute("id",`text-${i}`)
    description.textContent = `cell-${i}`
    description.classList.add('item-description');
    cell.appendChild(description);

    gridContainer.appendChild(cell);

   }
  body.appendChild(gridContainer);
  content.appendChild(body);
   
}

function buildContactBody(body){
   const contactPage = document.createElement('div');
   contactPage.textContent = "Wo Wa Wa WOO WOO";
   body.appendChild(contactPage);//
  


   const container = document.createElement('div');

   const location = document.createElement('div');
   const locationText = document.createElement('p');
   location.appendChild(locationText);

   const contact = document.createElement('div');
   const contactText = document.createElement('p');
   contactText.textContent = "Yerrr";
   contact.appendChild(contactText);

   container.appendChild(location);
   container.appendChild(contact);

   body.appendChild(container);//
  

   const form = document.createElement('form');
   form.setAttribute("method","post");
   form.textContent = "skrilla";
  
/* Name Input */
   const name = document.createElement('div');
   name.textContent = "dwf";
  
   
   const labelName = document.createElement('label');
   labelName.setAttribute("for","name");
   const inputName = document.createElement('input');
   inputName.setAttribute("type", "text");
   inputName.setAttribute("id","name");
   
  
   name.appendChild(labelName);
   name.appendChild(inputName);

  
/*Email Input */
   const email = document.createElement('div');
   const labelEmail = document.createElement('label');
   labelEmail.setAttribute("for","email");
   const inputEmail = document.createElement('input')
   inputEmail.setAttribute("type", "email");
   inputEmail.setAttribute("id","email");
   inputEmail.setAttribute("name","email");
   email.appendChild(labelEmail);
   email.appendChild(inputEmail);

/*Message Input*/
   const message = document.createElement('div');
   const labelMessage = document.createElement('label');
   labelMessage.setAttribute("for","message");
   const inputMessage = document.createElement('textarea')
   inputMessage.setAttribute("rows", "20");
   inputMessage.setAttribute("cols","60");
   inputMessage.setAttribute("name","message");
   message.appendChild(labelMessage);
   message.appendChild(inputMessage);

   /*Submit*/
   const submit = document.createElement('button');
   submit.setAttribute("id","submit");
  
   form.appendChild(name);
   form.appendChild(email);
   form.appendChild(message);
   form.appendChild(submit);

   body.appendChild(contactPage);
   body.appendChild(container);
   body.appendChild(form);
   content.appendChild(body);


}

buildHome();