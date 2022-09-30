(function() {
    var debug = false;
    function Videoabstracts () {
    
    
        if(debug) {
            console.log('information-video-abstracts running ...');
        }
    
        this.data = [
            /*{ journal: "information", year: 2022, vol: 18, issue: 1, article_id: 0000, token: "xxxx", filmet_id: 0000, title: "0000" },*/
            { journal: "information", year: 2022, vol: 11, issue: 1, article_id: 5043, token: "bda178b141d3ff2d486de01965b0ad2", filmet_id: 78652467, title: "Listening to the Forest" },
        ];
    
        this.get_indexed_array_article_id = function(sourceArray) {
            // return a new array where the key is used as index
            // key should be integer! Str is also ok.
        
            var indexedArray = [];
        
            for (var i = 0; i < sourceArray.length; i++) {
                let index = sourceArray[i].article_id;
                indexedArray[index] = sourceArray[i];
            }
            return indexedArray;
        }
        
        this.get_indexed_array_filmet_id = function(sourceArray) {
            // return a new array where the key is used as index
            // key should be integer! Str is also ok.
        
            var indexedArray = [];
        
            for (var i = 0; i < sourceArray.length; i++) {
                let index = sourceArray[i].filmet_id;
                indexedArray[index] = sourceArray[i];
            }
            return indexedArray;
        }
    
        this.indexed_data_article_id = this.get_indexed_array_article_id(this.data);
        this.indexed_data_filmet_id = this.get_indexed_array_filmet_id(this.data);
    
        this.has_id = function(id) {
            var result = false;
            this.data.forEach(function(entry) {
                if (id == entry.article_id) {
                    result = true;
                }
            });
            return result;
        }
    
    
        this.get_token_from_article_id = function(id) {
            return this.indexed_data_article_id[id].token;
        }
    
        this.get_token_from_filmet_id = function(id) {
            return this.indexed_data_filmet_id[id].token;
        }
    
        this.get_filmet_id_from_article_id = function(id) {
            return this.indexed_data_article_id[id].filmet_id;
        }
    
    } // function Videoabstracts()
    
    var va = new Videoabstracts();
    
    var hasClass = function(el, cls) {
        if (!el.className) {
            return false;
        } else {
            var newElementClass = ' ' + el.className + ' ';
            var newClassName = ' ' + cls + ' ';
            return newElementClass.indexOf(newClassName) !== -1;
        }
    }
    
    var videoAdder = function () {
        if (isAbstractPage()) {
            addVideoAbstractIfApplicable();
        }
    }
    
    var isAbstractPage = function () {
        var page_is_abstract_page = hasClass(document.querySelector('body'), 'pkp_page_article');
        if(debug) {
            console.log('isAbstractPage(): page_is_abstract_page = ' + page_is_abstract_page);
        }
        return (page_is_abstract_page);
    }
    
    function getFilmetVideoEmbedCode(filmet_id) {
        // based on the filmet_id code, create the HTML embed code to inject to the abstract page
        var embedcode = '<div class="abstract_video_container" style="width:100%; height:0; position: relative; padding-bottom:56.25%">';
        //embedcode += '<iframe src="https://film.oslomet.no/v.ihtml?token=' + va.get_token_from_filmet_id(filmet_id) + '&source=embed&photo%5fid=' + filmet_id + '"';
        embedcode += '<iframe src="https://film.oslomet.no/v.ihtml?source=embed&photo%5fid=' + filmet_id + '"';
        embedcode += ' style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="fullscreen"></iframe></div>';
        return embedcode;
    }
    
    var addVideoAbstractIfApplicable = function () {
        var abstract_db = new Videoabstracts();
        var page_article_id_meta = document.querySelector('meta[name="DC.Identifier"]');
        var page_has_article_id_meta = (page_article_id_meta != null);
    
        if(debug) {
            console.log('addVideoAbstractIfApplicable(): page_article_id_meta = ' + page_article_id_meta);
        }
    
        if (page_has_article_id_meta) {
            var page_article_id = page_article_id_meta.getAttribute('content'); // get the article_id from the page
            var page_has_article_id = (page_article_id != null);
    
            if(debug) {
                console.log('addVideoAbstractIfApplicable(): page_article_id = ' + page_article_id);
            }
    
            if (page_has_article_id) {
                var filmet_id = abstract_db.get_filmet_id_from_article_id(page_article_id);
                var abstract_db_has_valid_filmet_id_for_page_id = (filmet_id != false);
    
                if(debug) {
                    console.log('addVideoAbstractIfApplicable(): filmet_id = ' + filmet_id);
                }
    
                    if (abstract_db_has_valid_filmet_id_for_page_id) {
    
                        var embedContainer = document.createElement('div');
                        embedContainer.innerHTML = getFilmetVideoEmbedCode(filmet_id);
    
                        var abstractSection = document.querySelector('.obj_article_details .abstract');
    
                        var abstractBody = abstractSection.querySelector('p');
                        abstractSection.insertBefore(embedContainer.firstElementChild, abstractBody);
                    } else {
                        if(debug) {
                            console.log('addVideoAbstractIfApplicable(): no filmet_id found for page_article_id = ' + page_article_id);
                        }
                    }
                }
            }
    
    } // addVideoAbstractIfApplicable
    
    window.addEventListener('load', videoAdder, false);
    
    //videoAdder();
    })();
