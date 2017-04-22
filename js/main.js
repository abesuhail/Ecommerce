function Sneaker(brand, model, color, size, price, image) {
	this.brand = brand;
	this.model = model;
	this.color =color;
	this.size = size;
	this.price = price;
	this.image = image;
}

var sneakerArray = []

var jordan1 = new Sneaker('Nike', "Jordan 1", "Royal", 10.5, "$300", "img/jordan1.jpg")
var jordan3 = new Sneaker('Nike', "Jordan 3", "Cement", 12, "$250", "img/jordan3.jpg")
var jordan5 = new Sneaker('Nike', "Jordan 5", "Grape", 8, "$250", "img/jordan5.jpg")
var ultraboost1 = new Sneaker('Adidas', "UltraBoost 1.0", "Wool Grey", 10, "$350", "img/ultraboost1.jpg")
var ultraboost2 = new Sneaker('Adidas', "UltraBoost 2.0", "White", 12.5, "$225", "img/ultraboost2.jpg")
var newbalance = new Sneaker('New Balance', "Cyclades", "Multi", 10.5, "$250", "img/newbalance.jpg")
var foamposite = new Sneaker('Nike', "Chromeposites", "Silver", 11, "$600", "img/foamposite.jpg")
var ewing = new Sneaker('Reebok', "Ewing Home", "Multi", 9, "$200", "img/ewing.jpg")
var alienstompers = new Sneaker('Reebok', "Alien Stompers", "Multi", 10.5, "$800", "img/alienstompers.jpg")


sneakerArray.push(jordan1)
sneakerArray.push(jordan3)
sneakerArray.push(jordan5)
sneakerArray.push(ultraboost1)
sneakerArray.push(ultraboost2)
sneakerArray.push(newbalance)
sneakerArray.push(foamposite)
sneakerArray.push(ewing)
sneakerArray.push(alienstompers)


for(i = 0; i < sneakerArray.length; i++) {
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var nameH1 = document.createElement("h1")
	var colorH2= document.createElement("h2")
	var brandH4= document.createElement("h4")
	var sizeH4 = document.createElement("h4")
	var priceH4= document.createElement("h4")
	var btn = document.createElement("button")
	var image = document.createElement("img")

	var tName = document.createTextNode(sneakerArray[i].model)
	var tColor = document.createTextNode(sneakerArray[i].color)
	var tBrand = document.createTextNode(sneakerArray[i].brand)
	var tSize = document.createTextNode("Available Size " + sneakerArray[i].size)
	var tPrice = document.createTextNode("Price " + sneakerArray[i].price)
	var tButton = document.createTextNode("Buy Now!")

	image.src = sneakerArray[i].image

	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	// newDiv.className = "tshirt shirtName" + [i] + " thumbnail"

	nameH1.appendChild(tName)
	colorH2.appendChild(tColor)
	brandH4.appendChild(tBrand)
	sizeH4.appendChild(tSize)
	priceH4.appendChild(tPrice)
	btn.appendChild(tButton)

	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(colorH2)
	newDiv.appendChild(brandH4)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	newItem.appendChild(newDiv)

		document.getElementById("sneakers").appendChild(newItem)

} 