import './styles.css';
const content = document.getElementById('content');

function buildPage(buildBody){


   const title = document.createElement('div');
   title.textContent = "The Simpsons Mmm...Donut Shop";
   title.classList.add('title');
   content.appendChild(title);
   const nav = document.createElement('div');
   buildNavigation(nav);

   const donuts = document.querySelectorAll(".donut-img");
   donuts.forEach( donut => donut.addEventListener("click", changeTabs));
   
   const body  = document.createElement('div');
   body.setAttribute("id","body");
  
   buildBody(body);

   const footer = document.createElement('div');
   buildFooter(footer);

}


function buildNavigation(nav){


   const home = document.createElement('div');
   home.setAttribute("id","home");
   const menu = document.createElement('div');
   menu.setAttribute("id","menu");
   const contact = document.createElement('div');
   contact.setAttribute("id","contact");

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

function buildHomeBody(body){
   
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
    cell.classList.add('grid-cell');

    const para = document.createElement('p');
    cell.appendChild(para)

    const img = document.createElement('img');
    cell.appendChild(img);
    

    gridContainer.appendChild(cell);

   }

   const cellOne = gridContainer.querySelector("#cell-1");
   const para1 = cellOne.querySelector("p");
   const image1 = cellOne.querySelector("img");
   image1.src = "./donuts/glazed.png";
   para1.textContent = "1. Glazed Donut";

   const cellTwo = gridContainer.querySelector("#cell-2");
   const para2 = cellTwo.querySelector("p");
   const image2 = cellTwo.querySelector("img");
   image2.src = "./donuts/chocolate.png";
   para2.textContent = "2. Chocolate Donut";

   const cellThree = gridContainer.querySelector("#cell-3");
   const para3 = cellThree.querySelector("p");
   const image3 = cellThree.querySelector("img");
   image3.src = "./donuts/pinkdip.png";
   para3.textContent = "3. Homer Special";;

   const cellFour = gridContainer.querySelector("#cell-4");
   const para4 = cellFour.querySelector("p");
   const image4 = cellFour.querySelector("img");
   image4.src = "./donuts/jelly.png";
   para4.textContent = "4. Jelly Donut";

   const cellFive = gridContainer.querySelector("#cell-5");
   const para5 = cellFive.querySelector("p");
   const image5 = cellFive.querySelector("img");
   image5.src = "./donuts/boston.png";
   para5.textContent = "5. Boston Cream";

   const cellSix = gridContainer.querySelector("#cell-6");
   const para6 = cellSix.querySelector("p");
   const image6 = cellSix.querySelector("img");
   image6.src = "./donuts/sugar.png";
   para6.textContent = "6. Sugar Donut";

   const cellSeven = gridContainer.querySelector("#cell-7");
   const para7 = cellSeven.querySelector("p");
   const image7 = cellSeven.querySelector("img");
   image7.src = "./donuts/vanilla.png";
   para7.textContent = "7. Vanilla Donut";

   const cellEight = gridContainer.querySelector("#cell-8");
   const para8 = cellEight.querySelector("p");
   const image8 = cellEight.querySelector("img");
   image8.src = "./donuts/cronut.png";
   para8.textContent = "8. Cronut";


  body.appendChild(gridContainer);
  content.appendChild(body);
   
}

function buildContactBody(body){
   const contactPage = document.createElement('div');
   contactPage.textContent = "LEAVE US A MESSAGE";
   contactPage.classList.add("contactTitle");
   body.appendChild(contactPage);
  


   const container = document.createElement('div');
   container.classList.add("contactContainer");

   const location = document.createElement('div');

   location.textContent = "Location";
   const locationText = document.createElement('p');
   locationText.textContent = "742 Evergreen Terrace in Springfield";
   location.appendChild(locationText);

   const contact = document.createElement('div');
   contact.textContent = "Contact Us";
   const contactText = document.createElement('p');
   const contactText2 = document.createElement('p');
   contactText.textContent = "Email... mmmDonuts5178ATnotfakeemail.com";
   contactText2.textContent = "Phone... (023) 145-2678"
   contact.appendChild(contactText);
   contact.appendChild(contactText2);

   container.appendChild(location);
   container.appendChild(contact);

   body.appendChild(container);//
  

   const form = document.createElement('form');
   form.setAttribute("method","post");
  
/* Name Input */
   const name = document.createElement('div');
   const labelName = document.createElement('label');
   labelName.textContent = "Name: ";
   labelName.setAttribute("for","name");
   const inputName = document.createElement('input');
   inputName.setAttribute("type", "text");
   inputName.setAttribute("placeholder", "e.g John Smith");
   inputName.setAttribute("id","name");
   
  
   name.appendChild(labelName);
   name.appendChild(inputName);

  
/*Email Input */
   const email = document.createElement('div');
   const labelEmail = document.createElement('label');
   labelEmail.setAttribute("for","email");
   const inputEmail = document.createElement('input')
   labelEmail.textContent = "Email: ";
   inputEmail.setAttribute("type", "email");
   inputEmail.setAttribute("placeholder","0028@notfake.com");
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
   inputMessage.setAttribute("placeholder", "Tell us Anything...");
   inputMessage.setAttribute("name","message");
   message.appendChild(labelMessage);
   message.appendChild(inputMessage);

   /*Submit*/
   const submit = document.createElement('button');
   submit.textContent = "Submit";
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



buildPage(buildHomeBody);


function changeTabs(e){
   content.innerHTML= "";

   if(e.target.parentElement.id == "home"){
      buildPage(buildHomeBody);
      }
   else if(e.target.parentElement.id == "menu"){
      buildPage(buildMenuBody);
      } 
   else if(e.target.parentElement.id == "contact"){
      buildPage(buildContactBody);
   }
   

}





