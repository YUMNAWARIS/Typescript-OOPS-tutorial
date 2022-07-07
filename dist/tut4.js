"use strict";
class Todos {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }
    getTitle() {
        return this.title;
    }
    setTitle(t) {
        this.title = t;
    }
}
let todo2 = new Todos("TS", "learn Access modifiers");
console.log(todo2.getTitle());
todo2.setTitle("Typescript");
console.log(todo2.getTitle());
