console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));

  function getBudgets(arr) {
	var sum = 0;
    for ( var i in arr) {
        sum = sum + Object.values(arr[i])[2]
    }

    return sum;
}

console.log(afterNYears({
	"Joel" : 32,
	"Fred" : 44,
	"Reginald" : 65,
	"Susan" : 33,
	"Julian" : 13
}, 1));

function afterNYears(names, n) {
	for (var i in names) {
        names[i] = names[i] + Math.abs(n)
    }
    return names
}

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	var name_tag = "";
    var country = "";
    for (var i in GUEST_LIST) {
        console.log(name+ " " + i);
        if (name === i) {
            country = GUEST_LIST[i];
            name_tag = "Hi! I'm " + i + ", and I'm from " + country + "."; break;
        } 
			else {
				name_tag = "Hi! I'm a guest."; 
			}
    }

    return name_tag;
}
console.log(greeting("Randy"));



console.log(secondLargest([25, 143, 89, 13, 105]));

function secondLargest(arr) {
    arr.sort();
    console.log(arr);
    arr.reverse();
	return arr[1];


}