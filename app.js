function showOrder(userName, gender, age, drinkType, drinkName) {
    const orderDiv = document.getElementById("order");
    orderDiv.innerHTML = "";

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

const form = document.getElementById("order-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("username").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const drinkName = document.getElementById("drink-name").value.trim();
    const drinkType = document.querySelector('input[name="drinkType"]:checked').value;

    showOrder(userName, gender, age, drinkType, drinkName);

    form.reset();
});