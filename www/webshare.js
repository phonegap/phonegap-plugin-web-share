/* global cordova:false */
/* globals window, Promise */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

module.exports = function(sharedata) {
    return new Promise(function(resolve, reject) {
        var options = {
            subject: sharedata.title,
            message: sharedata.text,
            url: sharedata.url
        };
		if(sharedata.hasOwnProperty('title') ||
            sharedata.hasOwnProperty('text') ||
            sharedata.hasOwnProperty('url')) {
			window.plugins.socialsharing.shareWithOptions(options, resolve, reject);
		}
		else {
			reject();
		}
	});
};
