const path = require("path");

module.exports = {
	i18n: {
		defaultLocale: "nl",
		locales: ["nl", "pl"],
	},
	localePath: path.resolve("./public/locales"),
};
