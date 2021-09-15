import {sum, a,b } from "./moduleA.js";

console.log("a + b = ", sum(a, b))

export default function(item) {
    console.log(item);
}
