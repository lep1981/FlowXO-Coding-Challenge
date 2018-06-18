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
});