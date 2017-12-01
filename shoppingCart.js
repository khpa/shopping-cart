


//shopping cart functions

var cart = [];

        var Item = function (name, price, count) {  
            this.name = name;
            this.price = price;
            this.count = count;
        };

        function addItemToCart(name, price, count) {
            for (var i in cart) {
                if (cart[i].name === name) {
                    cart[i].count += count;
                    saveCart();
                    return;
                }
            }
            var item = new Item(name, price, count);
            cart.push(item);
            saveCart();
        }

function removeItemFromCart (name){
    for (var i in cart) {
        if (cart[i].name === name) {
        cart[i].count --;
        if(cart[i].count === 0){
            cart.splice(i,1);
        }
        break;
        }
    }
    saveCart();
}

function removeItemFromCartAll (name) {
    for (var i in cart) {
        if (cart[i].name === name){
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

function clearCart () {
    cart = [];
    saveCart();
}

function countCart () {
    var totalCount = 0;
    for (var i in cart){
totalCount += cart[i].count;
    }
    return totalCount;
}

function totalCart() {
    var totalCost = 0;
    for (var i in cart){
        totalCost+=cart[i].price*cart[i].count;
    }
    return totalCost.toFixed(2);
}

function listCart(){
    var cartCopy = [];
    for (var i in cart){
    var item = cart [i];
    var itemCopy = {};
    for (var p in item) {
        itemCopy[p]=item[p];
    }
    itemCopy.total = item.price * item.count;
    var id = ~~i+1;
    itemCopy.id = id;
    cartCopy.push(itemCopy);
    }
    return cartCopy;
};

function saveCart () {
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
}


function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(cart);
}

loadCart();

//console.log("cart before remove: ",cart);
//removeItemFromCart("Apple");

// addItemToCart("Apple", 1.22, 1);
// addItemToCart("Pear", 1.72, 3);
// addItemToCart("Apple", 1.22, 1);
// addItemToCart("Apple", 1.22, 3);
// addItemToCart("Banana", 1.0, 1);
// addItemToCart("Car", 34.00, 1);
// addItemToCart("Plush Toy", 5.82, 1);
// addItemToCart("Sticky Notes", 4, 3);


//functions list:
//addItemToCart(name, price, count)
//removeItemFromCart (name) //removes one item
//removeItemFromCartAll(name) //removes all
//clearCart ()
//countCart() -> return total count
//totalCart() -> return total cost 
//listCart () -> array of Item
//saveCart()
//loadCart()