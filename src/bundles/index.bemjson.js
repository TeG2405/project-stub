module.exports = {
  block: 'page',
  title: 'Пустая странциа',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      require('../blocks.01-base/a/a.tmpl-specs/10-all.bemjson'),
    ]},
    require('./common/footer.bemjson.js'),
  ],
};
