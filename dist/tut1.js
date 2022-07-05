"use strict";
// Creating classes in Typescript 
// create a class invoice with 3 properties(client, details and amount) and a method called format that returns a string representation of that object, create three objects from that class, and console log the
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
let inv1 = new Invoice("Yumna", "Car services", 40);
console.log(inv1.format());
let inv2 = new Invoice("Azalea", "Grocery", 10);
console.log(inv2.format());
let inv3 = new Invoice("Swan", "Vications", 100);
console.log(inv3.format());
