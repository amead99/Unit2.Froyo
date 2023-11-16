// 1. Prompt user to input "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
let order = prompt("Welcome to Danny's Froyo! Enter your order, separated by commas.")
// 2. Store input as an array
let orderArr = order.split(",");
// 3. Use loop to determine number of repeat flavors
const counts = {};
orderArr.forEach(function(i) {
    counts[i] = (counts[i] || 0) + 1; 
});
// 4. Store number of orders for each flavor as an object
// 5. Return data to user in a table
console.table(counts);
