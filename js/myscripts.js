// JavaScript Document

jQuery(document).ready(function(){
	$.ajax({
		url: 'js/data.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data) {
			$(data).each(function(index, value){
				var dob = new Date(value.birthday);
				var today = new Date();
				var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000) + 1);
				
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var fancydob = dob.getDate() + " of " + months[dob.getMonth()];
				
				$(".bdays-list").append('<li class="bday"><img src="'+value.photo+'" class="bday-photo" /><h3 class="bday-name">'+value.name+'</h3><p class="bday-fulldob">'+ fancydob +'</p><p class="bday-info">is turning <strong>'+ age +'</strong> on the next <strong>'+ fancydob +'</strong></p></li>');
			});
		}
	});
	
	
	// Name filter
	$.expr[':'].Contains = function(a,i,m){
	  	return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
	};

	function listFilter(list) {

		$("#searchbox").change(function() {
			var filter = $(this).val();
			if(filter) {
			  	$(list).find("h3:not(:Contains(" + filter + "))").parent().slideUp();
			  	$(list).find("h3:Contains(" + filter + ")").parent().slideDown();
			} else {
			  	$(list).find("li").slideDown();
			}
			return false;
		}).keyup(function() {
			$(this).change();
		});
	}

	$(function() {
		listFilter($(".bdays-list"));
	});
	
	
	
	// Modal window control
	$("#addbdays").click(function(){
		$("#bdays-form-wrapper").fadeIn("fast");
	});
	$("#close-form").click(function(){
		$("#bdays-form-wrapper").fadeOut("fast");
	});
	
	
	// Add birthday function
	
	$("#submit").click(function(){
		var fullname = $("#fullname").val();
		var dob = $("#dob").val();
		dob = new Date(dob);

		var today = new Date();
		var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000) + 1);

		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var fancydob = dob.getDate() + " of " + months[dob.getMonth()];
		var fulldob = fancydob + ",  " + dob.getYear();

		$(".bdays-list").append('<li class="bday"><img src="https://placehold.it/250x250" class="bday-photo" /><h3 class="bday-name">'+fullname+'</h3><p class="bday-fulldob">'+ fulldob +'</p><p class="bday-info">is turning <strong>'+ age +'</strong> on the next <strong>'+ fancydob +'</strong></p></li>');
		
		$("#bdays-form-wrapper").fadeOut("fast");
	});
});