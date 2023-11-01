import './styles.css';
const content = document.getElementById('content');
function buildHome(){

   content.textContent = "Hi, I'm Homer Simpson";
   const title = document.createElement('div');
   const header = document.createElement('div');
   header.textContent = "HI Im Maggie";
   buildHeader(header);
   const body  = document.createElement('div');
   const footer = document.createElement('div');

}

function buildHeader(header){

   const home = document.createElement('div');
   const menu = document.createElement('div');
   const contact = document.createElement('div');

   home.textContent = "Ha";
   menu.textContent = "Ha";
   contact.textContent = "Ha";

   const donut_home = document.createElement('img');
   const donut_menu = document.createElement('img');
   const donut_contact = document.createElement('img');

   home.appendChild(donut_home);
   menu.appendChild(donut_menu);
   contact.appendChild(donut_contact);

   header.appendChild(home);
   header.appendChild(menu);
   header.appendChild(contact);

   content.appendChild(header);

}


buildHome();