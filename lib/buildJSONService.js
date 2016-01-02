'use strict';

var _  = require('lodash'),
	request = require('request'),
	async = require('async');

module.exports = function builder(jsonServices, config, next) {

	var contextPaths = _.keys(jsonServices);

	var allContextServices = {};
	async.each(contextPaths, function(contextPath, cb) {
		var services = jsonServices[contextPath] || "";
		var url = config.liferayURL + config.getContextServicesURL
			.replace('$contextPath$', contextPath)
			.replace('$services$', services.split(",").join());

		request(url, function (error, response, body) {
		  if (!error && response.statusCode === 200) {
			 body = JSON.parse(body);

			 var contextServices = {};
			_.each(body, function(services, name) {
				var arr = [];
				var serviceNames = {};
				services.forEach(function(service) {
					var t = JSON.parse(service);
					var name = t.actionMethod;
					if(Object.keys(serviceNames).indexOf(name) > -1){
						//service name already exists
						serviceNames[name] = ++serviceNames[name];
						name = name + "_" + serviceNames[name];
					} else {
						serviceNames[name] = 0;
					}
					arr.push({
						name: name,
						method: t.method,
						fullPath: t.fullPath,
						params: t.methodParameters
					});
				});
				contextServices[name] = arr;
			});

			allContextServices = _.extend(allContextServices, contextServices);
		    cb();
		  }
		  else{
			  cb(error);
		  }
		});

	}, function(err){
		next(err, allContextServices);
	});
};
