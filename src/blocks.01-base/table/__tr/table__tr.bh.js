module.exports = function (bh) {
    bh.match('table__tr', function (ctx, json) {
        ctx
            .tag('tr')
            .content([
                ctx.content().map((item)=>{
                    return ctx.isSimple(item) ? {elem: 'td', content: item} : item;
                })
            ], true)
            .bem(!!ctx.tParam('isBem'));
    }); 
}; 