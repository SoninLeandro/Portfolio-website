function showImage(imgID) {
    let img = document.getElementById(imgID);

    if (img.style.display === 'none') {
        img.style.display = 'block'
    } else {
        img.style.display = 'none'
    }
};
