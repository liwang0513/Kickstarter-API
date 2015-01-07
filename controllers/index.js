var request = require("request");
var cheerio = require("cheerio");
var base = "https://www.kickstarter.com"

var routes = {
	"/"(req, res, next) {
		// Render the view found at /views/index.html.
		res.view("index");
	},
	
	"/projects/search/:term"(req, res, next, term) {
		
		request({
			method: "GET",
			url: `${base}/projects/search.json?term=${term}`,
			json: true
		}, function(err, response, body) {
			console.log(err);
			res.json(body);
		});
		
	},
	
	"/categories"(req, res, next) {
		
		
	}
};

module.exports = routes;
