 let questionsIN = [
    {
        title: 'Оцените ваш уровень английского',
        buttons: [
            [{text: 'A1', callback_data: 'A1'}],
            [{text: 'A2', callback_data: 'A2'}],
            [{text: 'B1', callback_data: 'B1'}],
            [{text: 'B2', callback_data: 'B2'}],
            [{text: 'C1', callback_data: 'C1'}],
            [{text: 'C2', callback_data: 'C2'}],
        ],
    },
    {
        title: 'Оцените ваш уровень владения ПК"',
        buttons: [
            [{text: '5', callback_data: '5'}],
            [{text: '4', callback_data: '4'}],
            [{text: '3', callback_data: '3'}],
            [{text: '2', callback_data: '2'}],
            [{text: '1', callback_data: '1'}],
        ],
    },
    {
        title: 'Откуда вы узнали о нас?',
        buttons: [
            [{text: 'HeadHunter', callback_data: 'HeadHunter'}],
            [{text: 'Рекламные объявления', callback_data: 'Рекламные объявления'}],
            [{text: 'Знакомые', callback_data: 'Знакомые'}],
            [{text: 'Иное', callback_data: 'Иное'}],
        ],
    },
];
module.exports={questionsIN};