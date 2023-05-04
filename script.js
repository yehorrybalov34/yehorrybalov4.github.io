function showImage() {
    var img = document.createElement("img");
    img.src = "path/to/image.jpg";
    document.body.appendChild(img);
}
function replaceButtonWithImage() {
    var button = document.getElementById("myButton");
    var image = new Image();
    image.src = "image.jpeg";
    image.onload = function() {
        button.parentNode.replaceChild(image, button);
    };
}