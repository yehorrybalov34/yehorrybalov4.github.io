function showImage() {
    var img = document.createElement("img");
    img.src = "path/to/image.jpg";
    document.body.appendChild(img);
}
function replaceLinkWithImage() {
    var link = document.getElementById("myLink");
    var image = new Image();
    image.src = "image.jpeg";
    image.onload = function() {
        link.parentNode.replaceChild(image, link);
    };
}