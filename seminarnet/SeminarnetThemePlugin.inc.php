<?php

/**
 * @file plugins/themes/seminarnet/SeminarnetThemePlugin.inc.php
 *
 * Copyright (c) 2014-2021 Simon Fraser University
 * Copyright (c) 2003-2021 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @class SeminarnetThemePlugin
 * @ingroup plugins_themes_seminarnet
 *
 * @brief Seminarnet theme
 */

import('lib.pkp.classes.plugins.ThemePlugin');

class SeminarnetThemePlugin extends ThemePlugin {
	/**
	 * @copydoc ThemePlugin::isActive()
	 */
	public function isActive() {
		if (defined('SESSION_DISABLE_INIT')) return true;
		return parent::isActive();
	}

	/**
	 * Initialize the theme's styles, scripts and hooks. This is run on the
	 * currently active theme and it's parent themes.
	 *
	 * @return null
	 */
	public function init() {
		AppLocale::requireComponents(LOCALE_COMPONENT_PKP_MANAGER, LOCALE_COMPONENT_APP_MANAGER);
		$this->setParent('masterthemeplugin');
		$this->modifyStyle('stylesheet', array('addLess' => array('styles/index.less')));
		$this->addStyle('seminarnetbackend', 'styles/backend.less', array('contexts' => 'backend'));
		//$this->addScript('seminarvideoabstracts', 'js/seminar.net-videoabstracts-2022-04-27.js'); // previous version
		//$this->addScript('seminarvideoabstracts', 'js/seminar.net-videoabstracts-2022-07-01.js'); // previous version
		$this->addScript('seminarvideoabstracts', 'js/seminar.net-videoabstracts-2023-vol19-no2.js?v=2024-02-12-1049');

	}

	/**
	 * Get the name of the settings file to be installed on new journal
	 * creation.
	 * @return string
	 */
	function getContextSpecificPluginSettingsFile() {
		return $this->getPluginPath() . '/settings.xml';
	}

	/**
	 * Get the name of the settings file to be installed site-wide when
	 * OJS is installed.
	 * @return string
	 */
	function getInstallSitePluginSettingsFile() {
		return $this->getPluginPath() . '/settings.xml';
	}

	/**
	 * Get the display name of this plugin
	 * @return string
	 */
	function getDisplayName() {
		return __('plugins.themes.seminarnet.name');
	}

	/**
	 * Get the description of this plugin
	 * @return string
	 */
	function getDescription() {
		return __('plugins.themes.seminarnet.description');
	}
}
