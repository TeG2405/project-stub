//  Функция подключения скрипта
window.addHeadScript = function(url, calback) {
    if (Array.isArray(url)) {
        let self = this;
        let prom = [];
        url.forEach(function(item) {
            prom.push(self.addHeadScript(item));
        });
        return Promise.all(prom);
    }
    return new Promise((resolve, reject) => {
        let r = false;
        let t = document.getElementsByTagName('script')[0];
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = url;
        s.async = true;
        s.onload = s.onreadystatechange = function() {
            if (!r && (!this.readyState || this.readyState === 'complete')) {
                r = true;
                resolve(this);
                calback();
            }
        };
        s.onerror = s.onabort = reject;
        t.parentNode.insertBefore(s, t);
    });
};
