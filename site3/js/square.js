function calculate_squwere(){
	var a = $("#a").val();
	var b = $("#b").val();
	if(a!="" && b !=""){
	$("#answ").html(a*b*3.14);
	}else{
		
			$("#answ").html("");
	}
}