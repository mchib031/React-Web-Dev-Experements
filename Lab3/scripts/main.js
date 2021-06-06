
const allItems = restrictListProducts(products)
renderProductList(allItems)

var pro = document.getElementsByClassName("Proteins");
var fruits = document.getElementsByClassName("Fruits");
var veg = document.getElementsByClassName("Vegetables");
var dairy = document.getElementsByClassName("Dairy");
var fats = document.getElementsByClassName("Fats");
var carbs = document.getElementsByClassName("Carbs");
var viet = document.getElementsByClassName("Vietnamese");

function openInfo(evt, tabName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	if (tabName == "Products" || tabName == "Client") {
		document.getElementById(tabName).style.display = "block";
	}
	else {
		document.getElementById(tabName).style.display = "flex";
	}
	evt.currentTarget.className += " active";

}


function populateListProductChoices(slct1) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById('displayProduct');

    s2.innerHTML = "";

	if (selectedRestrictions.has(s1.value)) {
		selectedRestrictions.delete(s1.value)
	  } else {
		selectedRestrictions.add(s1.value)
	  }

    var optionArray = restrictListProducts(products, s1.value);


	renderProductList(optionArray)
}


function selectedRes() {
	openInfo(event, "Products");
}

function openAll(){
	var all = document.querySelectorAll('[title="type"]');
	for (var i = 0; i < all.length; i++) {
		all[i].style.display = "flex";
	}
}

function openCarbs() {
	hideElems();
	for (var i = 0; i < carbs.length; i++) {
		carbs[i].style.display = "flex";
	}
}

function openFruits() {
	hideElems();
	for (var i = 0; i < fruits.length; i++) {
		fruits[i].style.display = "flex";
	}
}

function openVeg() {
	hideElems();
	for (var i = 0; i < veg.length; i++) {
		veg[i].style.display = "flex";
	}
}

function openDairy() {
	hideElems();
	for (var i = 0; i < dairy.length; i++) {
		dairy[i].style.display = "flex";
	}
}

function openProtein() {
	hideElems();
	for (var i = 0; i < pro.length; i++) {
		pro[i].style.display = "flex";
	}
}

function openFat() {
	hideElems();
	for (var i = 0; i < fats.length; i++) {
		fats[i].style.display = "flex";
	}
}

function openViet() {
	hideElems();
	for (var i = 0; i < viet.length; i++) {
		viet[i].style.display = "flex";
	}
}



function hideElems() {
	for (var i = 0; i < fruits.length; i++) {
		fruits[i].style.display = "none";
	}
	for (var i = 0; i < veg.length; i++) {
		veg[i].style.display = "none";
	}
	for (var i = 0; i < pro.length; i++) {
		pro[i].style.display = "none";
	}
	for (var i = 0; i < dairy.length; i++) {
		dairy[i].style.display = "none";
	}
	for (var i = 0; i < fats.length; i++) {
		fats[i].style.display = "none";
	}
	for (var i = 0; i < carbs.length; i++) {
		carbs[i].style.display = "none";
	}
	for (var i = 0; i < viet.length; i++) {
		viet[i].style.display = "none";
	}
}

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "You have selected:";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is: " + getTotalPrice(chosenProducts)+" $"));

	openInfo(event, "Cart");

}

function priceFilter(a,b){
	return a.price > b.price ? 1:-1;
}

function renderProductList(optionArray){
	var s2 = document.getElementById('displayProduct');
	const sortedOptionArray = optionArray.sort(priceFilter);
	for (i = 0; i < sortedOptionArray.length; i++) {

		var label = document.createElement('label');
		label.className = "option_item";

	  var productName = sortedOptionArray[i].name;
	  var productPrice = sortedOptionArray[i].price;
		var productPicture = sortedOptionArray[i].picture;
		var productType = sortedOptionArray[i].type;

		var type = document.createElement('div');
		type.title = "type";
		if (productType == "Fruit") {
			type.className = "Fruits";
		}
		if (productType == "Vegetable") {
			type.className = "Vegetables";
		}
		if (productType == "Fat") {
			type.className = "Fats";
		}
		if (productType == "Protein") {
			type.className = "Proteins";
		}
		if (productType == "Carbs") {
			type.className = "Carbs";
		}
		if (productType == "Dairy") {
			type.className = "Dairy";
		}
		if (productType == "Vietnamese") {
			type.className = "Vietnamese";
		}


	  var checkbox = document.createElement("input");
	  checkbox.type = "checkbox";
		checkbox.className = "checkbox";
	  checkbox.name = "product";
	  checkbox.value = productName;

		label.appendChild(checkbox);
		formattedPrice = (Math.round(productPrice * 100) / 100).toFixed(2);

		var optioninner = document.createElement("div");
		optioninner.className = "option_inner nutfree";
		var tick = document.createElement("div");
		tick.className = "tickmark";
		var icon = document.createElement("div");
		icon.className = "icon";
		var productImage = document.createElement("img");
		productImage.src = productPicture;
		productImage.alt = "";
		icon.appendChild(productImage);
		var prodtext = document.createElement("div");
		prodtext.className = "boxtext";
		var h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(`${productName} - $${formattedPrice}`));
		prodtext.appendChild(h2);
		optioninner.appendChild(icon);
		optioninner.appendChild(tick);
		optioninner.appendChild(prodtext);

		label.appendChild(optioninner);
		type.appendChild(label);
	  s2.appendChild(type);

	  s2.appendChild(document.createElement("br"));
	}
  }
