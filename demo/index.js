let myLeads = ["www.awesomeleads.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

// Render the leads in the unordered list using ulEl.textContent
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // create element
    // set text content
    // append to ul
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"; 
    console.log(listItems);
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems


