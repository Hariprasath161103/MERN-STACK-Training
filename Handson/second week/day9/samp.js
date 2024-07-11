var x = 10

console.log(typeof (x));

x = "name"

console.log(typeof x);

x = 90.45

console.log(typeof x);

var x = true

console.log(typeof x);


console.log(x);

for (let a = 0; a < 10; a++) {
    console.log(a * a + 1);
}
console.log("---------------------------------------------------------------------");
let str = "";
for (let a = 0; a <= 4; a++) {
    for (var i = 1; i <= a; i++) {
        str += "*";
    }

    str += "\n";
}
console.log(str);