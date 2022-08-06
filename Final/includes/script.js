class Catalog {
    apiurl = "https://fakestoreapi.com/products";
    currencyapi_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json"
    constructor() {
        this.product_data = [];
        this.products = {};
        this.currency_data = {};
        this.product_api();
        this.currency_api();
        this.shipping_details();
        this.currency_symbol = {cad: '$', usd: 'USD', php: 'PHP'}
        this.currency = get_cookie("cart-currency");
        if (this.currency == "" || this.currency == undefined || this.currency == null)  {
            this.currency = "cad";
        }
    }

    currency_api(value) {
        

        fetch(this.currencyapi_url)

            .then(response => {
                return response.json();
            })

            .then(json => {
                this.currency_data = json;
                console.log(value)
                if (this.product_data > 0) {
                    this.render_catalog();
                }
            })

            .catch(error => {
                console.log(error);
            })
    }

    product_api() {
        fetch(this.apiurl)

            .then(response => {
                return response.json();
            })

            .then(json => {
                this.product_data = json;
                for (let product of json) {
                    let product_id = product.id;
                    this.products[product_id] = product;
                }

                if (this.currency_data['cad'] != undefined) {
                    this.render_catalog();
                }

            })

            .catch(error => {
                console.log(error);
            })
    }

    render_catalog() {
        $("#catalog").html("");
        for (let product of this.product_data) {
            let {id, title, description, image, price} = product;
            let currency_exchange = this.currency_data['cad'][this.currency];

            price = price * currency_exchange;
            price = price.toFixed(2);

            let currency_symbol = this.currency_symbol[this.currency];
            let product_content = "";
            product_content = 
            `<div class="col-sm-6 col-lg-4 mb-4">
                <div class="shadow card">
                    <img src="${image}" class="card-image img-fluid rounded mx-auto d-block">
                    <div class="card-body">
                        <h5>${title}</h5>
                        <p>${description}</p>
                        <p>${currency_symbol}${price}</p>
                        <button class="btn btn-success add-to-cart-button" data-id="${id}" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Buy</button>
                    </div>
                </div>
            </div>`;
            $(product_content).appendTo("#catalog");
        }

        let catalog_container = document.getElementById("catalog"); // assuming your target is <div class='row' id='catalog'>
        jQuery(catalog_container).imagesLoaded( function() {
        var msnry = new Masonry(catalog_container); // this initializes the masonry container AFTER the product images are loaded
        });

        this.event_handlers();
    }

    get_product(product_id) {

        if (typeof this.products[product_id] == undefined ) {
            return {};
        } else {
            return this.products[product_id];
        }
    }

    items_in_cart() {
        let cart_contents = "";
        let cart_total = "";
        var cart_items = get_cookie("shopping_cart_items");

        for (let product_id in cart_items) {
            let product = this.get_product(product_id);
            let quantity = cart_items[product_id];
            let item_total = product.price * quantity;
            let overall_total =  Math.round(item_total * 100) / 100;

            let currency_exchange = this.currency_data['cad'][this.currency];

            let price = product.price * currency_exchange;
            price = price.toFixed(2);

            let currency_symbol = this.currency_symbol[this.currency];
            cart_contents += `<tr><td><button class="btn btn-daner btn-sm remove-item" data-id="${product_id}"><span class="material-symbols-outlined">
            Delete</span></button><td>${product.title}</td><td>${quantity}</td><td>${currency_symbol}${price}</td><td>${currency_symbol}${item_total.toFixed(2)}</td></tr>`;
            cart_total = `<strong class="cart-total-title">Total:</strong>
        <span class="cart-total-price">${currency_symbol}${overall_total.toFixed(2)}</span>`
        }

        if (cart_contents != "") {
            cart_contents = `<table class="table"><tr><th>&nbsp;</th><th>Title</th><th>Qty</th><th>Price</th><th>Item Total</th></tr>` + cart_contents + `</table><button class="btn btn-warning empty-cart">Empty Cart</button><button class="btn btn-success checkout" data-bs-toggle="modal" data-bs-target="#exampleModal">Checkout</button>`;
        } else {
            cart_contents = `<br><br><h3 class="text-center">Your cart is empty</h3><br><br>`;
        }

        $("#cart-total").html(cart_total);

        $("#cart-items").html(cart_contents);

        $(".remove-item").click(function() {
            catalog.remove_item_from_cart($(this).attr("data-id"));
            catalog.items_in_cart();
        })

        $(".empty-cart").click(function() {
            catalog.empty_cart();
            catalog.items_in_cart();
        })

        $("#currency-selector").change(function () {
            
        })

    }

    empty_cart() {
        set_cookie("shopping_cart_items", {});
    }

    remove_item_from_cart(product_id) {
        var cart_items = get_cookie("shopping_cart_items");

        cart_items[product_id]--;

        if(cart_items[product_id] <= 0) {
            delete cart_items[product_id];
        }

        set_cookie("shopping_cart_items", cart_items);
    }

    shipping_details() {
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                $("#shipping_details").hide();
            }
            else if($(this).prop("checked") == false){
                $("#shipping_details").show();

                $("#form2").values($("#form1").values());
                
            }
        });
        
    }

    event_handlers() {
        jQuery(".add-to-cart-button").click(function() {
            // get the product id from a data attribute of the button that looks like this:
            // Add To Cart

            var product_id = jQuery(this).attr("data-id"); 
            var cart_items = get_cookie("shopping_cart_items"); // get the data stored as a "cookie"
            
            // initialize the cart items if it returns null
            if (cart_items === null) {
                cart_items = {};
            }

            // make sure the object is defined;
            if (cart_items[product_id] === undefined) {
                cart_items[product_id] = 0;
            }
        
            cart_items[product_id]++;
        
            set_cookie("shopping_cart_items", cart_items); // setting the cart items back to the "cookie" storage     
            catalog.items_in_cart();
        });

        $("#view-cart").click(function () {
            catalog.items_in_cart();
        });

        $("#complete-order").click(function () {

        })

    }

}

let catalog = new Catalog();