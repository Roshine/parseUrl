
function urlObj(url){
	var protocol=url.split(':')[0];//协议
	var hostname_port=url.split('/')[2];//主机名和端口号
	var hostname=hostname_port.split(':')[0]; //主机名
	var temp_port=hostname_port.split(':')[1];
	var port=temp_port ? temp_port : '80' ; //端口
	var pathname_arr= /^(?:\w+\:\/\/)?([^\/]+)(.*)$/.exec(url);
	var pathname= '' || pathname_arr[2].split('?')[0]; //文件名
	var url_arr=url.split('?');
	var query_fragment='' ||  url_arr[1] ;
	var query={};   //参数对象
	var fragment='';  //其他消息
	
	if (query_fragment) {
		var qu_f=query_fragment.split('#');
		var qus=qu_f[0];
		fragment='' || qu_f[1];
		qus = qus.split('&');
		for(var len=qus.length,i=0;i<len;i++){
			var qus_arr=qus[i].split('=');
			query[qus_arr[0]]=qus_arr[1];
		}
	}else{
		query='';
	}

	return {
		protocol:protocol,
		hostname:hostname,
		port:port,
		pathname:pathname,
		query:query,
		fragment:fragment
	}
}
console.log(urlObj('https://www.baidu.com'));
console.log(urlObj('https://www.baidu.com/article/test/index.html'));
console.log(urlObj('https://www.baidu.com:8066/article/test/index.html'));
console.log(urlObj('https://www.baidu.com:8080/article/test/index.html?name=123&psw=123hrx#jjjjj'));