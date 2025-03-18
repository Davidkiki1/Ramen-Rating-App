document.addEventListener("DOMContentLoaded", () => {
    const menuImages = document.querySelectorAll("#ramen-menu img");
    const ramenName = document.getElementById("ramen-name");
    const ramenRestaurant = document.getElementById("ramen-restaurant");
    const ramenImage = document.getElementById("ramen-image");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");

    const ramenData = {
        "Shoyu Ramen": { restaurant: "Ramen Ichiraku", rating: 4, comment: "Savory and flavorful!" },
        "Miso Ramen": { restaurant: "Tokyo Ramen Bar", rating: 5, comment: "Rich and umami-packed!" },
        "Tonkotsu Ramen": { restaurant: "Hakata Ramen House", rating: 3, comment: "Creamy broth, needs more spice!" }
    };

    menuImages.forEach(img => {
        img.addEventListener("click", () => {
            const ramenType = img.alt;
            ramenImage.src = img.src;
            ramenName.textContent = ramenType;
            ramenRestaurant.textContent = `Restaurant: ${ramenData[ramenType].restaurant}`;
            ramenRating.textContent = ramenData[ramenType].rating;
            ramenComment.textContent = ramenData[ramenType].comment;
        });
    });
});