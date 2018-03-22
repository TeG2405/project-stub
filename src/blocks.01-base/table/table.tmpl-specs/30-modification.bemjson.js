module.exports = [
    {block: 'table', mods: {border: true}, content: [
        {elem: 'thead', content:[
            {elem: 'tr', content: [
                {elem: 'th', content: 'Заголовок 1'},
                {elem: 'th', content: 'Заголовок 2'},
                {elem: 'th', content: 'Заголовок 3'}
            ]}
        ]},
        {elem: 'tbody', content:[
            {elem: 'tr', content: [
                {elem: 'td', content: 'Заголовок 1'},
                {elem: 'td', content: 'Заголовок 2'},
                {elem: 'td', content: 'Заголовок 3'}
            ]},
            {elem: 'tr', content: [
                'Заголовок 1',
                'Заголовок 2',
                'Заголовок 3'
            ]},
            [
                'Заголовок 1',
                'Заголовок 2',
                'Заголовок 3'
            ]
        ]},
        {elem: 'tfoot', content:[
            {elem: 'tr', content: [
                {elem: 'td', content: 'Заголовок 1'},
                {elem: 'td', content: 'Заголовок 2'},
                {elem: 'td', content: 'Заголовок 3'}
            ]}
        ]}
    ]}
]
