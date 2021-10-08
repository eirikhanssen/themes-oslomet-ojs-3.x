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
            document.querySelector('.dropdown-menu[aria-labelledby=' + e.target.id + ']').setAttribute('style','top:100%');
        }
        var d0 = document.querySelector('#pkpDropdown0');
        var d1 = document.querySelector('#pkpDropdown1');
        
        if (d0 != null) { d0.addEventListener('click', fixDropdownMenuStyle, false); }
        if (d1 != null) { d1.addEventListener('click', fixDropdownMenuStyle, false); }
    }
    /* run the function */
    dropDownMenuFixer();
}

window.addEventListener('load',master);