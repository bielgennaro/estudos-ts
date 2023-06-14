"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen2 = class Pen2 {
    id;
    createdAt;
    constructor(id) {
        this.id = id;
    }
};
Pen2 = __decorate([
    createdDate
], Pen2);
const newBook = new Book(111);
const newPen = new Pen2(22);
console.log(newBook);
console.log(newPen);
