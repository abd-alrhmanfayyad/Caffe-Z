

function askGender() {
    let gender = "";

    while (gender !== "male" && gender !== "female") {
        gender = prompt("What is your gender? (male or female)");

        if (gender !== null) {
            gender = gender.trim().toLowerCase();
        }
    }
    return gender;
}


const userName = prompt("What is your name?");
const gender = askGender();
const age = Number(prompt("What is your age?"));
if (gender === "male") {
    alert(`Welcome Mr ${userName} to Caffe Z!`);
} else {
    alert(`Welcome Ms ${userName} to Caffe Z!`);
}

const drinkType = prompt("Would you like a hot or cold drink?");
const drinkName = prompt("What is the name of the drink you want?");

const fullorder = [userName, gender, age, drinkType, drinkName];


for (let i = 0; i < fullorder.length; i++) {
    console.log(fullorder[i]);
}

alert(`Your ${drinkName} is being prepared...`);

console.log(`${userName} ordered a ${drinkType} ${drinkName}`);



function showOrder(userName, gender, age, drinkType, drinkName) {

    const orderDiv = document.getElementById("order");

    const card = document.createElement("div");
    card.classList.add("order-card");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = userName;

    const list = document.createElement("ol");
    const details = [`Gender: ${gender}`, `Age: ${age}`, `Order: ${drinkType} ${drinkName}`];

    for (let i = 0; i < details.length; i++) {
        const item = document.createElement("li");
        item.textContent = details[i];
        list.append(item);
    }

    card.append(nameParagraph, list);
    orderDiv.append(card);

  
}
  showOrder(userName, gender, age, drinkType, drinkName);
