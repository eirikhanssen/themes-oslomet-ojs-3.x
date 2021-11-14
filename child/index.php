<?php

/**
 * @defgroup plugins_themes_child Child theme plugin
 */
 
/**
 * @file plugins/themes/child/index.php
 *
 * Copyright (c) 2014-2020 Simon Fraser University
 * Copyright (c) 2003-2020 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @ingroup plugins_themes_child
 * @brief Wrapper for child theme plugin.
 *
 */

require_once('ChildThemePlugin.inc.php');

return new ChildThemePlugin();


