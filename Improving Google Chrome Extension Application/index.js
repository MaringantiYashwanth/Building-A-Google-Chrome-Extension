let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatland.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el"); 

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});


// 1. Create a variable, listItems, to hold all the HTML for the list items.
let listItems;
// Assign it to an empty string to begin with
listItems = "";
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>";
}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;