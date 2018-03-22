module.exports = function (bh) {
    bh.match('table__tfoot', function (ctx, json) {
        ctx
            .tag('tfoot')
            .content([
                ctx.content().map((item)=>{
                    return Array.isArray(item) ? {elem: 'tr', content: item} : item;
                })
            ], true)
            .bem(!!ctx.tParam('isBem'));
    });
};