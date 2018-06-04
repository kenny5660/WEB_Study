function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min ) + parseInt(min, 10));
}

function  getArray(n) {
  var arr = [];
	var min = $("#rand_min").val();
	var max = $("#rand_max").val();
	if(min=="" || max==""){
		alert("emty min or max");
		return;
	}
  for (var i=0;i<n;i++) {
     arr[i] = getRandomInt(min,max);
  }

  return arr;
}

function getResultArray(a){
	var result_arr = [];
	a.sort(function(a,b){return b-a;});
	var n= Math.sqrt(a.length);
	for(var i = n-1;i>=0;i--){
		result_arr[i] = [];
		if((i%2) == (n%2)){
			for(var j = 0; j<n;j++){
					result_arr[i][j] = a[i*n+j];
			}
		}
		else{
			for(var j = n-1; j>=0;j--){
					result_arr[i][(n-1)-j] = a[i*n+j];
			}
		}
	}
	return result_arr;
}

function calculate_matrix(){
	var n = $("#size_matrix").val();
	if(n==""){
	alert("empty size");
		return;	
	}
	var result_arr = getResultArray(getArray(n*n));
	
	var result ="<table>";
	for(var i = 0;i<n;i++){
		result += "<tr>";
		for(var j = 0; j<n;j++){
			result += "<td>"+result_arr[i][j];
			result += "</td>"
	    }
		result += "</tr>";
	}
	result +="</table>";
		$("#matrix_result").html(result);
}