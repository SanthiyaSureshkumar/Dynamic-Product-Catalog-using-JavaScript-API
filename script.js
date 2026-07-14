const cardcontainer = document.querySelector(".card-container");

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {

            data.forEach(product => {

                let starFilled = Math.floor(product.rating.rate);
                let starNotFilled = 5 - starFilled;

                let stars = "";

                for (let i = 0; i < starFilled; i++) {
                    stars += `<span class="filled">&#9733;</span>`;
                }

                for (let i = 0; i < starNotFilled; i++) {
                    stars += `<span class="not-filled">&#9734;</span>`;
                }

                cardcontainer.innerHTML += `
                    <div class="card">

                        <div class="image">
                            <img class="img" src="${product.image}" alt="">
                        </div>

                        <div class="details">
                            <div class="title">${product.title}</div>
                            <div class="category">${product.category}</div>

                            <div class="rate">
                                ${stars}
                            </div>

                            <div class="count">
                                Rating Count : ${product.rating.count}
                            </div>

                        </div>

                        <button class="btn">Buy Now</button>

                    </div>
                `;
            });

        })
        .catch(error => {
            console.log(error);
        });

});