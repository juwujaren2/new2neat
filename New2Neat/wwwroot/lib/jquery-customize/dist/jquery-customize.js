/*
    Description: 	Contact Framework
    Author: 		Insidelabdev
    Version: 		1.0
*/

/*	--------------------------------------------------
	:: Contact Widget Validation
	-------------------------------------------------- */
	
	$(document).ready(function(){
		var bar = $('.contact-widget-bar');
		var percent = $('.contact-widget-percent');
		$('#contact-widget').validate({
			normalizer: function(value) {
				return $.trim(value);
			},
			errorClass:'contact-widget-error',
			validClass:'contact-widget-success',
			errorElement:'div',	
			highlight: function(element, errorClass, validClass) {
				var elements = $(element);
				if (elements.attr('name') === 'contact-widget-rservice1') {
				    elements = $('input[name="contact-widget-rservice1"]');
				    elements = elements.add(elements.next());
				} 
				if (elements.attr('name') === 'contact-widget-rsupport1') {
					elements = $('input[name="contact-widget-rsupport1"]');
				    elements = elements.add(elements.next());
				} 
				if (elements.attr('name') === 'contact-widget-rproduct1') {
					elements = $('input[name="contact-widget-rproduct1"]');
				    elements = elements.add(elements.next());
				} 
				elements.closest('.contact-widget-group').addClass(errorClass).removeClass(validClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var elements = $(element);
				if (elements.attr('name') === 'contact-widget-rservice1') {
				    elements = $('input[name="contact-widget-rservice1"]');
				    elements = elements.add(elements.next());
				} 
				if (elements.attr('name') === 'contact-widget-rsupport1') {
					elements = $('input[name="contact-widget-rsupport1"]');
				    elements = elements.add(elements.next());
				} 
				if (elements.attr('name') === 'contact-widget-rproduct1') {
					elements = $('input[name="contact-widget-rproduct1"]');
				    elements = elements.add(elements.next());
				} 
				elements.closest('.contact-widget-group').removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function (error, element) {
				if (element.is(":checkbox")) {
					element.closest('.contact-widget-checkbox-group').after(error);
					element.closest('.contact-widget-checkbox-toggle-group').after(error);
			    } else if (element.is(":radio")) {
					element.closest('.contact-widget-radio-group').after(error);
					element.closest('.contact-widget-radio-toggle-group').after(error);
					element.closest('.contact-widget-rating').after(error);
			    } else {
					error.insertAfter(element.parent());
			    }
			},
			submitHandler:function(form) {
				jQuery(form).ajaxSubmit({
					target:'#contact-widget-notification',
					beforeSubmit:function(){ 
						var percentVal = '0%';
						bar.width(percentVal);
						percent.html(percentVal);
						$('.contact-widget-progress-container').fadeIn();
						$('input').attr('disabled', 'disabled');
						$('textarea').attr('disabled', 'disabled');
						$('select').attr('disabled', 'disabled');
						$('#contact-widget-button').attr('disabled', 'disabled');
						$('#reset-widget-button').attr('disabled', 'disabled');					
					},
					uploadProgress: function(event, position, total, percentComplete) {
						var percentVal = percentComplete + '%';
						bar.width(percentVal)
						percent.html(percentVal);
					},
					success:function(){  
						var percentVal = '100%';
						bar.width(percentVal);
						percent.html(percentVal);
						$('.contact-widget-progress-container').fadeIn(500).delay(4000).fadeOut();
						$('input').removeAttr('disabled'); 
						$('textarea').removeAttr('disabled');
						$('select').removeAttr('disabled'); 
						$('#contact-widget-button').removeAttr('disabled'); 
						$('#reset-widget-button').removeAttr('disabled');
						$('#contact-widget-notification').fadeIn(500);
						$('#contact-widget').each(function(){
							this.reset();
						});
					}
				});
			}
		});
	});
    
/*	--------------------------------------------------
	:: Contact Widget Placeholder
	-------------------------------------------------- */
	
	$(document).ready(function(){
		$('input, textarea').placeholder();
	});
	
/*	--------------------------------------------------
	:: Contact Widget Multiple Files
	-------------------------------------------------- */
	
	$(document).on('change', '.contact-widget-upload-group :file', function() {
		var input = $(this),
		numFiles = input.get(0).files ? input.get(0).files.length : 1,
		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});
    
	$(document).ready( function() {
		$('.contact-widget-upload-group :file').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.contact-widget-upload-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
			
			if(input.length) {
				input.val(log);
			}
		});
	});