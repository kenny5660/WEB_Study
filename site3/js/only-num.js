$(document).ready(function() {
$(".only_num").bind("change keyup input click", function() {
	if (this.value.match(/[^0-9\.]/g)) {
this.value = this.value.replace(/[^0-9\.]/g, '');
}
});
});