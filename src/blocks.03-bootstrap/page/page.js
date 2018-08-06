import 'bootstrap';
// https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#internet-explorer-10-in-windows-phone-8
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
      document.createTextNode(
          '@-ms-viewport{width:auto!important}'
      )
  );
  document.head.appendChild(msViewportStyle);
}
if (!!window.$ || !!window.jQuery) {
  console.warn('duplicate jQuery require');
}
window.$ = $;
window.jQuery = jQuery;