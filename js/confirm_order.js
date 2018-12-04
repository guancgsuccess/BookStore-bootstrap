//显示更多地址...
function dispalyMoreAddr(obj){
	var addr = document.getElementById("address");
	var lis = addr.getElementsByTagName("li");
	for(var i=0;i<lis.length;i++){
		lis[i].className="list-group-item";
	}
	
	var div = document.getElementById("addrDiv");
	
	obj.style.display="none";
	
	var aa = document.getElementById("down");

	if(aa==null){
		var a = document.createElement("a");
		a.href="#";
		a.id="down";
		a.className="text-info";
		a.innerHTML="收起地址↑&nbsp;&nbsp;";
		
		div.appendChild(a);
		
		var adr = document.getElementById("addAddr");

		div.insertBefore(a,adr);
		
		
		a.onclick=function(){
			this.style.display="none";
			obj.style.display="inline";
			
			for(var i=4;i<lis.length;i++){
				lis[i].className="list-group-item hidden";
			}
		}
	}else{
		aa.style.display="inline";
	}
}
