"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: 'Guillame',
    lastName: 'Salva',
};
var newRowID = CRUD.insertRow(row);
var updatedRow = { firstName: "Guillame", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
