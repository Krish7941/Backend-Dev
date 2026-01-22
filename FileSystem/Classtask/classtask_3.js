const fs = require("fs").promises;
const path = require("path");

const src = "uploads";
const backup = "backup";
const logFile = "backup.log";
const OLD_DAYS = 7 * 24 * 60 * 60 * 1000;

async function log(msg) {
    await fs.appendFile(logFile, new Date().toISOString() + " " + msg + "\n");
}

async function run() {
    try {
        await fs.access(src);
    } catch {
        console.log("Source folder missing");
        return;
    }

    try {
        await fs.access(backup);
    } catch {
        await fs.mkdir(backup);
    }

    const files = await fs.readdir(src);

    for (let file of files) {
        const filePath = path.join(src, file);
        const stats = await fs.stat(filePath);

        if (stats.isFile()) {
            const backupName = Date.now() + "_" + file;
            await fs.copyFile(filePath, path.join(backup, backupName));
            await log("Backed up " + file);

            if (Date.now() - stats.mtime > OLD_DAYS) {
                await fs.unlink(filePath);
                await log("Deleted " + file);
            }
        }
    }

    console.log("Done");
}

run();
