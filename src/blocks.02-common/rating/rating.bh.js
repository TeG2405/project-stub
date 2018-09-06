module.exports = function(bh) {
    bh.match('rating', function(ctx, json) {
        ctx
            .attrs({
                'data-rating': '3',
                'data-content': 'Рейтинг: 3,5',
            })
            .content(new Array(5).fill([
                {elem: 'item', content: [
                    {block: 'fi', mods: {icon: 'star-o'}},
                ]},
            ]));
    });
};
