 

function create(e){
    e.preventDefault();         //Prevents default actions of forms so we can do what we want
    const Hobby_child = document.createElement("p"); //created a paragraph element child
    Hobby_child.textContent = hobby.value; //inserted the value from input box into the paragraph element
    container.appendChild(Hobby_child); //We append Hobby_child into an already existing component of the DOM which we had in HTML
    hobby.value = ""; //Changes the input element ko value into null after completing the insertion
}

const form = document.querySelector("#add_hobbies");
const hobby = document.querySelector("#hobby_input"); 
const container = document.querySelector("#Hobby_section")
form.addEventListener("submit", create);



// sub.addEventListener("submit", create);
// ()=>{
//     /some fn

//     create({})
// }
