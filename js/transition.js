$(document).ready(function() {
	
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    
	$("a.transicion").click(function(event){
		event.preventDefault();
		linkDestino = this.href;
		$("body").fadeOut(1000, redireccionarPag);		
	});
		
	function redireccionarPag() {
		window.location = linkDestino;
	}
	
});