import './styles.css';
const content = document.getElementById('content');
function buildHome(){

   const title = document.createElement('div');
   title.textContent = "The Simpsons Mmm...Donut Shop";
   title.classList.add('title');
   content.appendChild(title);
   const nav = document.createElement('div');
   buildNavigation(nav);
   const body  = document.createElement('div');
   //buildContactBody(body);
   buildMenuBody(body);
   //buildBody(body);

   const footer = document.createElement('div');
   buildFooter(footer);

}

function buildNavigation(nav){


   const home = document.createElement('div');
   const menu = document.createElement('div');
   const contact = document.createElement('div');

   const donut1 = new Image();
   donut1.classList.add("donut-img");
   donut1.src = './pinkdonut.png';

   const donut2 = new Image();
   donut2.classList.add("donut-img");
   donut2.src = './pinkdonut.png';

   const donut3 = new Image();
   donut3.classList.add("donut-img");
   donut3.src = './pinkdonut.png';

   const donutHome = document.createElement('div');
   const donutMenu = document.createElement('div');
   const donutContact = document.createElement('div');
   donutHome.classList.add("donut");
   donutMenu.classList.add("donut");
   donutContact.classList.add("donut");


   donutHome.textContent = "Home";
   donutMenu.textContent = "Menu";
   donutContact.textContent = "Contact";

   home.appendChild(donut1);
   home.appendChild(donutHome);
   menu.appendChild(donut2);
   menu.appendChild(donutMenu);
   contact.appendChild(donut3);
   contact.appendChild(donutContact);


   nav.appendChild(home);
   nav.appendChild(menu);
   nav.appendChild(contact);

  

   nav.classList.add('nav');

   content.appendChild(nav);

}

function buildBody(body){
   
   const homeContainer = document.createElement('div');
   homeContainer.classList.add("homeContainer");
   const leftBody = document.createElement('div');
   leftBody.classList.add("leftHome");
   const rightBody = document.createElement('div');
   

   const about = document.createElement('div');
   about.textContent = "ABOUT US";
   about.classList.add("about");
   const aboutText = document.createElement('div');
   aboutText.classList.add("aboutText");
   aboutText.textContent = "I'm here to tell you all about the most incredible donut shop in the world - Mmm...Donuts! When you walk into Mmm...Donuts, it's like stepping into a little slice of Springfield. You'll see all kinds of cool stuff, like pictures of me and all my classic catchphrases. And don't forget about the pink frosted sprinkled donuts–they're my absolute favorites!"
   about.appendChild(aboutText);

   const order = document.createElement('div');
   const orderButton = document.createElement('button');
   orderButton.classList.add("orderButton");
   orderButton.textContent = "Order Now!";

   order.appendChild(orderButton);

   const hours = document.createElement('div');
   hours.textContent = "Open Monday thru Saturday";
   hours.classList.add("hours");
   const schedule = document.createElement('ul');
   schedule.classList.add("schedule");
   const time1 = document.createElement('li');
   const time2 = document.createElement('li');
   const time3 = document.createElement('li');
   const time4 = document.createElement('li');

   time1.textContent = "Homer's Rise and Shine... 6AM to 11AM";
   time2.textContent = "D'oh-lunch Break... 11AM to 1PM";
   time3.textContent = "Afternoon Delight, Mmm...Donuts... 1PM to 4PM";
   time4.textContent = "Homer's Dinner Adventure...4PM to 8PM";

   schedule.appendChild(time1);
   schedule.appendChild(time2);
   schedule.appendChild(time3);
   schedule.appendChild(time4);
   hours.appendChild(schedule);

   rightBody.appendChild(about);
   rightBody.appendChild(order);
   rightBody.appendChild(hours);

   homeContainer.appendChild(leftBody);
   homeContainer.appendChild(rightBody);
   body.appendChild(homeContainer);

   
   content.appendChild(body);
}

function buildFooter(footer){
   footer.classList.add("footer");
   const author = document.createElement('div');
   author.textContent = "Created By NateO";
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