<?php

/**
 * @file plugins/themes/master/MasterThemePlugin.inc.php
 *
 * Copyright (c) 2014-2021 Simon Fraser University
 * Copyright (c) 2003-2021 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @class MasterThemePlugin
 * @ingroup plugins_themes_master
 *
 * @brief Master theme
 */

import('lib.pkp.classes.plugins.ThemePlugin');

class MasterThemePlugin extends ThemePlugin {
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
		$this->setParent('defaultthemeplugin');
		$this->modifyStyle('stylesheet', array('addLess' => array('styles/index.less')));
		$this->addScript('svgxuse', 'js/svgxuse.min.js');
		$this->addScript('master', 'js/master.js');
		$this->addStyle('mediaelementcss', 'js/mediaelement/mediaelementplayer.min.css');
		$this->addStyle('lightboxcss', 'lib/lightbox2-2.11.3/dist/css/lightbox.min.css');
		$this->addScript('mediaelementjs', 'js/mediaelement/mediaelement.min.js');
		$this->addScript('opendetailsidjs','js/open_details_id.js');
		$this->addScript('lightboxdistjs','lib/lightbox2-2.11.3/dist/js/lightbox.js');
		$this->addScript('lightboxcustomjs','js/lightboxcustom.js');
		$this->addScript('faqjs','js/faq.js');
		$this->addStyle('masterbackend', 'styles/backend.less', array('contexts' => 'backend'));
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
		return __('plugins.themes.master.name');
	}

	/**
	 * Get the description of this plugin
	 * @return string
	 */
	function getDescription() {
		return __('plugins.themes.master.description');
	}
}
