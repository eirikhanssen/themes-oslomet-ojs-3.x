function lightboxcustom() {
    var lang = document.querySelector('html').getAttribute('lang');
    var image_placeholder = "Bilde %1 av %2";
    if (lang == "en-US") {
        image_placeholder = "Image %1 of %2";
    } else if (lang == "da-DK") {
        image_placeholder = "Billede %1 af %2";
    } else if (lang == "sv-SE") {
        image_placeholder = "Bild %1 av %2";
    }
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': image_placeholder
        });
}

window.addEventListener('load',lightboxcustom,false);

