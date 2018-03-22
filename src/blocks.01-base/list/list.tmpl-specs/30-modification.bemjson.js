module.exports = [
    {block: 'list', bem: true, content: [
        'Пункт 1',
        'Пункт 2',
        {elem: 'li', content: [
            'Пункт 3',
            {block: 'list', content: [
                'Пункт 3.1',
                'Пункт 3.2',
                'Пункт 3.3'
            ]}  
        ]},
        'Пункт 3'
    ]},
    {block: 'list', mods: {unstyled: true}, content: [
        'Пункт 1',
        'Пункт 2',
        {elem: 'li', content: [
            'Пункт 3',
            {block: 'list', content: [
                'Пункт 3.1',
                'Пункт 3.2',
                'Пункт 3.3'
            ]}
        ]},
        'Пункт 3'
    ]}
]
