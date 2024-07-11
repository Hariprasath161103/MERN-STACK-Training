
function vowel() {
    var str = document.getElementById("str").value
    let str1 = str.replace(/[^aeiou]/g, "")
    alert(str1)
}

function numOfVowel() {
    var str = document.getElementById("str").value
    let str1 = str.replace(/[^aeiou]/g, "")
    alert(str1.length)
}

function diff() {
    var d = document.getElementById("date").value
    let date = new Date(d)
    let today = new Date()
    let timeDiff = today.getTime() - date.getTime()
    alert("You arrived on this earth @ " + Math.floor(timeDiff / (24 * 60 * 60 * 1000)) + "  days ago")
}
let mon = new Date().getMonth()
let date = new Date().getDate()
let year = new Date().getFullYear()
console.log(date);
console.log(mon);
console.log(year)

var array = ['a', 'b', 7, '35', 'elango']
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

var arr = []
arr.push("hello")

console.log(arr[0]);

array.forEach((v, i) => {
    console.log(v, i);
})