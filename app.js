// 1. Подключаем собственный модуль
const { getGreeting } = require('./utils/message');

// 2. Подключаем встроенные модули Node.js
const os = require('os');
const path = require('path');

// 3. Подключаем chalk (Версия 4 поддерживает обычный require)
const chalk = require('chalk');


function run() {
   
    console.log(chalk.bold.blue('=== Запуск приложения ===\n'));

    // 1. Приветствие из собственного модуля (зеленый и жирный)
    console.log(chalk.green.bold(getGreeting()));

    // 2. Версия Node.js (желтый цвет)
    console.log(chalk.yellow(`Версия Node.js: ${process.version}`));

    // 3. Текущая дата и время (циановый цвет)
    console.log(chalk.cyan(`Текущее время: ${new Date().toLocaleString()}`));

    // 4. Путь к текущей папке проекта (белый цвет на сером фоне)
    console.log(chalk.white.bgGray(`Путь к проекту: ${process.cwd()}`));

    console.log('\n' + chalk.bold.magenta('=== Дополнительная информация (встроенные модули) ===\n'));

    // 5. Имя операционной системы (красный текст)
    console.log(chalk.red(`Операционная система: ${os.type()} (${os.platform()})`));

    // 6. Домашняя директория пользователя (зеленый текст)
    console.log(chalk.green(`Домашняя директория: ${os.homedir()}`));

    // 7. Имя текущего файла и расширение (разные цвета для наглядности)
    const currentFileName = path.basename(__filename);
    const fileExtension = path.extname(__filename);

    console.log(`Имя текущего файла: ${chalk.bold(currentFileName)}`);
    console.log(`Расширение файла: ${chalk.underline(fileExtension)}`);
    
    console.log('\n' + chalk.gray('--- Приложение завершено успешно ---'));
}

// Запускаем функцию
run();