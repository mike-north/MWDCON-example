module.exports = {
  appName: 'Write Once, Run Everywhere',
  platforms: ['osx64'],
  buildType: function() {
    return this.appVersion;
  }
};