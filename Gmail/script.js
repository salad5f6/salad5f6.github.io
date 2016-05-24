

// code cho forrm	
	$('#form-register').on('submit',function(){

		var valid = true;


		if($('#name').val().trim() !== ''){
			$('#name').next('span').text('');
			valid;
		} 	else { $('#name').next('span').text('empty name sir');
		valid = false;
	}

	if($('#email').val().match(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/) !== null ){
		$('#email').next('span').text('');
		valid;
	} 	else { $('#email').next('span').text('invalid email');
	valid = false;
}

if($('#phone').val().match(/^[0]{1}[19]{1}[0-9]{8,9}$/) ){
	$('#phone').next('span').text('');
	valid;
} else { $('#phone').next('span').text('invalid phone number');
valid = false; 
}

if($('#password').val().match(/^.{4,8}$/) ){
	$('#password').next('span').text('');
	valid;
} else { $('#password').next('span').text(' invalid password: 4 - 8 characters allowed');
valid = false;
}
return valid;
});
// done



