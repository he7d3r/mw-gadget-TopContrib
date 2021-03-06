/*
 * This script color-codes lines according to who has the top contribution for a page.
 * @source: [[w:en:User:Ais523/topcontrib.js]]
 * @author: [[w:en:User:Ais523]]
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';
	function updateList() {
		var a = {};
		mw.util.$content.find( 'li' ).each( function () {
			var $this = $(this),
				link, s, t, match;
			link = $this.find( '.mw-contributions-title' ).attr( 'href' );
			match = link.match( /\/wiki\/([^"]*)/ );
			if ( !match ) {
				match = link.match(/\/w\/index.php\?title=([^"]*)&redirect=no/);
			}
			t = match[1];
			if ( $this.find( 'strong' ).length ) {
				// This is the latest edit
				s = '#CCF';
			} else {
				s = '#FCC';
			}
			if ( a[t] !== undefined ) {
				s = a[t] === '#CCF' ? '#CFF' : '#FFC';
			} else {
				a[t] = s;
			}
			$this.wrapInner('<span style="background:' + s + '" />');
		} );
	}
	if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Contributions' ) {
		mw.loader.using( 'mediawiki.util', function () {
			$( updateList );
		} );
	}

}( mediaWiki, jQuery ) );
