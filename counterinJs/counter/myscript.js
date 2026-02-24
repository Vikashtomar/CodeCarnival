//  <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div class="main">
//         <div class="box">
//             <h1>make counter in js</h1>
// add button and when we click on button counter will increase by 1 and show in box
//will show counter value

//             <p>This is a simple HTML document with a heading and a paragraph.</p>
//         </div>
//     </div>
//     <script src="myscript.js"></script>
// </body>

// </html>

//above code is in index.html file and below code is in myscript.js file

// Get the box element
const box = document.querySelector('.box');
// Initialize the counter 
let counter = 0;
// Function to update the counter
function updateCounter() {
    counter++;
    box.innerHTML = `<h1>Counter: ${counter}</h1>`;
}   
// Add click event listener to the box
box.addEventListener('click', updateCounter);   
console.log(counter)
