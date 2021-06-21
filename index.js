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
let stop = false;
bot.on('message', (msg) => {
    if (msg.text === '/start') return
    if (stop === true) return
    let next = it.next().value;
    result.push(msg.text)
    console.log(questions.lastIndexOf(next))
    if (questions.lastIndexOf(next) < 0){
        answers += checkAnswer(msg, questions[questions.length-1])?1:0
    }else{
        if(questions[questions.lastIndexOf(next) - 1].title === 'Оцените ваш уровень английского' && !checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])){
            bot.sendMessage(msg.from.id, "Спасибо за проявленный к вакансии интерес")
            generateXML(result, msg,false);
            stop = true;
            return;
        }
        if(questions[questions.lastIndexOf(next) - 1].title === 'Mila would never cheat … an exam, shes too honest for that.' && !checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])){
            bot.sendMessage(msg.from.id, "Спасибо за проявленный к вакансии интерес")
            generateXML(result, msg,false);
            stop = true;
            return;
        }
        if(questions[questions.lastIndexOf(next) - 1].title === 'Greg is really satisfied … his new college course, so he has given up the idea of dropping out.' && !checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])){
            bot.sendMessage(msg.from.id, "Спасибо за проявленный к вакансии интерес")
            generateXML(result, msg,false);
            stop = true;
            return;
        }
        if(questions[questions.lastIndexOf(next) - 1].title === 'Ann is often accused … her promises.' && !checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])){
            bot.sendMessage(msg.from.id, "Спасибо за проявленный к вакансии интерес")
            generateXML(result, msg,false);
            stop = true;
            return;
        }
        if(questions[questions.lastIndexOf(next) - 1].title === 'They never have time to go … the details of any plans, they can only give general ideas.' && !checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])){
            bot.sendMessage(msg.from.id, "Спасибо за проявленный к вакансии интерес")
            generateXML(result, msg,false);
            stop = true;
            return;
        }
        if(questions[questions.lastIndexOf(next) - 1].title === 'Olivia tried … her coffee with cream instead of milk, and she liked it very much.' && !checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])){
            bot.sendMessage(msg.from.id, "Спасибо за проявленный к вакансии интерес")
            generateXML(result, msg,false);
            stop = true;
            return;
        }
        answers += checkAnswer(msg, questions[questions.lastIndexOf(next) - 1])?1:0
    }
    console.log("после")
    console.log(questions.filter(q => q.type === 'answer').length);
    console.log(answers);
    if (questions.length === result.length && answers === (questions.filter(q => q.type === 'answer').length)){
        bot.sendMessage(msg.from.id, "Поздравляю вам доступно тестовое задание\n Тестовое задание: 'ссылка'\nВыполненное задание отправить на почту\nПочта: @mail")
        generateXML(result, msg,true);
        return 
    }
    if (questions.length-1 === result.length && answers !== (questions.filter(q => q.type === 'answer').length)){
        generateXML(result, msg,false);
        return
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


async function generateXML(result, msg, access) {
    let workbook = new excel.Workbook();
    workbook.writeP = util.promisify(workbook.write); //нужен promis для await
    let worksheet = workbook.addWorksheet('Анкета');
    worksheet.cell(1, 1).string('Вакансия'); //строка,колонка
    worksheet.cell(1, 2).string(result[0]);
    worksheet.cell(2, 1).string('ФИО');
    worksheet.cell(2, 2).string(result[1]);
    worksheet.cell(3, 1).string('О себе');
    worksheet.cell(3, 2).string(result[2]);
    worksheet.cell(4, 1).string('Слабые стороны');
    worksheet.cell(4, 2).string(result[3]);
    worksheet.cell(5, 1).string('Главное достижение');
    worksheet.cell(5, 2).string(result[4]);
    worksheet.cell(6, 1).string('Что нравится делать в свободное время');
    worksheet.cell(6, 2).string(result[5]);
    worksheet.cell(7, 1).string('Взаимоотношения с коллегами');
    worksheet.cell(7, 2).string(result[6]);
    worksheet.cell(8, 1).string('Развитие в профессиональном плане');
    worksheet.cell(8, 2).string(result[7]);
    worksheet.cell(9, 1).string('Идеальный работник');
    worksheet.cell(9, 2).string(result[8]);
    worksheet.cell(10, 1).string('Через пять лет');
    worksheet.cell(10, 2).string(result[9]);
    worksheet.cell(11, 1).string('Опыт работы');
    worksheet.cell(11, 2).string(result[10]);
    worksheet.cell(12, 1).string('Почему вы ушли с предыдущей работы');
    worksheet.cell(12, 2).string(result[11]); 
    worksheet.cell(13, 1).string('Чем интересна вакансия');
    worksheet.cell(13, 2).string(result[12]); 
    worksheet.cell(14, 1).string('Зарплата');
    worksheet.cell(14, 2).string(result[13]);
    worksheet.cell(15, 1).string('О компании');
    worksheet.cell(15, 2).string(result[14]);
    worksheet.cell(16, 1).string('Объявление');
    worksheet.cell(16, 2).string(result[15]);
    worksheet.cell(17, 1).string('Где еще проходили собеседование');
    worksheet.cell(17, 2).string(result[16]);
    worksheet.cell(18, 1).string('Переезд');
    worksheet.cell(18, 2).string(result[17]);
    worksheet.cell(19, 1).string('Склад ума');
    worksheet.cell(19, 2).string(result[18]);
    worksheet.cell(20, 1).string('Владение ПК');
    worksheet.cell(20, 2).string(result[19]);
    worksheet.cell(21, 1).string('18 лет');
    worksheet.cell(21, 2).string(result[20]);
    worksheet.cell(22, 1).string('IT');
    worksheet.cell(22, 2).string(result[21]);
    worksheet.cell(23, 1).string('Проживает в Саратове');
    worksheet.cell(23, 2).string(result[22]);
    worksheet.cell(24, 1).string('Уровень владение англ');
    worksheet.cell(24, 2).string(result[23]);
    if(access){
        worksheet.cell(25, 1).string('Контакты');
        worksheet.cell(25, 2).string(result[30]);
    }
 
    
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
       /* if(idel.title === 'Оцените ваш уровень английского'){
            if(!idel.right_answer.includes(msg.text))
            return false;
        }*/
        if (idel.right_answer.includes(msg.text)) { //1===1
            bot.sendMessage(msg.from.id, '✅');
            return true
        } else {
            bot.sendMessage(msg.from.id, '❌');
            return false
        }
    }
    return false
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
  