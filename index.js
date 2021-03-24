const {questions} = require('./questions.js');
const util = require('util'); //для promise

// Подключаем библиотеку для работы с Telegram API
let TelegramBot = require('node-telegram-bot-api');
// Подключаем библиотеку для работы с Excel
let excel = require('excel4node');
const fs = require('fs');
const {SSL_OP_SSLEAY_080_CLIENT_DH_BUG} = require('constants');

// Устанавливаем токен, который выдавал нам бот
let token = '1344393722:AAFWrqbTfu-4hGuz89DiechdboGv-Sjp9Ek';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
let bot = new TelegramBot(token, {polling: true});

let answers = 0;
let result = []
var it = makeIterator(questions);
// На старте отправим первый вопрос
bot.onText(/\/start/, function (msg, match) {
    newQuestion(msg, it.next().value);
});
bot.on('message', (msg) => {
    if (msg.text === '/start') return
    let next = it.next().value;
    result.push(msg.text)
    console.log(questions.lastIndexOf(next))
    if (questions.lastIndexOf(next) < 0){
        answers = answers + checkAnswer(msg, questions[questions.length-1])?1:0
    }else{
        answers = answers + checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])?1:0
    }
    console.log("после")
    if (answers === (questions.filter(q => q.type === 'answer').length)) {
        bot.answerCallbackQuery(msg.id, 'Поздравляю вам доступно тестовое задание');
        bot.sendMessage(msg.from.id, "Тестовое задание: 'ссылка'\nВыполненное задание отправить на почту\nПочта: @mail")
        generateXML(result, msg);
        return 
    }
    if (questions.length === result.length){
        generateXML(result, msg);
    }
    newQuestion(msg, next)
})


function newQuestion(msg, el) {
    let text = el.title;
    let options = {
        reply_markup: JSON.stringify({
            keyboard: el.buttons,
            // parse_mode: 'Markdown',
            remove_keyboard: true,
            resize_keyboard: true,
            one_time_keyboard: true
        })
    };
    let chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    bot.sendMessage(chat, text, options);
}


async function generateXML(result, msg) {
    let workbook = new excel.Workbook();
    workbook.writeP = util.promisify(workbook.write); //нужен promis для await
    let worksheet = workbook.addWorksheet('Анкета');
    worksheet.cell(1, 1).string('ФИО'); //строка,колонка
    worksheet.cell(1, 2).string(result[0]);
    worksheet.cell(2, 1).string('Возраст');
    worksheet.cell(2, 2).string('Есть 18');
    worksheet.cell(3, 1).string('Образование');
    worksheet.cell(3, 2).string('IT');
    worksheet.cell(4, 1).string('Город');
    worksheet.cell(4, 2).string('Саратов');
    worksheet.cell(5, 1).string('Опыт работы');
    worksheet.cell(5, 2).string('Есть');
    worksheet.cell(6, 1).string('Уровень английского');
    worksheet.cell(6, 2).string(result[7]);
    worksheet.cell(7, 1).string('Уровень владения пк');
    worksheet.cell(7, 2).string(result[2]);
    worksheet.cell(8, 1).string('Объявление');
    worksheet.cell(8, 2).string(result[3]);
    await workbook.writeP('Bot.xlsx'); // ждем
    bot.sendDocument(
        '1197500614',
        fs.readFileSync('Bot.xlsx'),
        {
            caption: "Анкета от" + " " + msg.from.first_name
        },
        {
            filename: 'Bot.xlsx',
            contentType: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        })
        .then(() => {
            console.log('Файл отправлен');
        });
}

function checkAnswer(msg, idel) {
    if (idel.type === 'answer') {
        if (idel.right_answer.includes(msg.text)) { //1===1
            bot.sendMessage(msg.from.id, '✅');
            return true
        } else {
            bot.sendMessage(msg.from.id, '❌');
            return false
        }
    }
}

function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        },

    }
}
  