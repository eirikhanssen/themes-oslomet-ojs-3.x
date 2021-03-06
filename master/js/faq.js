function faq() {
    function add_backlink(el) {
        var id = el.id;
        if (id != "") {

            var lang = document.querySelector('html').getAttribute('lang');
            var pre_link_text = "Lenke til dette spørsmålet: ";
            if (lang == "en-US") {
                pre_link_text = "Link to this question: ";
            } else if (lang == "da-DK") {
                pre_link_text = "Link til dette spørgsmål: ";
            } else if (lang == "sv-SE") {
                pre_link_text = "Länk till denna fråga: ";
            }

            var href = window.location.origin + window.location.pathname + "#" + id;
            var backlink_wrapper = document.createElement('span');
            backlink_wrapper.setAttribute('class','faq_backlink_wrapper');
            backlink_wrapper.innerHTML = (pre_link_text);

            var backlink = document.createElement('a');
            backlink.setAttribute('href',href);
            backlink.setAttribute('class','faq_backlink');
            backlink.innerHTML=id.replace(/-/g,' ');
            backlink_wrapper.appendChild(backlink);
            el.appendChild(backlink_wrapper);
        }
    }
    
    
    var faq_page = document.querySelector('body.pkp_page_faq');

    if (faq_page != null) {
        var all_details = document.querySelectorAll('details');

        for (var i = 0; i < all_details.length; i++) {
            add_backlink(all_details[i]);
        }
    }

    var lightbox_links = document.querySelectorAll('a[data-lightbox]');
    if (lightbox_links.length > 0) {
        for (var j = 0; j < lightbox_links.length; j++) {
            if(lightbox_links[j].getAttribute('data-title') == null) {
                let lightbox_link_img = lightbox_links[j].querySelector('img');
                lightbox_link_img_alt = lightbox_link_img.getAttribute('alt');
                if(lightbox_link_img_alt != null) {
                    lightbox_links[j].setAttribute("data-title",lightbox_link_img_alt);
                }
            }
        }
    }
}

window.addEventListener('load',faq,false);
