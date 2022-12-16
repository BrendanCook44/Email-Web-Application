const loginTextbox = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => { //Login Information Check
    e.preventDefault();
    const username = loginTextbox.username.value;
    const password = loginTextbox.password.value;

    if (username == "username" && password == "password") {
        alert("You have successfully logged in.");
        document.location.href = '/HTML/Main.html'
    } else {
        alert("Invalid login. Please try again.");
    }
})

function forwardRecipientToClient() { //Adds Autofilled Recipient Field Within Client Application
    document.getElementById("EmailContentsForm").action = "mailto:" + document.getElementById("RecipientEmailAddress").value;

}

function logout() { //Logout Button
    window.location.href = '/HTML/LoginPage.html'
}

function emailActions() { //Called Everytime Email Is Submitted
    //Pull Email Inputs
    var recipient = document.getElementById("RecipientEmailAddress").value;
    var subject = document.getElementById("Subject").value;
    var body = document.getElementById("Body").value;

    //Pull Email Table
    var emailTable = document.getElementById("EmailTable");

    //Date Information
    var date = new Date();
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    var dateSent = month + "/" + day + "/" + year;

    //Create Rows & Cells
    var row = emailTable.insertRow();
    var showEmailCell = row.insertCell(0);
    var deleteCell = row.insertCell(1);
    var printCell = row.insertCell(2);
    var dateSentCell = row.insertCell(3);
    var recipientCell = row.insertCell(4);
    var subjectCell = row.insertCell(5);
    var bodyCell = row.insertCell(6);

    //Assign Cell Text & Create Show Full Email/Delete/Print Buttons
    showEmailCell.innerHTML = "<button class='Button HoverButton' onclick='showFullEmail(this);'>Show Full Email</button>";
    deleteCell.innerHTML = "<button class='Button HoverButton' onclick='deleteEmail(this);'>Delete Email</button>";
    printCell.innerHTML = "<button class='Button HoverButton' onclick='printEmail();'>Print Email</button>";
    dateSentCell.innerHTML = dateSent;
    recipientCell.innerHTML = recipient;
    subjectCell.innerHTML = subject;
    bodyCell.innerHTML = body;
}

function showFullEmail(thisElement) { //Called When Show Full Email Button Pressed
    var rowIndex = thisElement.parentNode.parentNode.rowIndex;
    var tableRows = document.getElementById("EmailTable").rows[rowIndex].cells;
    var paragraphData = "";

        for (var i = 0; i < tableRows.length; i++) {
            if ((i == 0) || (i == 1) || (i == 2)) { //skip displaying cell data for show full email, delete email, and print email
                continue;
            } else {
                    paragraphData += '\n' + tableRows[i].innerHTML;
                }
        }
    alert(paragraphData);
}

function deleteEmail(thisElement) { //Called When Delete Email Button Pressed
    var rowIndex = thisElement.parentNode.parentNode.rowIndex;
    document.getElementById("EmailTable").deleteRow(rowIndex);
}

function printEmail() { //Called When Print Email Button Pressed
    window.print();
}