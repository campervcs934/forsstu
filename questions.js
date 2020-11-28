let questions = [
    {
        type: 'text',
        title: 'Ваши ФИО',
    },
    {
        type: 'noanswer',
        title: 'Оцените ваш уровень английского',
        buttons: [
            [{text: 'A1'}],
            [{text: 'A2'}],
            [{text: 'B1'}],
            [{text: 'B2'}],
            [{text: 'C1'}],
            [{text: 'C2'}],
        ],
    },
    {
        type: 'noanswer',
        title: 'Оцените ваш уровень владения ПК"',
        buttons: [
            [{text: '5'}],
            [{text: '4'}],
            [{text: '3'}],
            [{text: '2'}],
            [{text: '1'}],
        ],
    },
    {
        type: 'noanswer',
        title: 'Откуда вы узнали о нас?',
        buttons: [
            [{text: 'HeadHunter'}],
            [{text: 'Рекламные объявления'}],
            [{text: 'Знакомые'}],
            [{text: 'Иное'}],
        ],
    },
    {
        type: 'answer',
        title: 'Вам есть 18 лет?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: 'Да',
    },
    {
        type: 'answer',
        title: 'Вы учитесь (закончили) высшее учебное заведение по специальности IT?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: 'Да',
    },
    {
        type: 'answer',
        title: 'Вы проживаете в городе Саратов?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: 'Да',
    },
    {
        type: 'answer',
        title: 'Есть ли у Вас опыт работы?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: 'Да',
    },

];
module.exports={questions};