// JavaScript Document

jQuery(document).ready(function(){
	$.ajax({
		url: 'js/data.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data) {
			$(data).each(function(index, value){				
				$(".bdays-list").append('<li class="bday"><img src="'+value.photo+'" class="bday-photo" /><h3 class="bday-name">'+value.name+'</h3><p class="bday-fulldob">1 of January, 81</p><p class="bday-info">is turning <strong>37</strong> on the next <strong>1 of January</strong></p></li>');
			});
		}
	});
});