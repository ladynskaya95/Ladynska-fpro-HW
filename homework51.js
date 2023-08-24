let arrLength = +prompt("Введіть довжину массиву:");

let arr = [];

for (let i=0; i < arrLength; i++) {
    let number = +prompt("Введіть число:");
    arr.push(number);
}

console.log(arr);
alert("User Array: " + arr.join(", "));

let sortedArr = arr.sort((a,b) => a-b);
console.log(sortedArr);
alert("Sorted Array: " + sortedArr.join(", "));

let slicedArr = sortedArr.splice(1, 3);
console.log(slicedArr);
alert("Sliced Array: " + slicedArr.join(", "));





