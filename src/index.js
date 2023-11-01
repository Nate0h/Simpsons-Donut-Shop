import './styles.css';

function buildHome(){
   const content = document.getElementById('content');
   content.textContent = "Hi, I'm Homer Simpson";
   content.classList.add('hello');
   const title = document.createElement('div');
   const header = document.createElement('div');
   const body  = document.createElement('div');
   const footer = document.createElement('div');

}

buildHome();