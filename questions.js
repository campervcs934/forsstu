let questions = [
    {
        type: 'text',
        title: 'Вас приветствует бот компании "Название компании " введите ваши ФИО',
    },
    {
        type: 'text',
        title: 'Назовите ваши сильные стороны',
    },
    {
        type: 'text',
        title: 'Почему мы должны вас нанять?',
    },
    {
        type: 'text',
        title: 'Расскажите немного о себе',
    },
    {
        type: 'text',
        title: 'Что вы знаете о компании?',
    },
    {
        type: 'text',
        title: 'Назовите ваши слабые стороны',
    },
    {
        type: 'text',
        title: 'Назовите ваше главное достижение',
    },
    {
        type: 'text',
        title: 'Где вы видете себя через пять лет?',
    },
    {
        type: 'text',
        title: 'В каких еще компаниях вы проходили собеседование?',
    },
    {
        type: 'text',
        title: 'Как вы справляетесь со стрессовыми ситуациями?',
    },
    {
        type: 'text',
        title: 'Что вам нравится делать в свободное время? ',
    },
        
    {
        type: 'noanswer',
        title: 'Вы гоотовы к переезду?',
        buttons: [
        [{text: 'да'}],
        [{text: 'нет'}],
        ],
    },
    {
        type: 'noanswer',
        title: 'Какой по вашему мнению у вас склад ума?',
        buttons: [
        [{text: 'Гуманитарный'}],
        [{text: 'Технический'}],
        ],
    },
    {
        type: 'noanswer',
        title: 'Оцените ваш уровень владения ПК',
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
        right_answer: ['Да'],
    },
    {
        type: 'answer',
        title: 'Вы учитесь (закончили) высшее учебное заведение по специальности IT?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: ['Да'],
    },
    {
        type: 'answer',
        title: 'Вы проживаете в городе Саратов?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: ['Да'],
    },
    {
        type: 'answer',
        title: 'Есть ли у Вас опыт работы?',
        buttons: [
            [{text: 'Да'}],
            [{text: 'Нет'}],
        ],
        right_answer: ['Да'],
    },
    {
        type: 'answer',
        title: 'Оцените ваш уровень английского',
        buttons: [
            [{text: 'A1'}],
            [{text: 'A2'}],
            [{text: 'B1'}],
            [{text: 'B2'}],
            [{text: 'C1'}],
            [{text: 'C2'}],
        ],
        right_answer: ['B2', 'C1', 'C2'],
    },
    {
        type: 'answer',
        title: 'Mila would never cheat … an exam, shes too honest for that.',
        buttons: [
            [{text: 'in'}],
            [{text: 'to'}],
            [{text: 'off'}],
        ],
        right_answer: ['off'],
    },
    {
        type: 'answer',
        title: 'Greg is really satisfied … his new college course, so he has given up the idea of dropping out.',
        buttons: [
            [{text: 'at'}],
            [{text: 'of'}],
            [{text: 'with'}],
        ],
        right_answer: ['with'],
    },
    {
        type: 'answer',
        title: 'Ann is often accused … her promises.',
        buttons: [
            [{text: 'she broke'}],
            [{text: 'of breaking'}],
            [{text: 'to have broken'}],
        ],
        right_answer: ['to have broken'],
    },
    {
        type: 'answer',
        title: 'They never have time to go … the details of any plans, they can only give general ideas.',
        buttons: [
            [{text: 'through'}],
            [{text: 'into'}],
            [{text: 'to'}],
        ],
        right_answer: ['into'],
    },
    {
        type: 'answer',
        title: 'Olivia tried … her coffee with cream instead of milk, and she liked it very much.',
        buttons: [
            [{text: 'to take'}],
            [{text: 'taking'}],
            [{text: 'to taking'}],
        ],
        right_answer: ['taking'],
    },


];
module.exports={questions};