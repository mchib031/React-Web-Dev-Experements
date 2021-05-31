
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
		LactoseFree: true,
		NutFree: true,
		Organic:false,
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
		LactoseFree: false,
		NutFree: false,
		Organic:true,
		price: 2.35
	},
	{
		name: "Tomato",
		LactoseFree: true,
		NutFree: true,
		Organic:true,
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
		LactoseFree: false,
		NutFree: true,
		Organic:false,
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
		LactoseFree: true,
		NutFree: false,
		isOrganic:false,
		price: 7
	}

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
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
