//interfaces define the structure of an object

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Dominic",
    age: 20,
    location: "New York"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Meryer",
    age: 21,
    location: "California"
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);