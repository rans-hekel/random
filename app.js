const chalk = require('chalk');
const readline = require('readline');
// const { Client } = require('whatsapp-web.js');
// const client = new Client();
// const http = require('http');
const qrcode = require('qrcode-terminal');


// client.on('qr', (qr) => {
//     // Generate and scan this code with your phone
//     console.log('QR RECEIVED', qr);
//     qrcode.generate(qr);
// });

// client.on('ready', () => {
//     console.log(chalk.green.inverse.bold('Client is ready!'));
// });

// client.on('message', msg => {
//     if (msg.body == '!ping') {
//         msg.reply('pong');
//     } 
// });

// client.initialize();





const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
qr = 'dakmkdmaidasfdaamdaimdamdas'
rl.question(chalk.green.bold('Username : '), (nama) => {
    rl.question(chalk.green.bold('Password : '), (no) => {
    console.log(chalk.green.inverse.bold(`Nama Anda : ${nama}`));
    qrcode.generate(qr);
    console.log(chalk.green.inverse.bold('Kode QR Anda Untuk Login'));
    rl.close();
    })
})