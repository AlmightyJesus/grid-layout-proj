'use strict';

var gNextId = 101;
var gImages;
var IMAGES_KEY = 'image'
createImages()

function createImages() {
    var images = loadImagesFromStorage()
    if (!images || images.length === 0) {
        images = [
            createImage('images/image-001.jpg', 'big'),
            createImage('images/image-002.jpg', 'vertical'),
            createImage('images/image-003.jpg', 'big-horizontal')
        ]
    }
    gImages = images;
    saveImagesToStorage()
    gNextId = gImages[gImages.length - 1].id + 1;
}

function createImage(imgUrl, design) {
    return {
        id: gNextId++,
        imgUrl,
        design,
        date: new Date().toLocaleString()
    }
}

function addImage(imgUrl, design) {
    gImages.push(createImage(imgUrl, design))
    saveImagesToStorage()
}

function removeImage(imageIdx) {
    gImages.splice(imageIdx, 1)
    saveImagesToStorage()
}

function saveImagesToStorage() {
    saveToStorage(IMAGES_KEY, gImages)
}

function loadImagesFromStorage() {
    return loadFromStorage(IMAGES_KEY);
}

function getImages() {
    return gImages
}


