module.exports = function (bh) {
    bh.match('form', function (ctx, json) {
        ctx
            .tag('form')
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .attrs({
                action: json.action || '#',
                name: json.name || ctx.generateId()
            })
            .bem(!!ctx.tParam('isBem'));
    });
};