import SimpleBar from 'simplebar';
(()=>{
    var detectionCssScrollBar = () => {
        var test = document.createElement('div');
        var sb = document.createElement('div');
        var property = 'scrollbar{width:0px;}';
        var fake = false;
        var root = document.body;
        if (!root) {
            fake = true;
            root = document.documentElement.appendChild(document.createElement('body'));
        }
        sb.id = '__sb';
        sb.style.overflow = 'scroll';
        sb.style.width = '40px';
        sb.innerHTML = `&shy;<style>#${sb.id}::-webkit-${property}</style>`;
        test.appendChild(sb);
        root.appendChild(test);
        var ret = sb.scrollWidth == 40;
        document.body.removeChild(test);
        if (fake) {
            document.documentElement.removeChild(root);
        }
        return ret;
    };
    var init = () => {
        Array.prototype.forEach.call(document.getElementsByClassName('custom-scroll-bar'), (item)=>{
            new SimpleBar(item);
        });
    };
    !detectionCssScrollBar() && init();
})();
