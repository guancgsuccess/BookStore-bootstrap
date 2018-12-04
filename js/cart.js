$(function() {
	//每过2秒钟进行一次轮播
	$('#myCarousel').carousel({
		interval: 2000
	});
});

//实现全选功能
function selectAll(obj) {
	//获取所有的checkbox
	var cks = document.getElementsByName("cks");
	if(obj.checked) {
		for(var i = 0; i < cks.length; i++) {
			cks[i].checked = true;
		}
	} else {
		for(var i = 0; i < cks.length; i++) {
			cks[i].checked = false;
		}
	}
}

//删除按钮
function del() {
	//获取first_del
	var fd = document.getElementById("first_del");
	var td = document.getElementById("two_del");
	td.style.display = "none";
	fd.style.display = "none";
	//判断是否选择了商品
	var count = 0;
	//获取所有的checkbox
	var cks = document.getElementsByName("cks");
	//遍历
	for(var i = 0; i < cks.length; i++) {
		if(cks[i].checked) {
			count++;
		}
	}
	if(count == 0) {
		fd.style.display = "block";
	} else {
		td.style.display = "block";
	}
}

//显示条数
function displaySize(obj) {
	var num = parseInt(obj.value);
	//获取所有的tables
	var trs = document.getElementsByTagName("tr");

	for(var i = 2; i < trs.length - 1; i++) {
		trs[i].className = "";
	}

	//去掉前两行说明和最后一行.下标是从2-trs.length-1结束.
	for(var i = num + 2; i <= trs.length - 3; i++) {
		trs[i].className = "hidden";
	}
}

//修改数量
function changeNum() {
	var trs = document.getElementById("tby").getElementsByTagName("tr");

	for(var i = 0; i < trs.length; i++) {
		var td = trs[i].getElementsByTagName("td")[5];
		td.onclick = function() {

			var reg = /^[0-9]+$/;

			var oldValue = this.innerHTML;
			var to = this;

			if(!reg.test(oldValue)) {
				return;
			}

			this.innerHTML = "<div class='input-group' style='width: 105px;'>" +
				"<span class='input-group-btn'>" +
				"<button class='btn btn-default' type='button'>-</button>" +
				"</span><input type='text' class='form-control' value='" + oldValue + "'><span class='input-group-btn'>" +
				"<button class='btn btn-default' type='button'>+</button>" +
				"</span>" +
				"</div>";

			this.onclick = "";

			var inp = this.getElementsByTagName("input")[0];
			var bt = this.getElementsByTagName("button")[0];
			var btn = this.getElementsByTagName("button")[1];

			inp.onclick = function(event) {
				var e = window.evnet || event;
				if(window.event) {
					e.cancelBubble = true;
				} else {
					//e.preventDefault(); //在基于firefox内核的浏览器中支持做法stopPropagation
					e.stopPropagation();
				}
				this.select();
			}

			bt.onclick = function(event) {
				var e = window.evnet || event;
				if(window.event) {
					e.cancelBubble = true;
				} else {
					//e.preventDefault(); //在基于firefox内核的浏览器中支持做法stopPropagation
					e.stopPropagation();
				}

				inp.value = parseInt(inp.value.trim()) - 1 <= 0 ? 0 : parseInt(inp.value.trim()) - 1;
			}

			btn.onclick = function(event) {
				var e = window.evnet || event;
				if(window.event) {
					e.cancelBubble = true;
				} else {
					//e.preventDefault(); //在基于firefox内核的浏览器中支持做法stopPropagation
					e.stopPropagation();
				}
				inp.value = parseInt(inp.value.trim()) + 1;
			}

			//inp.select();
			inp.onblur = function() {
				var n = this.value.trim();
				if(!reg.test(n)) {
					n = oldValue;
				}

				to.innerHTML = n;
				to.onclick = changeNum;
			}

			inp.onkeydown = function(event) {
				var e = window.event || event;
				if(e.keyCode == 13) {
					var n = this.value.trim();
					if(!reg.test(n)) {
						n = oldValue;
					}

					to.innerHTML = n;
					to.onclick = changeNum;
				}
			}
		}
	}
}

//删除任意行
function delRows(obj){
	var cks = document.getElementsByName("cks");
	var tby = document.getElementById("tby");
	for(var i=cks.length-1;i>=0;i--){
		if(cks[i].checked){
			tby.removeChild(cks[i].parentNode.parentNode);
		}
	}
	//调用关闭按钮的单击事件
	obj.previousElementSibling.click();
}
