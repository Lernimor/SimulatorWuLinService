var mysql = require('mysql');

function MysqlDriver(host, usr, pwd, port, udb){
	this.connParam = {
		'host' : host,
		'usr' : usr,
		'pwd' : pwd,
		'port' : port,
		'udb' : udb
	}
}

MysqlDriver.prototype.getConnection = function (){
	var conn = mysql.createConnection({
		host : this.connParam.host,
		user : this.connParam.usr,
		password : this.connParam.pwd,
		port : this.connParam.port,
		database : this.connParam.udb,
		multipleStatements: true
	});
	conn.connect();
	return conn;
}

MysqlDriver.prototype.executeQry = function (sql, conn, sqlCount, fun){
	conn.query(sql,function(err, rows){
		var result = {
				"status" : "204",
				"message" : "error",
				"data" : {},
				"other" : []
		};
		if(err){
			console.log(err);
		}
		else if (rows){
			result.status = "200";
			result.message = "Success";
			if (sqlCount == 1)
				result.data = rows;
			else{
				result.data = rows[0];
				for (var i=1; i<sqlCount; i++){
					//return data is a list
					for (var a=0; a<rows[i].length;a++){
						result.other.push(rows[i][a]);
					}
				}
			}
		} else {
			result.status = "205";
			result.message = "Not Find Data";
		}
		fun(result);
	});
	conn.end();
}

module.exports = MysqlDriver;