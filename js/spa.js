/*
	* spa.js
	* Root namespace module
*/

/*jslint 							browser : true, 	continue 	: true,
		devel		: true, 	indent 	: 2, 			maxerr 		: 50,
		newcap 	: true, 	nomen 	: true, 	plusplus 	: true, 
		regexp 	: true, 	sloppy 	: true, 	vars 			: true,
		white 	: true 
*/
/*global $, spa */

var spa = (function () {
	var initModule = function($container){
		//housekeeping here
		//if we needed to configure the shell,
		//we would invoke spa.shell.configModule first
		spa.shell.initModule($container);
	};
	return { 
		initModule: initModule
	};
}());