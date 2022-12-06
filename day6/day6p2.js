const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})

for (let i = 0; i < lines.length; i++) {
	var marker = lines.substring(i, i + 14)
	var bMarker = checkString(marker)
	if (bMarker) {
		console.log(i + 14)
		break;
	}
}


function checkString(str) {
	for (let i = 0; i < str.length; i++)
		for (let j = i + 1; j < str.length; j++)
			if (str[i] == str[j])
				return false;
	return true;
}