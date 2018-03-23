module.exports = function (bh) {
    bh.match('figure__caption', function (ctx, json) {
        ctx
            .tag('figcaption')
            .bem(!!ctx.tParam('isBem'));
    })
}