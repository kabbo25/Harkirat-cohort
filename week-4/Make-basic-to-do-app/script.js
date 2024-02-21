let globalId = 1;

function calltodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const childDiv = document.createElement("div");
    const child_title = document.createElement("div");
    const child_description = document.createElement("div");
    const childButton = document.createElement("button");

    // Set innerHTML for title, description, and button
    child_title.innerHTML = title;
    child_description.innerHTML = description;
    childButton.innerHTML = "Mark as done";
    // Append title, description, button, and line breaks to childDiv
    childDiv.appendChild(child_title);
    childDiv.appendChild(child_description);
    childDiv.appendChild(childButton);

    // Set the ID for childDiv using globalId and then increment globalId
    childDiv.setAttribute("id", String(globalId++));

    // Append childDiv to the container
    document.getElementById("container").appendChild(childDiv);
}

