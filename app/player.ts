/*
 * /// <reference path="person.ts" />
 * Use the import statement instead
 * */

import { Person } from './person';

export class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}