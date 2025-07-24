function setMainImageFromThumbnail(thumbnailElement) {
    const mainProductImage = document.getElementById("mainProductImage");
    const allThumbnails = document.querySelectorAll(".img-thumbnail");

    mainProductImage.src = thumbnailElement.src;

    allThumbnails.forEach(img => img.classList.remove("border-danger"));
    thumbnailElement.classList.add("border-danger");
}

function incrementQuantity() {
    const quantityInput = document.getElementById("productQuantity");
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function decrementQuantity() {
    const quantityInput = document.getElementById("productQuantity");
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}
