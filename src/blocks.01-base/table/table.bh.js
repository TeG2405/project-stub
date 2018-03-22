module.exports = function (bh) {
    bh.match('table', function (ctx, json) {
        ctx
            .tag('table')
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .bem(!!ctx.tParam('isBem'));
    });
};  