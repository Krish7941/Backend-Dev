const fs = require("fs");
const readline = require("readline");

let total = 0;
let error = 0;
let warning = 0;
let info = 0;

const inputFile = "systemInfo.log";
const outputFile = "summary.txt";

const stream = fs.createReadStream(inputFile, "utf8");

const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
});

rl.on("line", (line) => {
    total++;

    if (line.includes("ERROR")) {
        error++;
    } else if (line.includes("WARNING")) {
        warning++;
    } else if (line.includes("INFO")) {
        info++;
    }
});

rl.on("close", () => {
    const result =
        "Log File Summary\n" +
        "-----------------\n" +
        "Total Lines : " + total + "\n" +
        "ERROR       : " + error + "\n" +
        "WARNING     : " + warning + "\n" +
        "INFO        : " + info + "\n";

    const writeStream = fs.createWriteStream(outputFile);
    writeStream.write(result);
    writeStream.end();

    console.log("Summary file created");
});
