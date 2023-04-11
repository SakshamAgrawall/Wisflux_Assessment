"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
function add(name, description) {
    return todos.push({
        name: name,
        description: description,
        done: false
    });
}
function remove(index) {
    return todos.splice(index, 1);
}
function list() {
    todos.forEach(function (todos, index) {
        console.log(index + " - " + todos.name);
    });
}
function update(index, name, description) {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}
