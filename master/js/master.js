var master = function () {
    
    var dropDownMenuFixer = function () {
    /* dropDownMenuFixer():
     * fix some annoying behaviour in default OJS JavaScript, where .dropdown-menu has a click handler
     * which will place .dropdown-menu using stransform3d property in the style attribute. This makes
     * it difficult to control the menu placement with CSS.
     * This function adds another click handler which will set the style to "top:100%;" for consistency.
     * It will trigger on each click, directly after the default behaviour, invisible to the user.
     */
        function fixDropdownMenuStyle(e) {
            var el = document.querySelector('.dropdown-menu[aria-labelledby=' + e.target.id + ']');
            if(el !== null) {
                el.setAttribute('style','transform:unset');
                window.setTimeout(function(){
                    el.setAttribute('style','transform:unset');
                    el.setAttribute('data-fixed-by','fixDropdownMenuStyle()');
                },1);
            }
        }

        function fixDropdownMenuStyleParent(e) {
            var el = document.querySelector('.dropdown-menu[aria-labelledby=' + e.target.parentNode.id + ']');
            if(el !== null) {
                el.setAttribute('style','transform:unset');
                el.setAttribute('data-fixed-by','fixDropdownMenuStyleParent()');
                window.setTimeout(function(){
                    el.setAttribute('style','transform:unset');
                    
                },1);
                
            }
        }

        function fixDropdownMenuStyleOnElement(el) {
            if(el !== null) {
                el.setAttribute('style','transform:unset;');
                el.setAttribute('data-fixed-by','fixDropdownMenuStyleOnElement()');
                window.setTimeout(function(){
                    el.setAttribute('style','transform:unset;');
                },10);
            }
        }

        var d0 = document.querySelector('#pkpDropdown0');
        var d1 = document.querySelector('#pkpDropdown1');
        var d1b = document.querySelector('#pkpDropdown1 > .task_count');

        var D0 = document.querySelector('#pkpDropdown0 .dropdown-menu');
        var D1 = document.querySelector('#pkpDropdown1 .dropdown-menu');
        
        /* on document load, the style is fixed */
        if(D0 != null) {
            fixDropdownMenuStyleOnElement(D0);
        }
        if(D1 != null) {
            fixDropdownMenuStyleOnElement(D1);
        }

        if (d0 != null) { d0.addEventListener('click', fixDropdownMenuStyle, false); }
        if (d1 != null) { d1.addEventListener('click', fixDropdownMenuStyle, false); }
        if (d1b != null) { d1b.addEventListener('click', fixDropdownMenuStyleParent, false); }
     
        
    }

    /* fix dropDownMenu style */
    dropDownMenuFixer();
}

window.addEventListener('load',master);