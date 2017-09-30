let ftp = require('ftp');
let path = require('path');
let fs = require('fs');
let {PATH_FROM, PATH_TO, FTP_IP, FTP_USERNAME, FTP_PASSWORD} = require('./upload2ftp_conf.js');

/**
 工程目录结构示例
 project_root/
 project_root/bin/upload2ftp.js
 project_root/bin/upload2ftp_conf.js
 project_root/build/{files_to_upload}
 */
 

// 源地址： 相对路径转换为绝对地址
// 如果你的工程目录结构和上述示例不符，则需手动修改这里
let PATH_ABS_FROM = formatSlash ( path.resolve( __dirname , '..' , PATH_FROM ) );







let client = null;

let files_to_upload = [];
let dirs_to_upload = []; // queue: first in first out




main();





/**
 * 递归遍历指定目录，把 绝对地址的文件及目录 装入 全局变量
 */
function loop_src(dir_p_abs){
	
	let f_names = fs.readdirSync(dir_p_abs);
	
	for ( let i=0; i<f_names.length; i++ ){
		
		let f_p_abs = path.resolve( dir_p_abs, f_names[i] );
		
		// 是文件的话push到数组
		if ( fs.statSync( f_p_abs ).isFile() ) {
			files_to_upload.push( f_p_abs );
		// 是目录的话push到数组，并继续loop
		} else {
			dirs_to_upload.push( f_p_abs );
			loop_src( f_p_abs );
		}
	}
}






function main() {
	
	// 填充数据
	loop_src(PATH_ABS_FROM);
	
	
	// 校正win路径slash
	files_to_upload = files_to_upload.map(formatSlash)
	dirs_to_upload = dirs_to_upload.map(formatSlash)
	
	
	client = new ftp();
	
	connect();
	
	client.on('ready', function() {
		console.log('-----连接ftp服务器成功-----');
		
		
        if (dirs_to_upload.length) { uploadDirs(dirs_to_upload); }
        else if (files_to_upload.length) { uploadFiles(files_to_upload); }
        else { client.end(); }
        
		// uploadDirs(dirs_to_upload);
		// uploadFiles(files_to_upload); // todo: use promise to ensure order
	})
	
	client.on('error', function(e) {
		console.log('-----重新连接-----');
		connect();
	})
	
	client.on('end', function() {
		if (files_to_upload.length>0) {
			console.log('-----重新连接-----');
			connect();
		};
	})
	
	
	
	function connect() {
	
		client.connect({
			host: FTP_IP,
			user: FTP_USERNAME,
			password: FTP_PASSWORD,
			keepalive: 1000
		});
	}
}






/**
 * 上传source目录 到 对应的target目录
 */
function uploadDirs(source_dirs) {
    
    
    
	let dirs_target = source_dirs.map(calculateTargetPath);
	
	
	
	uploadDir();
	
	
	
	// 递归
	function uploadDir() {
		
		let dir = dirs_target.shift();
		
		client.mkdir(dir, true, function(err) {
			
			if (err) {
				dirs_target.push(dir);
			} else {
				console.log('ensure dir ' + dir);
				
				if (dirs_target.length===0) {
					uploadFiles(files_to_upload);
					return;
				}
			} 
			
			uploadDir()
		})
	}

}







/**
 * 上传文件
 */
function uploadFiles(files_source) {
    
    
	
	// let files_source = files_source.map(function(item){return item})
	let files_target = files_source.map(calculateTargetPath)
	
	
	
	uploadFile();
	
	
	
	// 递归
	function uploadFile() {
		
		let file_s = files_source.shift()
		let file_t = files_target.shift()
		
		client.put(file_s, file_t, false, function(err) {
			
			if (err) {
				files_source.push(file_s);
				files_target.push(file_t);
			} else {
				console.log('upload ' + file_s + ' to ' + file_t);
				
				if (files_source.length===0) {
					client.end();
					return;
				}
			}
			
			
			uploadFile();
		});
	
	}
	
}






// 计算目标路径
function calculateTargetPath(sourcePath) {
	return sourcePath.replace(PATH_ABS_FROM, PATH_TO);
}

// win路径转换为unix路径
function formatSlash(p) {
	return p.replace(/\\/g, '/');
}
