const fs = require("fs");
const lines = fs
.readFileSync("data.txt", {
	encoding: "utf-8"
})
.split("\n")
let oDirectories = {};
let aDirectories = [];

for (let line of lines) {
	if (line[0] == "$") {
		if (line[2] == 'c') {
			if (line[5] == '.') {
				aDirectories.pop();
			} else {
				aDirectories.push(line.slice(5));
				oDirectories[aDirectories] = oDirectories[aDirectories] ?? {};
			}
		}
	} else {
		oDirectories[aDirectories][line] = 1;
	}
}

let oDirSums = {};
let bDirChange = true;
while (bDirChange) {
	bDirChange = false;
	loop:
		for (let d in oDirectories) {
			if (oDirSums[d]) continue;
			for (let e in oDirectories[d]) {
				if (e[0] == 'd' && oDirSums[d + "," + e.slice(4)] === undefined) continue loop;
			}
			bDirChange = true;
			let sum = 0;
			for (let e in oDirectories[d]) {
				if (e[0] == 'd') sum += oDirSums[d + "," + e.slice(4)];
				else sum += parseInt(e);
			}
			oDirSums[d] = sum;
		}
}
let iSpace = 30000000 - (70000000 - oDirSums["/\r"]);
let remove = [];
let sum = 0;
for (let d in oDirectories) {
	if (oDirSums[d] <= 100000) sum += oDirSums[d];

	if (oDirSums[d] >= iSpace){
		remove.push(oDirSums[d])
	}
}

const min = Math.min(...remove)
console.log(`Part 1: ${sum}`)
console.log(`Part 2: ${min}`)