/*
 * This script color-codes lines according to who has the top contribution for a page.
 * @source: [[w:en:User:Ais523/topcontrib.js]]
 * @author: [[w:en:User:Ais523]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/topcontrib.js]] ([[File:User:Helder.wiki/Tools/topcontrib.js]])
 */
if (mw.config.get('wgCanonicalSpecialPageName') === 'Contributions') {
	$(function () {
		var i, li, a;
		li = mw.util.$content.find('li');
		i = -1;
		a = [];
		while (++i < li.length) {
			var s, t;
			var html = li[i].innerHTML;
			var match = html.match(/"\/wiki\/([^"]*)"/);
			if (!match) {
				match = html.match(/"\/w\/index.php\?title=([^"]*)&amp;redirect=no"/);
			}
			t = match[1];
			if (li[i].getElementsByTagName('strong').length > 0) {
				s = "#CCCCFF";
			} else {
				s = "#FFCCCC";
			}
			if (a[t] !== undefined) {
				s = (a[t] == "#CCCCFF" ? "#CCFFFF" : "#FFFFCC");
			} else {
				a[t] = s;
			}
			li[i].innerHTML = "<SPAN STYLE='background-color:" + s + "'>" + li[i].innerHTML + "</SPAN>";
		}
	});
}