/*
    Description: 	Hover Effects Framework
    Author: 		Insidelabdev
    Version: 		2.0
*/

/*	--------------------------------------------------
	:: HOVER EFFECTS MODAL CUSTOMIZER
	-------------------------------------------------- */
    
	$(document).ready( function () {
		$('a[data-rel^=lightcase]').lightcase({
			showTitle:false,
			showCaption:false,
			showSequenceInfo:false,
			transition:'elastic'
		});
	});