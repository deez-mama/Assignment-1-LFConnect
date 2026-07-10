const form = document.querySelector("#add_hobbies");
const hobby = document.querySelector("#hobby_input"); 
const container = document.querySelector("#Hobby_section")
form.addEventListener("submit", create);


function create(e){
    e.preventDefault();         //Prevents default actions of forms so we can do what we want
    const Hobby_child = document.createElement("p"); //created a paragraph element child
    Hobby_child.textContent = hobby.value; //inserted the value from input box into the paragraph element
    container.appendChild(Hobby_child); //We append Hobby_child into an already existing component of the DOM which we had in HTML
    hobby.value = ""; //Changes the input element ko value into null after completing the insertion
}

async function loadHobby(){
    try{
        hobby = await fetch(API_URL);
    }
    catch(error){
        hobby = "error";
    }
}

async function createHobbyOnServer(){
    
}

async function deleteHobbyOnSercer(){

}




// await function getHobby(){
// try{
//     const response = await fetch(url);
    // if(!response.ok){
    //     throw new error("Request failed");
    // }

    // const data = await Response.json -> This is cause we are pulling a url which is a json file (0)

// }

// }



//Assignment -> put update option into the card demo project
//Install node
//run npm install npm yarn serve in terminal
//then you will get a address 0.0 sm like that
//Append garera we store the data there and that is basically the URL we are fetching from 
//Make sure you use method post when posting cause it is a good practice

//Try with the hobby thing first

// sub.addEventListener("submit", create);
// ()=>{
//     /some fn

//     create({})
// }
