// ==UserScript==
		method: 'POST',
		url: 'http://lyrictracker.com/soap.php',
		onload: function(responseDetails) {
			var xmlDoc = (new DOMParser()).parseFromString(responseDetails.responseText, 'application/xhtml+xml');
				method: 'POST',
				url: 'http://lyrictracker.com/soap.php',
				onload: function(responseDetails) {
			});
		}
	});