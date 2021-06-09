let questions = [
    {
        type: 'noanswer',
        title: 'Здравствуйте! Вас приветствует чат-бот компании «Название компании», который поможет Вам отправить анкету и пройти предварительное собеседование на выбранную вакансию. Выберете вакансию из доступных, чтобы продолжить',
        buttons: [
            [{text: 'Middle QA Engineer'}],
            [{text: 'Junior .NET Developer'}],
            [{text: 'Middle Frontend Developer'}],
            [{text: 'Junior Frontend Developer'}],
        ],
    },
    {
        type: 'text',
        title: 'Спасибо за интерес к данной вакансии! Пожалуйста введите ФИО, чтобы зарегистрироваться и продолжить',
    },
    {
        type: 'text',
        title: 'Пожалуйста расскажите немного о себе. Можете перечислить основной род деятельности, профессиональные интересы, хобби.',
    },
    {
        type: 'text',
        title: 'Назовите Ваши слабые стороны характера. И расскажите что Вы делаете, чтобы избавиться от недостатков.',
    },
    {
        type: 'text',
        title: 'Расскажите о Вашем главном достижении в профессиональной деятельности.',
    },
    {
        type: 'text',
        title: 'Что Вам нравится делать в свободное время?',
    },
    {
        type: 'text',
        title: 'Как Вы строите взаимоотношения с коллегами? Испытываете ли трудности в общении?',
    },
    {
        type: 'text',
        title: 'Как Вы повышаете свои профессиональные знания? Любите ли Вы учиться?',
    },
    {
        type: 'text',
        title: 'Какими, на Ваш взгляд, качествами должен обладать идеальный работник?',
    },
    {
        type: 'text',
        title: 'Каким Вы видите себя через пять лет? Какие цели ставите перед собой?',
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
        type: 'text',
        title: 'Почему Вы ушли с предыдущего места работы? Уточните, если до этого нигде не работали.',
    },
    {
        type: 'text',
        title: 'Почему Вы выбрали данную вакансию? Что Вы от нее ожидаете?',
    },
    {
        type: 'text',
        title: 'На какую зарплату Вы рассчитываете?',
    },
    {
        type: 'text',
        title: 'Что Вы знаете о нашей компании?',
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
        type: 'text',
        title: 'В каких еще компаниях Вы проходили собеседование? Получали ли Вы другие предложения о работе?',
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
    {
        type: 'text',
        title: 'Спасибо, что проявили интерес к нашей компании!',
    },

];
module.exports={questions};