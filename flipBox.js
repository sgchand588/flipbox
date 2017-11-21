function rotateBox(rotation,Box){
	
	if(rotation == right|down){
		rotateBoxForward(Box,rotation);
	}
	else {
		rotateBoxBackward(Box,rotation);
	}
}
function rotateBoxForward(Box,rotate) {
	var i;
	for(i= 0; i<180;i+=10){
		if(rotate == right|left){
			Box.style.transform = "'rotateX('+i+'deg'+')'";
		}
		else {
			Box.style.transform = "'rotateY('+i+'deg'+')'";
		}
	}
}
function rotateBoxBackward(Box,rotate) {
	var i;
	for(i= 180; i<0;i-=10){
		if(rotate == right){
			Box.style.transform = "'rotateX('+i+'deg'+')'";
		}
		else {
			Box.style.transform = "'rotateY('+i+'deg'+')'";
		}
	}
	
}
function getRotationType(event){
	var rotationtype = event.target.id;
	var Box = document.getElementById("flipBox");
	console.log("now rotatingbox");
	
	window.rotateBox(rotationtype,Box);
	
}