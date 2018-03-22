module.exports = function (bh) {
    bh.match('list', function (ctx, json) {
        ctx
            .tag('ul')
            .tParam('isBem', json.bem || Object.keys(ctx.mods()).length)
            .content([
                ctx.content().map((item)=>{
                    return ctx.isSimple(item) ? {elem: 'li', content: item} : item
                })
            ], true)
            .bem(!!ctx.tParam('isBem'));
    });
};