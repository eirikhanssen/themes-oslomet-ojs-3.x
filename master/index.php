<?php

/**
 * @defgroup plugins_themes_master Master theme plugin
 */
 
/**
 * @file plugins/themes/master/index.php
 *
 * Copyright (c) 2014-2020 Simon Fraser University
 * Copyright (c) 2003-2020 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @ingroup plugins_themes_master
 * @brief Wrapper for master theme plugin.
 *
 */

require_once('MasterThemePlugin.inc.php');

return new MasterThemePlugin();


