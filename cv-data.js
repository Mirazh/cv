/*
 * All CV content lives here. Every text field has an `en` and a `ru` version.
 * Dates are "YYYY-MM". Edit this file to update the site — no build step needed.
 */
window.CV = {
  name: { en: 'Denis Sidorenko', ru: 'Денис Сидоренко' },
  title: 'Senior Frontend Engineer',
  location: { en: 'Gomel, Belarus', ru: 'Гомель, Беларусь' },
  photo: 'assets/photo.jpg',
  contacts: {
    email: 'dongor7@gmail.com',
    telegram: 'Dongor7',
    linkedin: 'https://www.linkedin.com/in/denis-sidorenko-bb50ab177/'
  },

  summary: {
    en: 'Senior Frontend Engineer with 7+ years of experience building scalable web applications using JavaScript, TypeScript, React, Redux, Vue.js, HTML, and SCSS. Experienced in HR/workforce management, iGaming and smart TV domains. Strong background in developing complex frontend modules, integrating REST APIs, improving performance, refactoring legacy code, and leading frontend delivery. Worked as a key/lead developer on large-scale projects, combining hands-on development with technical leadership, code reviews, mentoring, and cross-functional collaboration.',
    ru: 'Senior Frontend Engineer с опытом более 7 лет в создании масштабируемых веб-приложений на JavaScript, TypeScript, React, Redux, Vue.js, HTML и SCSS. Работал в доменах HR и управления персоналом, iGaming и Smart TV. Большой опыт разработки сложных фронтенд-модулей, интеграции REST API, оптимизации производительности, рефакторинга legacy-кода и руководства фронтенд-разработкой. Был ключевым и ведущим разработчиком на крупных проектах, совмещая практическую разработку с техническим лидерством, код-ревью, менторством и кросс-функциональным взаимодействием.'
  },

  highlights: [
    { value: '7+', label: { en: 'years in frontend', ru: 'лет во фронтенде' } },
    { value: '7', label: { en: 'people in the team I led', ru: 'человек в моей команде' } },
    { value: '3', label: { en: 'product domains', ru: 'продуктовых домена' } }
  ],

  skills: [
    { group: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'] },
    { group: 'Frontend', items: ['React', 'Redux', 'Vue.js', 'SCSS', 'Responsive Design', 'SPA', 'Component Architecture'] },
    { group: 'State Management', items: ['Redux', 'Context API', 'Pinia'] },
    { group: 'API & Backend', items: ['REST API', 'Node.js', 'Express', 'Sequelize'] },
    { group: 'Testing', items: ['Jest', 'React Testing Library', 'Postman'] },
    { group: 'Databases', items: ['MySQL'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Figma', 'Miro', 'Slack'] },
    { group: 'Methodologies', items: ['Agile', 'Scrum', 'Kanban', 'Code Review', 'Refactoring'] },
    { group: 'Domains', items: ['HR Software', 'iGaming', 'Workforce Management', 'Smart TV Applications'] }
  ],

  languages: [
    { name: { en: 'English', ru: 'Английский' }, level: 'B1', note: null },
    { name: { en: 'Russian', ru: 'Русский' }, level: 'C2', note: { en: 'native', ru: 'родной' } }
  ],

  experience: [
    {
      company: 'Maxbitsolution',
      country: { en: 'Belarus', ru: 'Беларусь' },
      kind: { en: 'iGaming Company', ru: 'iGaming-компания' },
      from: '2025-09', to: '2026-07',
      projects: [
        {
          roles: [{ title: 'Senior Vue.js Developer', from: '2025-09', to: '2026-07' }],
          intro: {
            en: 'Worked on a player-facing iGaming web platform and internal product modules using Vue.js, TypeScript, JavaScript, HTML, and SCSS.',
            ru: 'Работал над пользовательской iGaming веб-платформой и внутренними продуктовыми модулями на Vue.js, TypeScript, JavaScript, HTML и SCSS.'
          },
          bullets: {
            en: [
              'Developed and maintained complex frontend modules for an iGaming platform using Vue.js, TypeScript, JavaScript, HTML, and SCSS.',
              'Implemented key product features related to player accounts, wallet/balance management, bonuses, promotions, lotteries, and game-related flows.',
              'Integrated frontend features with REST APIs, handling user data, transactions, bonus logic, validation, and complex business rules.',
              'Improved application performance, loading speed, and user experience across high-traffic product areas.',
              'Participated in code reviews, refactoring, debugging, and technical discussions to improve code quality and maintainability.',
              'Contributed to frontend state management, form handling, validation, routing, and data synchronization between UI and backend services.',
              'Managed application state using Pinia.'
            ],
            ru: [
              'Разрабатывал и поддерживал сложные фронтенд-модули iGaming-платформы на Vue.js, TypeScript, JavaScript, HTML и SCSS.',
              'Реализовывал ключевые продуктовые функции: аккаунты игроков, управление кошельком и балансом, бонусы, промоакции, лотереи и игровые сценарии.',
              'Интегрировал фронтенд с REST API: пользовательские данные, транзакции, бонусная логика, валидация и сложные бизнес-правила.',
              'Улучшал производительность, скорость загрузки и пользовательский опыт в высоконагруженных разделах продукта.',
              'Участвовал в код-ревью, рефакторинге, отладке и технических обсуждениях для повышения качества и поддерживаемости кода.',
              'Работал над управлением состоянием, обработкой форм, валидацией, маршрутизацией и синхронизацией данных между UI и бэкендом.',
              'Управлял состоянием приложения с помощью Pinia.'
            ]
          },
          tags: ['Vue.js', 'TypeScript', 'Pinia', 'SCSS', 'REST API']
        }
      ]
    },
    {
      company: 'EPAM Systems',
      country: { en: 'Lithuania', ru: 'Литва' },
      kind: { en: 'Digital Business Transformation Company', ru: 'Компания цифровой трансформации бизнеса' },
      from: '2022-06', to: '2025-05',
      projects: [
        {
          name: 'Vizio',
          domain: { en: 'smart TVs domain', ru: 'домен Smart TV' },
          roles: [{ title: 'Lead Developer', from: '2024-08', to: '2025-05' }],
          bullets: {
            en: [
              'Collaborated with customers. Created, prioritized and distributed tasks.',
              'Prepared onboarding documentation and training tasks for newcomers.',
              'Led a team of 7.',
              'Coded on a self-written XML (React-like) framework.',
              'Participated in the hiring process for new hires, conducting technical interviews for prospective candidates, and aligning them with project requirements.'
            ],
            ru: [
              'Взаимодействовал с заказчиком. Создавал, приоритизировал и распределял задачи.',
              'Подготовил документацию для онбординга и обучающие задания для новых сотрудников.',
              'Руководил командой из 7 человек.',
              'Разрабатывал на собственном XML-фреймворке (похожем на React).',
              'Участвовал в найме: проводил технические интервью с кандидатами и оценивал их соответствие требованиям проекта.'
            ]
          },
          tags: ['Team Lead', 'Hiring', 'Custom XML framework']
        },
        {
          name: 'UKG',
          domain: { en: 'HR and workforce management domain', ru: 'домен HR и управления персоналом' },
          roles: [
            { title: 'Senior Key Developer', from: '2022-06', to: '2023-02' },
            { title: 'Lead Developer', from: '2023-03', to: '2024-07' }
          ],
          team: 'PM, PO, BA, FE/BE devs, QAs',
          bullets: {
            en: [
              'Worked as a key/lead developer. Balanced responsibilities with 20% managerial tasks and 80% hands-on involvement in technical work and project execution.',
              'Collaborated with the management, customer and other teams to solve issues.',
              'Integrated Flexmonster pivot table and Highcharts to the project.',
              'Refactored legacy code, worked on architecture approach.',
              'Assisted another team in developing common components for the project.'
            ],
            ru: [
              'Работал ключевым и ведущим разработчиком: 20% — управленческие задачи, 80% — непосредственная техническая работа и реализация проекта.',
              'Взаимодействовал с менеджментом, заказчиком и другими командами для решения проблем.',
              'Интегрировал в проект сводные таблицы Flexmonster и графики Highcharts.',
              'Рефакторил legacy-код, работал над архитектурным подходом.',
              'Помогал другой команде в разработке общих компонентов проекта.'
            ]
          },
          tags: ['Flexmonster', 'Highcharts', 'Refactoring', 'Architecture']
        }
      ]
    },
    {
      company: 'EPAM Systems',
      country: { en: 'Belarus', ru: 'Беларусь' },
      kind: { en: 'Digital Business Transformation Company', ru: 'Компания цифровой трансформации бизнеса' },
      from: '2018-12', to: '2022-05',
      projects: [
        {
          name: 'UKG',
          domain: { en: 'HR and workforce management domain', ru: 'домен HR и управления персоналом' },
          roles: [{ title: 'Key Developer', from: '2019-09', to: '2022-05' }],
          team: 'PM, PO, BA, FE/BE devs, QAs',
          bullets: {
            en: [
              'Worked as a key developer. Balanced responsibilities with 20% managerial tasks and 80% hands-on involvement in technical work and project execution.',
              'Collaborated with the management, customer and other teams to solve issues.',
              'Integrated Flexmonster pivot table and Highcharts to the project.',
              'Refactored legacy code, worked on architecture approach.',
              'Assisted another team in developing common components for the project.'
            ],
            ru: [
              'Работал ключевым разработчиком: 20% — управленческие задачи, 80% — непосредственная техническая работа и реализация проекта.',
              'Взаимодействовал с менеджментом, заказчиком и другими командами для решения проблем.',
              'Интегрировал в проект сводные таблицы Flexmonster и графики Highcharts.',
              'Рефакторил legacy-код, работал над архитектурным подходом.',
              'Помогал другой команде в разработке общих компонентов проекта.'
            ]
          },
          tags: ['Flexmonster', 'Highcharts', 'Refactoring']
        },
        {
          name: 'EPAM',
          domain: { en: 'training/education domain', ru: 'домен обучения и образования' },
          roles: [{ title: 'Junior Developer', from: '2018-12', to: '2019-08' }],
          bullets: {
            en: [
              'Implemented new features like different kinds of forms, new pages with the result of passing tests.',
              'Participated in the implementation of the backend part (Node.js, Express, Sequelize, MySQL). Wrote SQL queries, made migrations, created new API.'
            ],
            ru: [
              'Реализовывал новую функциональность: различные формы, страницы с результатами прохождения тестов.',
              'Участвовал в разработке бэкенда (Node.js, Express, Sequelize, MySQL): писал SQL-запросы и миграции, создавал новые API.'
            ]
          },
          tags: ['Node.js', 'Express', 'Sequelize', 'MySQL']
        }
      ]
    },
    {
      company: 'Neoviso',
      country: { en: 'Belarus', ru: 'Беларусь' },
      from: '2018-07', to: '2018-11',
      projects: [
        {
          roles: [{ title: 'Junior FE/BE Developer', from: '2018-07', to: '2018-11' }],
          bullets: {
            en: [
              'Implemented new UI elements with pure JS and CSS.',
              'Participated in writing API for mobile applications using PHP.'
            ],
            ru: [
              'Реализовывал новые UI-элементы на чистом JS и CSS.',
              'Участвовал в разработке API для мобильных приложений на PHP.'
            ]
          },
          tags: ['JavaScript', 'CSS', 'PHP']
        }
      ]
    }
  ],

  education: [
    {
      degree: { en: 'Bachelor of Science in Software Engineering', ru: 'Бакалавр, программная инженерия' },
      school: { en: 'Gomel State University', ru: 'Гомельский государственный университет' },
      year: '2017'
    }
  ],

  courses: [
    { year: '2023', text: { en: 'Architecture solutions training at EPAM', ru: 'Тренинг по архитектурным решениям в EPAM' } },
    { year: '2021', text: { en: 'Passed Senior FE Developer assessment at EPAM', ru: 'Пройдена аттестация на Senior FE Developer в EPAM' } },
    { year: '2019', text: { en: 'Passed Middle FE Developer assessment at EPAM', ru: 'Пройдена аттестация на Middle FE Developer в EPAM' } },
    { year: '2018', text: { en: 'Node.js training at EPAM', ru: 'Тренинг по Node.js в EPAM' } },
    { year: '2018', text: { en: 'JavaScript/React training at EPAM (RS School)', ru: 'Обучение JavaScript/React в EPAM (RS School)' } },
    { year: '2017', text: { en: 'Java training at ITSupportMe', ru: 'Курс по Java в ITSupportMe' } },
    { year: '2017', text: { en: 'Java training at IBA', ru: 'Курс по Java в IBA' } }
  ]
};
