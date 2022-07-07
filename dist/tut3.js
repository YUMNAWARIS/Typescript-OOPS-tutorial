"use strict";
class Todo {
    constructor(t, d) {
        this.title = t;
        this.todoDetail = d;
    }
    getTitle() {
        return this.title;
    }
    setTitle(t) {
        this.title = t;
    }
}
let todo1 = new Todo("TS", "learn Access modifiers");
console.log(todo1.getTitle());
todo1.setTitle("Typescript");
console.log(todo1.getTitle());
