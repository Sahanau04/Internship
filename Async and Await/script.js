const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", getData);

async function getData() {
    try {
        output.innerHTML = "Loading...";

        await new Promise(resolve => setTimeout(resolve, 500));

        output.innerHTML = 
            "Name: Sahana U <br>" +
            "Email: usahana250@gmail.com <br>" +
            "City: Sagara";

    } catch (error) {
        output.innerHTML = "Error loading data!";
    }

}
