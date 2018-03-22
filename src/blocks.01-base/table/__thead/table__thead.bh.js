module.exports = function (bh) {
    bh.match('table__thead', function (ctx, json) {
        ctx
            .tag('thead')
            .content([
                ctx.content().map((item)=>{
                    return Array.isArray(item) ? {elem: 'tr', content: item} : item;
                })
            ], true)
            .bem(!!ctx.tParam('isBem'));
    });
};