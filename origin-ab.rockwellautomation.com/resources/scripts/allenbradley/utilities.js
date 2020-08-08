// Last Mod 28-Oct-18 by BM: added PREFERENCES CHECK, removed SEARCH AS YOU TYPE
// Prev Mod 08-Jan-14 by BM: removed 100TH ANNIVERSARY
// Prev Mod 09-Dec-13 by BM: fixed TOGGLE, added GET-SMART-CONTENT, added ANONYMOUS TRACKING


//BEGIN COOKIE CLEAN-UP
Delete_Cookie( "ra-md-accesstoken", "/", ".rockwellautomation.com" );
Delete_Cookie( "ra-md-refreshtoken", "/", ".rockwellautomation.com" );
//END COOKIE CLEAN-UP


//BEGIN GET COOKIE FUNCTION
function grabCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
//END GET COOKIE FUNCTION


// BEGIN ANONYMOUS TRACKING
_bizo_data_partner_id = "5462";
(function() {
	var s = document.getElementsByTagName("script")[0];
	var b = document.createElement("script");
	b.type = "text/javascript";
	b.async = true;
	b.src = (window.location.protocol === "https:" ? "https://sjs" : "http://js") + ".bizographics.com/insight.min.js";
	s.parentNode.insertBefore(b, s);
})();
// END ANONYMOUS TRACKING


//BEGIN ALTERNATE TABLE ROW HIGHLIGHT
$(document).ready(function(){
    $('div.familytypetabcontent table tbody tr:nth-child(even)').addClass('even');
});
//END ALTERNATE TABLE ROW HIGHLIGHT


//BEGIN BAD LINK
function reportlink(code) {
	var to = 'RAWebContact@ra.rockwell.com';
	var subject = null;
	switch (code) {
		case 401: subject = '401-Web Page Authorization Required'; break;
		case 403: subject = '403-Forbidden Web Page or Directory'; break;
		case 404: subject = '404-Web Page Not Found'; break;
		case 405: subject = '405-Website Method Not Allowed'; break;
		case 408: subject = '408-Website Request Timeout'; break;
		case 500: subject = '500-Website Experiencing Internal Server Error'; break;
		case 501: subject = '501-Request Not Implemented'; break;
		case 502: subject = '502-Server Experiencing Bad Gateway'; break;
		case 503: subject = '503-Website Service unavailable'; break;
		default: subject = 'Unexpected Error';
	}
	var badURL = window.location.href;
	var from = document.referrer;
	var message1 = 'I would like to report a ' + code + ' error on this page:  ' + badURL;
	var message2 = 'I linked to this page from:  ' + from;
	var message3 = 'Thank you for addressing this matter in a timely fashion.';
	if (from != "") {
		var ad = 'mailto:' + to + '?subject=' + subject + '&body=Dear Webmaster:%0a' + message1 + '.%0a' + message2 + '.%0a' + message3;
	} else {
		var ad = 'mailto:' + to + '?subject=' + subject + '&body=Dear Webmaster:%0a' + message1 + '.%0a' + message3;
	}
	document.location = ad ; 
}
//END BAD LINK


//BEGIN TOGGLE
function toggle(el) {
	myEl = document.getElementById(el);
	myEl.style.display = (myEl.style.display == 'block') ? 'none' : 'block';
}
// showSection function. designed to be run at body.onload.
// toggles div(s) referenced by # in URL. if multiple divs targeted, separate by -s. eg. #div1-div2-div3
function opentoggle() {
	var loc = window.location.href;
	if (loc.lastIndexOf('#') != -1) {
		var section = loc.substring(loc.lastIndexOf('#')+1);
		var secs = section.split('-');
		if (secs.length > 1) {
			for (var i = 0; i < secs.length; i++ ){ toggle(secs[i]); }
		} else {
			toggle(section);
		}
	}
	window.attachEvent('onload', toggle);
}
//END TOGGLE
