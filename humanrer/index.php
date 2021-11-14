<?php

/**
 * @defgroup plugins_themes_humanrer Humanrer theme plugin
 */
 
/**
 * @file plugins/themes/humanrer/index.php
 *
 * Copyright (c) 2014-2020 Simon Fraser University
 * Copyright (c) 2003-2020 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @ingroup plugins_themes_humanrer
 * @brief Wrapper for humanrer theme plugin.
 *
 */

require_once('HumanrerThemePlugin.inc.php');

return new HumanrerThemePlugin();


