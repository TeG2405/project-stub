module.exports = function (bh) {
    bh.match('a', function (ctx, json) {
        ctx
            .tag('a')
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .attrs({
                href: json.href || '#',
                title: json.title
            })
            .bem(!!ctx.tParam('isBem'));
    });
};