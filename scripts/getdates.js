// select the DOM elements for output

const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = `© <span class="highlight">
    ${today.getFullYear()}</span>`;

// alert(document.lastModified);
    
// let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last Modification:' + document.lastModified;