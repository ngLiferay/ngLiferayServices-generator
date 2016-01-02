'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  request = require('request'),
  properties = require('properties-parser'),
  beautify = require('js-beautify').js_beautify,
  stream = require('stream');


var tmplFiles = ['AuthService.tmpl', 'HelperService.tmpl',
  'ngLiferayHttp.tmpl', 'ngLiferayAuth.tmpl', 'LanguageService.tmpl',
  'LiferayJSONService.tmpl', 'wrapper.tmpl'
];

function builtNGHelperPortletServices(config, cb) {
  request(config.liferayURL + config.getMethodsParamsURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      config.helperServiceMethods = JSON.parse(body);
      cb(null, config);
    } else {
      cb(error);
    }
  });
}

function processTmpls(config, dest, indent) {
  var tmpls = {};
  tmplFiles.forEach(function(fileName) {
    var compiled = _.template(fs.readFileSync(__dirname + "/tmpl/" + fileName, {
      encoding: 'utf-8'
    }));
    var renderedFile = compiled(config);
    tmpls[fileName] = renderedFile;
    config[fileName.split('.')[0]] = renderedFile;
  });

  console.log("dest: " + dest);
  //write service file with module name as file name
  var filePath = dest + '/' + config.defaultModuleName + '.js';

  var parsedTmpl = tmpls['wrapper.tmpl'];
  //creating stream for content
  var s = new stream.Readable();
  s._read = function noop() {}; // redundant? see update below
  s.push(parsedTmpl);
  s.push(null);

  var buf = [];

  var lineReader = require('readline').createInterface({
    input: s
  });

  lineReader.on('line', function(line) {
    line = line.trim();
    if (line) {
      buf.push(line + "\n");
    }
  });

  lineReader.on('close', function() {
    fs.writeFileSync(filePath, beautify(buf.join(""), {
      indent_size: indent
    }));

  });
  return filePath;
}

/**
 * Main module to build ngLiferayServices.js file
 *
 * @param options Object has following properties
 * 		dest 		- Destination folder to save ngLiferayServices.js file. Default is cwd
 * 		indent		- Indent used for formatting file. Default is 2
 * 		moduleName	- Module name to be used for ngLiferayServices. Default is ngLiferayServices
 * 		next		- callback to be called after file is created.
 * 		jsonServices- Object to configure Liferay json services be converted to ngLiferayServices.
 * 						For Eg.
 * 							{
 * 								"": "JournalArticle",
 * 								"/calendar-portlet" : "Calendar,CalendarBooking"
 * 							}
 *
 * 						Above, from Root context "JournalArticle" service is converted,
 * 							from "/calendar-portlet" context, "Calendar,CalendarBooking"
 * 							services are converted.
 *
 *
 * @param servicesPropsOverride Object to override services.properties values
 */
module.exports = function(options, servicesPropsOverride) {
  var dest = options.dest || process.cwd();
  var indent = options.indent || 2;

  var config = properties.read(__dirname + "/services.properties");
  config.moduleName = options.moduleName || config.defaultModuleName;
  config.allServices = "";

  //override services.properties
  _.extend(config, servicesPropsOverride);

  var next = options.next || function() {

  };
  //configure ng helper services
  builtNGHelperPortletServices(config, function(err, config) {
    if (err) {
      next(err);
    } else {
      //build json services
      require("./buildJSONService")(options.jsonServices, config, function(err, allContextServices) {
        if (!err) {
          config.contextServices = allContextServices;
          var filePath = processTmpls(config, dest, indent);
          next(null, filePath);
        } else {
          next(err);
        }
      });
    }
  });
};
