'use strict';


function init() {
    renderCardTxt()
    renderImages()
    renderImageEditor()
    renderEditedTextarea()
}


function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    mainMenu.classList.toggle('open');
}

function renderCardTxt() {
    var elCardTxt = document.querySelector('.first-panel')
    elCardTxt.innerHTML = `<h2>Duis aute irure dolor in henderit in voluptate.</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
        doconsequat,
        sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in
        reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
        doconsequat,
        sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in
        reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <a href="#" class="more">Continue Reading</a>
    <button onclick="onEditImagesButton()" class="more">Open Editor</button>`
}

function renderImages() {
    var images = getImages()
    var elImageContainer = document.querySelector('.images')
    var strHTMLs = images.map(function (image) {
        return `<img class=" image added-image ${image.design}" src="${image.imgUrl}">`
    })
    elImageContainer.innerHTML = strHTMLs.join('')
}

function renderImageEditor() {
    var images = getImages()
    var elImagePanel = document.querySelector('.image-editor-panel-container');
    var strHTMLs = images.map(function (image) {
        return `<div class="image-editor-panel flex">
                     <div class="added-on flex">
                         <p>${image.date}</p>
                     </div>
                <div class="small-image-container flex">
                     <img class="small-image" src="${image.imgUrl}" alt="">
                </div>
                <div class="remove-image flex">
                     <button onclick="onRemoveImage(${image.id})" class="remove-button">Remove &#9746;</button>
                </div>
                </div>`
    })
    elImagePanel.innerHTML = strHTMLs.join('')
}

function onRemoveImage(imageId) {
    var images = getImages()
    var imageIdx = images.findIndex(function (image) {
        return image.id === imageId
    })
    removeImage(imageIdx)
    renderImages()
    renderImageEditor()
}

function onAddImage() {
    var elCheckboxes = document.querySelectorAll('.checkbox')
    var elImgUrl = document.querySelector('.url-input');
    var isElBigChecked = document.querySelector('.big-checkbox').checked
    var isElVerticalChecked = document.querySelector('.vertical-checkbox').checked
    var isElHorizontalChecked = document.querySelector('.horizontal-checkbox').checked
    var design = '';

    if (!elImgUrl.value) {
        for (var i = 0; i < elCheckboxes.length; i++) {
            elCheckboxes[i].checked = false
        }
        return alert('ENTER URL');
    }

    if (isElBigChecked && isElVerticalChecked && isElHorizontalChecked) design = 'very-big'
    else if (isElBigChecked && isElVerticalChecked) design = 'big-vertical'
    else if (isElBigChecked && isElHorizontalChecked) design = 'big-horizontal'
    else if (isElVerticalChecked && isElHorizontalChecked) design = 'big'
    else if (isElBigChecked) design = 'big'
    else if (isElVerticalChecked) design = 'vertical'
    else if (isElHorizontalChecked) design = 'horizontal'
    else design = ''

    for (var i = 0; i < elCheckboxes.length; i++) {
        elCheckboxes[i].checked = false
    }

    addImage(elImgUrl.value, design)
    elImgUrl.value = '';
    renderImages()
    renderImageEditor()
}

function onEditImagesButton() {
    document.querySelector('.image-editor').classList.toggle('hide')
    document.querySelector('.image-editor-panel-container').classList.toggle('hide')
    document.querySelector('.text-editor').classList.toggle('hide')
}


function renderEditedTextarea() {
    var elText = document.querySelector('.text-wrapper').innerText
    var elTextInputBox = document.querySelector('.text-textarea')
    elTextInputBox.value = elText
}

function onChangeText() {
    var elText = document.querySelector('.text-wrapper')
    var elTextInputBox = document.querySelector('.text-textarea')
    elText.innerText = elTextInputBox.value
}