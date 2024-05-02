function openImage(images) {
    // Create a modal div
    var modal = document.createElement('box');
    modal.className = 'image-modal';

    // Create an image element for the full-size image
    var fullImg = document.createElement('images');
    fullImg.src = img.src;
    fullImg.alt = img.alt;

    // Append the full-size image to the modal
    modal.appendChild(fullImg);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Close the modal when clicking anywhere outside of the image
    modal.onclick = function() {
        document.body.removeChild(modal);
    };
}