<?php

/**
 * @defgroup plugins_themes_seminarnet Seminarnet theme plugin
 */
 
/**
 * @file plugins/themes/seminarnet/index.php
 *
 * Copyright (c) 2014-2020 Simon Fraser University
 * Copyright (c) 2003-2020 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @ingroup plugins_themes_seminarnet
 * @brief Wrapper for seminarnet theme plugin.
 *
 */

require_once('SeminarnetThemePlugin.inc.php');

return new SeminarnetThemePlugin();


