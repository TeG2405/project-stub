module.exports = function (bh) {
    bh.match('table', function (ctx, json) {
        ctx
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .tag('table')
            .bem(!!ctx.tParam('isBem'));
    });
};  