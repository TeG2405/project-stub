module.exports = function (bh) {
    bh.match('figure', function (ctx, json) {
        ctx
            .tag('figure')
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .bem(!!ctx.tParam('isBem'));
    })
}