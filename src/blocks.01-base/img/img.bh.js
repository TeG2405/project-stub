module.exports = function (bh) {
    bh.match('img', function (ctx, json) {
        ctx
            .tag('img')
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .attrs({
                role: 'img',
                width: json.width,
                height: json.height,
                src: json.src,
                title: json.title,
                alt: ctx.content()
            })
            .bem(!!ctx.tParam('isBem'));
    });
};