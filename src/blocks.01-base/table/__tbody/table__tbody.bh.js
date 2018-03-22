module.exports = function (bh) {
    bh.match('table__tbody', function (ctx, json) {
        ctx
            .tag('tbody')
            .content([
                ctx.content().map((item)=>{
                    return Array.isArray(item) ? {elem: 'tr', content: item} : item;
                })
            ], true)
            .bem(!!ctx.tParam('isBem'));
    });
};

 