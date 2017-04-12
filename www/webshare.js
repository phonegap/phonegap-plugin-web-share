/* global cordova:false */
/* globals window, Promise */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

//var eddy = require('eddy-share');



module.exports = function(sharedata) {

	 var p = new Promise(function(resolve, reject) {

	// 		//resolve if user chooses a target app and reject if any condition not met

	// 		//sample scenario to validate tests

			if(sharedata.hasOwnProperty('title') ||
                sharedata.hasOwnProperty('text') ||
                sharedata.hasOwnProperty('url')) {
				resolve();
			}
			else {
				reject();
			}

	 });


	return p;
};
