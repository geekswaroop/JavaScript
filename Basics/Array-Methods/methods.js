const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

//Filters all items with < 100 price
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
//console.log(filteredItems);

//Map -> extract some info from object
const itemNames = items.map((item) => {
    return item.name;
});
//console.log(itemNames);

//Find -> Finds item which matches conditions
const foundItems = items.find((item) => {
    return item.name === 'Computer';
});
//console.log(foundItems);

//forEach -> Loops throughout the items;
items.forEach((item) =>{
    //console.log(item.name);
})

//some -> Returns true if atleast one element satisfies condition
const hasInexpensiveItems = items.some((item) =>{
    return item.price <=100;
})
//console.log(hasInexpensiveItems);

//every
const hasLessThan1k = items.every((item) => {
    return item.price <= 1000;
})
//console.log(hasLessThan1k);

//reduce
var ans = items.reduce((currentTotal, item)=>{
    return currentTotal + item.price;
}, 0);
//console.log(ans);

//includes
var arr = [1,2,3,4,5];
const hasFour = arr.includes(4);
console.log(hasFour);