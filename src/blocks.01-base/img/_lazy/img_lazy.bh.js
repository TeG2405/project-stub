module.exports = function (bh) {
    bh.match('img_lazy', function (ctx, json) {
        bh.cbc('img_lazy', 'lazyload');
        ctx
            .attrs({
                'src': ctx.process({block: '1px'}),
                'data-src': json.src,
                'data-srcset': json.srcset && json.srcset.join(', ')
            }, true);
    })
}