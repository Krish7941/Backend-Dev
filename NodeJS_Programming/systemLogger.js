const os = require('os');
const fs = require('fs');

function logSystemInfo() {
    const info = `
Time: ${new Date().toISOString()}
Platform: ${os.platform()}
CPU Architecture: ${os.arch()}
CPU Cores: ${os.cpus().length}
Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB
Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB
-------------------------
`;

    fs.appendFile('systemInfo.log', info, (err) => {
        if (err) {
            console.error('Error writing log:', err);
        } else {
            console.log('System info logged.');
        }
    });
}

setInterval(logSystemInfo, 5000);
