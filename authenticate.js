$(function () {
		var extractToken = function(hash) {
			var match = hash.match(/access_token=(\w+)/);
			return !!match && match[1];
		};

		var setting = {
			'host': "tradestation.com/v2",
			'apiKey': "your key goes here",
			'environment': "SIM"
		};
		
		var host;
		if (setting.environment == "SIM") {
			host = "https://sim.api." + setting.host;
		} else if (setting.environment == "PROD") {
			host = "https://api." + setting.host;
		}
		
		var endUserAuthorizationEndpoint = host + "/authorize";		
		var token = extractToken(document.location.hash);

		if (token) {
			$('div.authenticated').show();
			$('span.token').text(token);
			$.get(host + '/data/quote/YHOO?oauth_token=' + token, function(data) {
				$('span.quote').text(data[0].Description);
			}, "json");
		} else {
			$('div.authenticate').show();

			var authUrl = endUserAuthorizationEndpoint +
				"?response_type=token" +
				"&client_id=" + setting.apiKey +
				"&redirect_uri=" + window.location;

			$("a.authenticate").attr("href", authUrl);
		}
})
