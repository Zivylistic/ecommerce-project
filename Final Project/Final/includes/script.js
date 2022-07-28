class Catalog {
    apiurl = "https://fakestoreapi.com/products";
    constructor() {
        this.product_data = [];
        this.products = {};
        this.product_api();
        this.appendCatalog();
    }

    product_api() {
        fetch(this.apiurl)

            .then(response => {
                response.json();
            })

            .then(json => {
                console.log(json)
            })

            .catch(error => {
                console.log(error);
            })
    }

    appendCatalog() {
        $("#catalog").html("");
        for (let product of this.product_data) {
            let {id, title, description, image, price} = product;
            let html = 
            `<div class="col-sm-6 col-lg-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <img src="${image}">
                        <h5>${title}</h5>
                        <p>${description}</p>
                        ${price}
                    </div>
                </div>
            </div>`;
            $(html).appendTo("#catalog");
        }
    }

}