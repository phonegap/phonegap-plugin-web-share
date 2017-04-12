/* global cordova:false */
/* globals window */

var exec = require('cordova/exec'),
    utils = require('cordova/utils');

//var eddy = require('eddy-share');



module.exports = function(sharedata) {

	 var p = new Promise(function(resolve, reject) {

	// 		//resolve if user chooses a target app and reject if any condition not met

	// 		//sample scenario to validate tests

			if(sharedata.hasOwnProperty("title") || sharedata.hasOwnProperty("text") || sharedata.hasOwnProperty("url"))
			{
				resolve();
			}
			else{
				reject();
			}

	 )};

	
	return p;
}
