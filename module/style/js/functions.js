// JavaScript Document
/**
 * 获得location中的参数
 */
function getQueryStringArgs(){
	var qs=(location.search.length>0?location.search.substring(1):''),
	args={},
	//取得每一项
	items=qs.length?qs.split('&'):[],
	item=null,
	name=null,
	value=null,
	i=0,
	len=items.length;
	
	for(i=0;i<len;i++){
		item=items[i].split("=");
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
		
		if(name.length){
			args[name]=value;
		}
	}
	
	return args;
}

function getNowFormatDate() {
    var date = new Date();
	
	var year = date.getFullYear();
    var month = date.getMonth() + 1;
	var d = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
    
	if(month<10){
		month = "0" + month;
	}
	
	if(d<10){
		d = "0" + d;
	}
	
	if(hour<10){
		hour = "0" + hour;
	}
	
	if(minute<10){
		minute = "0" + hour;
	}
	
	if(second<10){
		second = "0" + second;
	}
	
    return year + "-" + month + "-" + d + " " +hour + ":" + minute + ":" + second;
}

/**
 * check the type of inputs.
 *
 * @param string $str
 *        	inputs
 * @param string $type
 *        	type
 * @example check_type('13000000000','mobilephone')
 */
function checkType($str, $type) {
	var regExp=new RegExp(getPregExpression ( $type ));
	return regExp.test($str);
}

/**
 * This function returns a regular expression pattern for commonly used
 * expressions
 * Use with / as delimiter for email mode and # for url modes
 * mode can be:
 * email|bbcode_htm|url|url_inline|www_url|www_url_inline|relative_url|relative_url_inline|ipv4|ipv6
 */
function getPregExpression($mode) {
	switch ($mode) {
		case 'number' :
			return "^[0-9]+$";
			break;
		case 'float_num' :
			return "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$";
			break;
		case 'phone' :
			return "^((0[0-9]{2,3})-)([0-9]{7,8})(-([0-9]{3,}))?$";
			break;
		case 'mobile' :
			return "((^([0-9]{2,4}[-_－—]?)?[0-9]{3,8}([-_－—]?[0-9]{3,8})?([-_－—]?[0-9]{1,7})?$)|(^0?1[35][0-9]{9}$))";
			break;
		case 'email' :
			return "^(?:[a-z0-9\'\.\-_\+\|]+|&amp;)+@[a-z0-9\-]+\.(?:[a-z0-9\-]+\.)*[a-z]+$";
			break;
		case 'username' :
			return "^[a-zA-Z]([0-9a-zA-Z_\.-]+)?[0-9a-zA-Z]$";
			break;
		case 'id_no' :
			return "^[0-9a-zA-Z]([0-9a-zA-Z_\.-]+)?[0-9a-zA-Z]$";
			break;
		case 'date' :
			return "^[1-2][0-9]{3}\-[0-1]?[0-9]\-[0-3]?[0-9]$";
			break;
		case 'lower' :
			return '^[a-z]+$';
			break;
		case 'upper' :
			return '^[A-Z]+$';
			break;
		case 'alias' :
			return '^[a-zA-Z]([0-9a-zA-Z_-]){0,20}[0-9a-zA-Z]$';
			break;
		// Whoa these look impressive!
		// The code to generate the following two regular expressions which
		// match valid IPv4/IPv6 addresses
		// can be found in the develop directory
		case 'ipv4' :
			return '^(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$';
			break;
		
		case 'ipv6' :
			return '#^(?:(?:(?:[\dA-F]{1,4}:){6}(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:::(?:[\dA-F]{1,4}:){5}(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:(?:[\dA-F]{1,4}:):(?:[\dA-F]{1,4}:){4}(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:(?:[\dA-F]{1,4}:){1,2}:(?:[\dA-F]{1,4}:){3}(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:(?:[\dA-F]{1,4}:){1,3}:(?:[\dA-F]{1,4}:){2}(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:(?:[\dA-F]{1,4}:){1,4}:(?:[\dA-F]{1,4}:)(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:(?:[\dA-F]{1,4}:){1,5}:(?:[\dA-F]{1,4}:[\dA-F]{1,4}|(?:(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))|(?:(?:[\dA-F]{1,4}:){1,6}:[\dA-F]{1,4})|(?:(?:[\dA-F]{1,4}:){1,7}:))$#i';
			break;
		
		case 'url' :
			return "^(https|http|ftp|rtsp|mms)://"
					+ "(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
					+ "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
					+ "|" // 允许IP和DOMAIN（域名）
					+ "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
					+ "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
					+ "[a-z]{2,6})" // first level domain- .com or .museum
					+ "(:[0-9]{1,4})?" // 端口- :80
					+ "((/?)|" // a slash isn't required if there is no file name
					+ "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
			break;
	}
	
	return '';
}

/**
 * 获得一个字符串的长度，第一个是字符串，第二个是否为中文（中文计两个字符）。
 */
function getLength($str,$chinese){
	var l = 0;
	var a = $str.split("");
	var step;
	if(typeof($chinese)=='undefined'||$chinese==false){
		step=1;
	}else{
		step=2;
	}
	for (var i=0;i<a.length;i++) {
		if (a[i].charCodeAt(0)<299) {
			l++;
	  	} else {
	   		l+=step;
	  	}
	}
	return l;
}

function checkLength($str,$min,$max,$chinese){
	var len=getLength($str,$chinese);
	if(len>=$min&&len<=$max){
		return true;
	}else{
		return false;
	}
}

/*功能：解析字符串
 *参数：
 *	1、str：要解析的字符串
 */
function specEncode(str) {
	str=str.replace(/&/g,'&amp;');
	str=str.replace(/>/g,'&gt;');
	str=str.replace(/</g,'&lt;');
	str=str.replace(/"/g,'&quot;');
	str=str.replace(/'/g,"&#39;");
	return str;
}

/*功能：反解字符串
 *参数：
 *	1、str：要反解的字符串
 */
function specDecode(str){
	str=str.replace(/&gt;/g,'>');
	str=str.replace(/&lt;/g,'<');
	str=str.replace(/&quot;/g,'"');
	str=str.replace(/&#39;/g,"'");
	str=str.replace(/&amp;/g,'&');
	return str;
}

/**
 * 在特定的地方插入文字。原生态的js
 */
function insertText(obj,str) {
    if (document.selection) {
        var sel = document.selection.createRange();
        sel.text = str;
    } else if (typeof obj.selectionStart === 'number' && 
            typeof obj.selectionEnd === 'number') {
        var startPos = obj.selectionStart,
            endPos = obj.selectionEnd,
            cursorPos = startPos,
            tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + str + 
                    tmpStr.substring(endPos, tmpStr.length);
        cursorPos += str.length;
        obj.selectionStart = obj.selectionEnd = cursorPos;
    } else {
        obj.value += str;
    }
}
/**
 * 移动光标在最后的位置，原生态的js
 */
function moveEnd(obj){
    obj.focus();
    var len = obj.value.length;
    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character',len);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len;
    }
} 

/**
 * 导出word，输入的是要导出的元素的id
 */
function exportToWord(controlId) {
	 var control = document.getElementById(controlId);
	 try {
		var oWD = new ActiveXObject("Word.Application");
		var oDC = oWD.Documents.Add("", 0, 1);
		var oRange = oDC.Range(0, 1);
		var sel = document.body.createTextRange();
		try {
			sel.moveToElementText(control);
		} catch (notE) {
			alert("导出数据失败，没有数据可以导出。");
			return;
		}
		sel.select();
		sel.execCommand("Copy");
		oRange.Paste();
		oWD.ActiveWindow.ActivePane.view.Type=3;  //默认为页面视图
		oWD.Application.Visible = true;
	}
	catch (e) {
		alert("导出数据失败，需要在客户机器安装Microsoft Office Word(不限版本)，将当前站点加入信任站点，允许在IE中运行ActiveX控件。");
		try { oWD.Quit(); } catch (ex) { }
		//window.close();
	}
}

function doPrint(printId) {
	var prnhtml=document.getElementById(printId).innerHTML;
	var newWindow=window.open('');
	newWindow.document.body.innerHTML=prnhtml;
	newWindow.print(); 
	newWindow.close();
}

/*
 * 健壮的解析URL各部分
 */
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}


