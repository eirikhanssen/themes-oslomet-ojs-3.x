# RERMThemePlugin

This theme is a descendant theme of MasterThemePlugin and default theme in OJS 3.2.1-2

The *C H I L D* theme is not intended to be used as active theme by a journal. Instead, use the script maketheme.py to create a new theme based on the *C H I L D* theme, that will inherit from master theme.

Note that to activate this theme, the default theme and master theme must also be activated in OJS because of dependency.

The language key: msgid "plugins.themes.master.header.html" in the language files such as "locale/en_US/locale.po" here is initially left blank.

If this theme overrides the language key "plugins.themes.master.header.html" with some html-content, then this html-content will be displayed within a link back to the journal's index page in the page header. This will allow for more customization of the journal page header from the language files.