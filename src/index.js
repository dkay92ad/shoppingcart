import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*try{
    ReactDOM.render(<App />, document.getElementById('root'));
}
catch(error){
    console.error('Error intercepted!', error);
}*/

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
    onUpdate: onUpdateHandler
   });

function onUpdateHandler(registration) {

    // Make sure that any new version of a service worker will take over the page 
    // and become activated immediately.
    const waitingServiceWorker = registration.waiting;
    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  
    const link = document.createElement("a");
    link.classList.add("update-notification");
    link.setAttribute("href", "#");
    link.innerHTML = "Update is available. Click here to install.";
  
    link.addEventListener("click", e => {
      e.preventDefault();
      window.location.reload();
    });
  
    document.querySelector("body").appendChild(link);
  }