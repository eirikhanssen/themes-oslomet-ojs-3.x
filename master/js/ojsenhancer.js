var ojsEnhancer = function () {
    if (isAbstractPage()) {
        addVideoAbstractIfApplicable();
    }
}

var isAbstractPage = function () {
    return $("body").hasClass("pkp_page_article");
}

var addVideoAbstractIfApplicable = function () {
    var article_id_meta = document.querySelector('meta[name="DC.Identifier"]');
    var has_article_id_meta = (article_id_meta != null);

    if (has_article_id_meta) {
        var article_id = article_id_meta.getAttribute('content');
        var has_article_id = (article_id != null);

        if (has_article_id) {
            var abstract_video_list = document.querySelector('#abstractVideoList');
            var has_abstract_video_list = (abstract_video_list != null);

            if (has_abstract_video_list) {
                var abstract_video_list_current_abstract = document.querySelector('#abstractVideoList li[data-article-id="' + article_id + '"]');
                var abstract_video_list_has_current_abstract_id = (abstract_video_list_current_abstract != null);

                if (abstract_video_list_has_current_abstract_id) {
                    var abstract_video_fid = abstract_video_list_current_abstract.getAttribute("data-fid");

                    var is_valid_abstract_video_fid = ((abstract_video_fid != null) && (abstract_video_fid != ""));

                    if (is_valid_abstract_video_fid) {
                        var videoEmbedCode = '<div class="abstract_video_container" style="width:100%; height:0; position: relative; padding-bottom:56.25%"><iframe src="https://film.oslomet.no/v.ihtml/player.html?source=embed&photo%5fid=' + abstract_video_fid + '" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="fullscreen"></iframe></div>';

                        var embedContainer = document.createElement('div');
                        embedContainer.innerHTML = videoEmbedCode;

                        var abstractSection = document.querySelector('.obj_article_details .abstract');

                        var abstractBody = abstractSection.querySelector('p');
                        abstractSection.insertBefore(embedContainer.firstElementChild, abstractBody);
                    } else {
                        console.log("Not valid abstract_video_fid: " + abstract_video_fid);
                    }
                } else {
                    var page_title = $('h1.page_title').text();
                    console.log("#abstractVideoList in theme locale.po does not have an entry for current article_id: " + article_id);
                    console.log('"<li data-article-id="'+article_id+'" data-fid="xxxxxx">'+page_title+'</li>"');
                }
            } else {
                // console.log("There is no #abstractVideoList!");
            }
        } else {
            // console.log("There is no valid article_id!");
        }
    } else {
        // console.log('There is no meta[name="DC.Identifier"]');
    }
} // addVideoAbstractIfApplicable

window.addEventListener('load', ojsEnhancer, false);