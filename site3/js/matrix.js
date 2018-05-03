function random_matrix(){
	$(".matrix input").each(function(indx, element){
		$(element).val(Math.floor(Math.random()*1000));
});
}
function calculate_matrix(){
	const row = 5;
	const col = 7;
	var inputs = $(".matrix input");
	var m = [];
	 for (var i=0;i<col;i++) {
		m[i] = [];
	}
	for(var i = 0;i<row;i++){
		for(var j = 0; j<col;j++){
			var value  = $(inputs[i*col+j]).val();
			if(value!=""){
				m[j][i] = value;
			}
			else{
				alert("exist empty fields");
				return;
			}			
		}
	}
	for(var i = 0;i<col;i++){
		m[i].sort(function(a,b){
							return a-b;
						});
	}
	var result ="<table>";
	for(var i = 0;i<row;i++){
		result += "<tr>";
		for(var j = 0; j<col;j++){
			result += "<td>"+m[j][i];
			result += "</td>"
	    }
		result += "</tr>";
	}
	result +="</table>";
		$("#matrix_result").html(result);
}