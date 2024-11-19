"use strict"

async function getData(){
    let promise = fetch("https://jsonplaceholder.typicode.com/users");
    let response = await promise;
    let data = await response.json();

    const tableBody = document.getElementById("funTable").querySelector("tbody");

    data.forEach((user) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        const usernameCell = document.createElement("td");
        usernameCell.textContent = user.username;
        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        const addressCell = document.createElement("td");
        addressCell.textContent = `${user.address.street} ${user.address.suite}`
        const phoneCell = document.createElement("td");
        phoneCell.textContent = user.phone;
        const companyCell = document.createElement("td");
        companyCell.textContent = user.company.name;

        row.appendChild(nameCell);
        row.appendChild(usernameCell);
        row.appendChild(emailCell);
        row.appendChild(addressCell);
        row.appendChild(phoneCell);
        row.appendChild(companyCell);

        tableBody.appendChild(row);
    })

    console.log(data);
}
getData();



