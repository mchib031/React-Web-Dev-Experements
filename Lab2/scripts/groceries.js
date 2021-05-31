
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Brocoli",
		Organic: true,
		LactoseFree: true,
		NutFree: true,
		price: 1.99
	},
	{
		name: "Apple",
		Organic:false,
		LactoseFree: true,
		NutFree: true,
		price: 2
	},
	{
		name: "Salmon",
		Organic: true,
		LactoseFree: true,
		NutFree: true,
		price: 10.00
	},
	{
		name: "Milk",
		Organic: true,
		LactoseFree: false,
		NutFree: true,
		price: 6
	},
	{
		name: "Bread",
		Organic:true,
		LactoseFree: false,
		NutFree: false,
		price: 2.35
	},
	{
		name: "Tomato",
		Organic:true,
		LactoseFree: true,
		NutFree: true,
		price: 4
	},
	{
		name: "Steak",
		Organic: true,
		LactoseFree: true,
		NutFree: true,
		price: 14.99
	},
	{
		name: "Cheese",
		Organic:false,
		LactoseFree: false,
		NutFree: true,
		price: 3
	},
	{
		name: "Eggs",
		Organic: true,
		LactoseFree: true,
		NutFree: true,
		price: 14.99
	},
	{
		name: "Honey",
		Organic:false,
		LactoseFree: true,
		NutFree: false,
		price: 7
	}

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function isOrganic() {

	var organicTest = false;
	var cb = document.getElementById("isorganic");
	var text = document.getElementById("msg");

	if (cb.checked==true) {
		organicTest = true;
	}
	else {
		organicTest = false;
	}
	return organicTest;
}

function restrictListProducts(prods, restriction) {

	var organicTest = isOrganic();
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if (organicTest == true) {
			if (prods[i].Organic == false) {
				continue;
			}
		}
		if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}

// Sorting products with prices

	for (let j = 0; j < prods.length; j++) {
		var k = j;
		while (k > 0 && prods[k-1].price > prods[k].price) {
			var tmp = prods[k];
			prods[k] = prods[k-1];
			prods[k-1] = tmp;
			k = k-1;
		}
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
