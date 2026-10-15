const userName = prompt("What is your name?");

let gender = "";

while (gender !== "male" && gender !== "female") {
    gender = prompt("What is your gender? (male or female)");

    if (gender !== null) {
        gender = gender.trim().toLowerCase();
    }
}



if (gender === "male") {
    alert(`Welcome Mr ${userName} to Caffe Z!`);
} else {
    alert(`Welcome Ms ${userName} to Caffe Z!`);
}

const drinkType = prompt("Would you like a hot or cold drink?");
const drinkName = prompt("What is the name of the drink you want?");

const fullorder = [userName, gender, drinkType, drinkName];


for (let i = 0; i < fullorder.length; i++) {
    console.log(fullorder[i]);
}

alert(`Your ${drinkName} is being prepared...`);

console.log(`${userName} ordered a ${drinkType} ${drinkName}`);