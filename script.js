
        const candies = [
            {id: 1, name: "Chocolate Bar", type: "chocolate", price: 2.5,rating: 5,image: "Chocolate-bar.jpg"},
            {id: 2, name: "Gummy Bears", type: "gummies", price: 1.8,rating: 5,image: "gummy-bears.jpg"},
            {id: 3, name: "Lollipop", type: "lollipop", price: 1.0,rating:3,image: "lollipop.jpg"},
            {id: 4, name: "Party Mix", type: "vidal", price: 2.5,rating: 5,image: "mix.jpg"},
            {id: 5, name: "Cadbury Choclairs", type: "cadbury", price: 1.8,rating: 4,image: "Cadbury-Choclairs.jpg"},
            {id: 6, name: "orange candy", type: "orange", price: 1.0,rating: 5,image: "orange-candy.jpg"},
            {id: 7, name: "the sweet squad", type: "chocolate", price: 2.5,rating: 5,image: "the-sweet-squad.jpg"},
            {id: 8, name: "Milk Chocolate Bar", type: "Milk Chocolate Bar", price: 1.8,rating: 4,image: "milk-chocolate-bar.jpg"},
            {id: 9, name: "Dark Chocolate", type: "lollipop", price: 3.0,rating: 2,image: "dark-chocolate.jpg"},
            {id: 10, name: "White Chocolate Bar", type: "chocolate", price: 2.5,rating: 5,image: "white-chocolate.jpg"},
            {id: 11, name: "Peanut Chocolate Bar ", type: "gummies", price: 6.8,rating: 5,image: "Peanut-Chocolate-Bar.jpg"},
            {id: 12, name: "Chocolate Truffles", type: "lollipop", price: 3.0,rating: 3,image: "Chocolate-Truffles.jpg"},
            {id: 13, name: "Nougat Bars", type: "chocolate", price: 2.5,rating: 5,image: "Nouga-Bars.jpg"},
            {id: 14, name: "Gummy Bears", type: "gummies", price: 1.8,rating: 5,image: "gummy-bears.jpg"},
            {id: 15, name: "Candy Canes", type: "lollipop", price: 2.0,rating: 4,image: "Candy-Canes.jpg"},
            {id: 16, name: "Bubble Gum", type: "chocolate", price: 2.5,rating: 5,image: "Bubble-Gum.jpg"},
            {id: 17, name: "Jelly Beans", type: "gummies", price: 1.8,rating: 2,image: "jelly-candy.jpg"},
            {id: 18, name: "Cotton Candy", type: "lollipop", price: 1.0,rating: 5,image: "Cotton-Candy.jpg"},
            {id: 19, name: "Saltwater Taffy", type: "chocolate", price: 2.5,rating: 3,image: "Saltwater-Taffy.jpg"},
            {id: 20, name: "Gummy Worms", type: "gummies", price: 1.8,rating: 5,image: "Gummy-Worms.jpg"},
            {id: 21, name: "Jawbreakers", type: "lollipop", price: 2.0,rating: 5,image: "Jawbreakers.jpg"},
            {id: 22, name: "Sour Patch Kids", type: "chocolate", price: 2.5,rating: 4,image: "Sour-Patch-Kids.jpg"},
            {id: 23, name: "Fruit Gummies", type: "gummies", price: 3.8,rating: 5,image: "fruit-jelly.jpg"},
            {id: 24, name: "Butterscotch Discs", type: "lollipop", price: 1.0,rating: 2,image: "Butterscotch-Discs.jpg"},
            {id: 25, name: "Chocolate-Covered Almonds", type: "chocolate", price: 2.5,rating: 5,image: "Chocolate-Covered-Almonds.jpg"},
            {id: 26, name: "Rock Candy", type: "gummies", price: 1.8,rating: 3,image: "Rock-Candy.jpg"},
            {id: 27, name: "Fruit Drops", type: "lollipop", price: 2.0,rating: 4,image: "Fruit-Drops.jpg"},
            {id: 28, name: "Caramel Chews", type: "gummies", price: 1.8,rating: 2,image: "Caramel-Chews.jpg"},
            {id: 29, name: "Taffy ", type: "lollipop", price: 2.0,rating: 5,image: "Taffy.jpg"},
            {id: 30, name: "Snickers ", type: "chocolate", price: 4.0,rating: 5,image: "snickers.jpg"}

        ];
        let cart = [];
        function displayCandies(filter = "") {
            let candyList = document.getElementById("candy-list");
            candyList.innerHTML = "";
            candies.filter(candy => candy.name.toLowerCase().includes(filter.toLowerCase())).forEach(candy => {
                let candyCard = `<div class="col-md-4">
                                    <div class="card">
                                        <img src="images/${candy.image}" class="card-img-top"">
                                        <div class="card-body">
                                            <h5>${candy.name}</h5>
                                            <!-- <p>Type: ${candy.type}</p> -->
                                            <p>Price: $${candy.price.toFixed(2)}</p>
                                            <p>Rating: ${candy.rating}<i class="far fa-star"></i></p>
                                            <button class="btn" onclick="addToCart(${candy.id})">Add to Cart</button>
                                            <button class="btn" onclick="saveForLater()">Buy Now</button>
                                        </div>
                                    </div>
                                </div>`;
                candyList.innerHTML += candyCard;

            });
        }
        document.getElementById("search-bar").addEventListener("input", (e) => displayCandies(e.target.value));
        function addToCart(candyId) {
            let existingItem = cart.find(item => item.id === candyId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                let candy = candies.find(c => c.id === candyId);
                cart.push({...candy, quantity: 1});
                document.getElementById("cart-count").innerText = cart.length;
            }
            updateCart();
        }

        function updateCart() {
            let cartList = document.getElementById("cart");
            let totalPrice = 0;
            cartList.innerHTML = "";

            cart.forEach(item => {
                totalPrice += item.price * item.quantity;
                cartList.innerHTML += 
                        `<div class="card-items">
                            <img src="images/${item.image}" class="cart-img-top">
                            <div class="cart-info">
                            <span><strong>${item.name}</strong><br>
                            Price: $${item.price.toFixed(2)}</span>
                                <span class="quantity">
                                    <button class="minus" onclick="changeQuantity(${item.id}, -1)">-</button>
                                    ${item.quantity}
                                    <button class="plus" onclick="changeQuantity(${item.id}, 1)">+</button>
                                    <button class="btn-remove" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                                </span>
                            </div>
                        </div>`;
            });

            document.getElementById("cart-count").innerText = `${cart.length}`;
            document.getElementById("total-price").innerText = totalPrice.toFixed(2);
        }
        function changeQuantity(candyId, amount) {
            let item = cart.find(i => i.id === candyId);
            if (item) {
                item.quantity += amount;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== candyId);
                }
            }
            updateCart();
        }
        function removeFromCart(candyId) {
            cart = cart.filter(i => i.id !== candyId);
            updateCart();
        }
        displayCandies();
