"use strict";
class User {
    constructor(n, a, p) {
        this.nam = n;
        this.age = a;
        if (p) {
            this.points = p;
        }
        else {
            this.points = 0;
        }
    }
    format() {
        return `${this.nam} ${this.age} has enrolled with ${this.points} points.`;
    }
}
let yums = new User("yums", 20);
let hums = new User("hums", 19, 1);
let bums = new User("bums", 20, 100);
console.log(yums);
class Point {
    constructor(xs, y) {
        // TBD
    }
}
