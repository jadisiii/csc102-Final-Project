// Ray Arbizu
// Tables and Arrays Script

var counter = 0
var customerArray = [];

function customerInfo() {
// var custID = document.getElementById("cID").value;


    var customerDetails = [
        document.getElementById("cID").value, 
        document.getElementById("cName").value, 
        document.getElementById("sProduct").value, 
        document.getElementById("cIssue").value
    ];

    customerArray.push(customerDetails);
    populateTable(customerArray);

}

function populateTable(data) {
    // console.log("Data to populate:", data);
    var tableBody = document.getElementById('tblCustomer').getElementsByTagName('tbody')[0];

    // Clear existing table rows
    tableBody.innerHTML = '';

    data.forEach(function(customerData, index) {
        //console.log("Row " + index + " data:", customerData);
        if (Array.isArray(customerData)) {
            var row = tableBody.insertRow();
            customerData.forEach(function(cellData) {
                var cell = row.insertCell();
                cell.innerHTML = cellData;
            });
        } else {
            alert("Row " + index + " is not an array:", customerData);
        }
    });
}

function logoff(){ // Creating a function called 'logOff'
    location.replace("logInPage.html"); 
}