'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend({
  constructor: function () {

    yeoman.generators.NamedBase.apply(this, arguments);

    this.option('fixtureName', {
      desc: 'tells the route test to use this fixture',
      alias: 'f',
      type: 'string',
    });

    this.fixtureName = this.options.fixtureName;
  },

  writing: function () {
    this.template(
      this.templatePath('_route.js.ejs'),
      this.destinationPath(`test/routes/${this.name}.js`), {
        fixtureName: this.fixtureName,
        routeName: this.name,
      }
    );
  },
});
