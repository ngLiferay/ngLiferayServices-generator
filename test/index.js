var builder = require("../lib/buildServices");

var o = {
	moduleName:"sample",
	jsonServices : {
		"": "JournalArticle",
		"/calendar-portlet" : "Calendar"
	}
};
builder(o, {
	initModule:true
});
