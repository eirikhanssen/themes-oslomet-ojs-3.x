{**
 * templates/frontend/components/footer.tpl
 *
 * Copyright (c) 2014-2020 Simon Fraser University
 * Copyright (c) 2003-2020 John Willinsky
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @brief Common site frontend footer.
 *
 * @uses $isFullWidth bool Should this page be displayed without sidebars? This
 *       represents a page-level override, and doesn't indicate whether or not
 *       sidebars have been configured for thesite.
 *}
{strip}
        {if $currentJournal && $currentJournal->getSetting('onlineIssn')}
                {assign var=onlineIssn value=$currentJournal->getSetting('onlineIssn')}
                {assign var=footerIssnPrefix value='ISSN: '}
                {assign var=footerISSN value="`$footerIssnPrefix``$onlineIssn`"}
        {elseif $currentJournal && $currentJournal->getSetting('printIssn')}
                {assign var=printIssn value=$currentJournal->getSetting('printIssn')}
                {assign var=footerIssnPrefix value='ISSN (print): '}
                {assign var=footerISSN value="`$footerIssnPrefix``$printIssn`"}
        {/if}
{/strip}
	</div><!-- pkp_structure_main -->

	{* Sidebars *}
	{if empty($isFullWidth)}
		{capture assign="sidebarCode"}{call_hook name="Templates::Common::Sidebar"}{/capture}
		{if $sidebarCode}
			<div class="pkp_structure_sidebar left" role="complementary" aria-label="{translate|escape key="common.navigation.sidebar"}">
				{$sidebarCode}
			</div><!-- pkp_sidebar.left -->
		{/if}
	{/if}
</div><!-- pkp_structure_content -->

<div class="pkp_structure_footer_wrapper" role="contentinfo">
	<a id="pkp_content_footer"></a>

	<footer class="pkp_structure_footer">
	{if $footerISSN}<p class="issn">{$footerISSN}</p>{/if}
		<div class="columns">
		    {if $pageFooter}{$pageFooter}{/if}			
			<div class="column">
				<h1>{translate|escape key="plugins.themes.master.hostedby.heading"}</h1>
				<div class="inst-branding oslomet">
					<p><a class="logotext" href="{translate|escape key="plugins.themes.master.hostedby.url"}" target="_blank" rel="noopener">{translate|escape key="plugins.themes.master.hostedby.name"}</a></p>
					<div class="info">
						<p><a href="{translate|escape key="plugins.themes.master.cookieinfo.url"}">{translate|escape key="plugins.themes.master.cookieinfo.linktext"}</a></p>
					</div><!-- .info -->
				</div><!-- .column.inst-branding -->
			</div><!-- .column -->
		</div><!-- columns -->
	</footer>
</div><!-- pkp_structure_footer_wrapper -->

</div><!-- pkp_structure_page -->

{load_script context="frontend"}

{call_hook name="Templates::Common::Footer::PageFooter"}
</body>
</html>
