function calculate_sum(){
	var X = $("#X").val();
	if(X!="" && X <1){
		X *=X;
		var E = 0.0005;
		var sum = 0;
		for(var i = 2; X/i > E;i+=4){
			sum += X/i;
		}
	
		$("#answ").html(sum);
	}
	else{	
			$("#answ").html("");
	}
}