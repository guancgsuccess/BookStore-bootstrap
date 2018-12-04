function pageUp(){
	var arr1 = ["book10_nav.png","book8_nav.jpg","book9_nav.jpg"];
	var obj = document.getElementById("love");
	var imgs = obj.getElementsByTagName("img");
	for(var i=0;i<imgs.length;i++){
		imgs[i].src="images/"+arr1[i];
	}
}
			
function pageDown(){
	var arr2 = ["book2_nav.jpg","book3_nav.jpg","book4_nav.jpg"];
	var obj = document.getElementById("love");
	var imgs = obj.getElementsByTagName("img");
	
	for(var i=0;i<imgs.length;i++){
		imgs[i].src="images/"+arr2[i];
	}
}

function selectByCount(obj) {
	if(obj.value.trim() == "") {
		obj.value = 1;
	}
}