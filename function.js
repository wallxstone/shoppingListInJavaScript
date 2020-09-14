//Using the things i've learned to try and make something
//Making a shopping cart!

function shoppingList(element){
    var listOfItems = [];
   /* var a;
   object for the item in stock
    var itemStock = {
        _name : "",
        _numberInStock : a,
        _priceOfItem: b,
    };
    var reStock;
    var iS = itemStock._numberInStock;*/
//Add the ability to restock the item

//Add the ability to check if the item being added is in stock
/*if(iS > 0){
    isInStock = false;
    return `${element} is not in stock. Please wait for restock`
}else{*/
    //isInStock = true;
    this.getList = function(){
        console.log(listOfItems);
    };
    this.addToCart = function(element, amountOfItems){
        // add checking function to it
        /*if(listOfItems.indexOf(element) !== -1){
            listOfItems.push(element);    
        } else {
            return "An instance of this item is already added to your cart!";
        }*/
			listOfItems.push(element, amountOfItems);
    };
    this.removeFromCart = function(element){
        index = listOfItems.indexOf(element);
        listOfItems.splice(index,1);
        return `The ${element} has been removed from your Cart.`;
    };
    this.itemsInCart = function(){
        return `Your cart has ${listOfItems.length} item(s).`;
    };

    this.isEmpty = function(){
        return (listOfItems.length === 0);
    };
		
}
//}

var cartOne = new shoppingList();
console.log(cartOne.isEmpty());
cartOne.addToCart("Apple",2);
cartOne.addToCart("Oranges",4);
cartOne.getList();
cartOne.removeFromCart("Oranges");
cartOne.getList();
console.log(cartOne.itemsInCart());