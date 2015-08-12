/**
 * Copyright @ InRuan 
 */


IR = {
	
};
Date.prototype.format = function(format){ 
	var o = { 
		"M+" : this.getMonth()+1, //month 
		"d+" : this.getDate(), //day 
		"h+" : this.getHours(), //hour 
		"m+" : this.getMinutes(), //minute 
		"s+" : this.getSeconds(), //second 
		"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
		"S" : this.getMilliseconds() //millisecond 
	};

	if(/(y+)/.test(format)) { 
		format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	}

	for(var k in o) {
		if(new RegExp("("+ k +")").test(format)) { 
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
		}
	}
	return format; 
};
+function (B, $){
	B.log = function(log){
		console.log(log);
	};
	B.msg = function(msg){
		B.log(msg);
	};
	B.defdata = function(defdata, newdata){
		for(var k in newdata){
			if(typeof(defdata[k])!="undefine"){
				defdata[k] = newdata[k];
			}
		}
		return defdata;
	};
	B.renderstr = function(tpl, data){
		var str = tpl;
		for(k in data){
			var v = data[k];
			var tk = "{"+k+"}";
			if(str.indexOf(tk)>=0){
				str = str.replace(new RegExp(tk, "gm"), v);
			}
		}
		return str;
	};
	B.back = function(){
		history.go(-1);
	};
}(IR, jQuery);