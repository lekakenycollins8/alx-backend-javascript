//interfaces define the structure of an object
var student1 = {
    firstName: "John",
    lastName: "Dominic",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Meryer",
    age: 21,
    location: "California"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
