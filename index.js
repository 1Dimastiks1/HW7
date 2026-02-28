let a1 = [1, 2, 3];
a1[1] = 10;
console.log(a1);

let a2 = ["one", "two", "three"];
a2[a2.length] = "four";
console.log(a2);

let a3 = [4, 8, 12, 16];
let sum = 0;
for (let i = 0; i < a3.length; i++) {
    sum = sum + a3[i];
}
console.log(sum);

let a4 = [5, 10, 15, 20, 25];
for (let i = 0; i < a4.length; i++) {
    console.log(a4[i]);
}

let a5 = ["apple", "banana", "cat", "school", "sun"];
for (let i = 0; i < a5.length; i++) {
    if (a5[i].length > 5) {
        console.log(a5[i]);
    }
}

let a6 = [3, 14, 7, 22, 9, 1, 18, 5, 11, 6];
let max = a6[0];
for (let i = 1; i < a6.length; i++) {
    if (a6[i] > max) {
        max = a6[i];
    }
}
console.log(max);

let a7 = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
for (let i = 0; i < a7.length; i++) {
    if (a7[i] % 2 === 0) {
        console.log(a7[i]);
    }
}