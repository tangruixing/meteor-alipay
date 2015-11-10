Package.describe({
  name: 'anderson916:meteor-alipay',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'a simple wrapper for alipay package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/anderson916/meteor-alipay',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'alipay-meteor-easy': '0.1.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('meteor-alipay.js', 'server');
  api.export('Alipay', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('anderson916:meteor-alipay');
  api.addFiles('meteor-alipay-tests.js');
});
