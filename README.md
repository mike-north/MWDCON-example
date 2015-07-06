# Write Once, Run Everywhere

This example illustrates how the Ember.js ecosystem makes it easy to build an app that can run on the web, as a standalone desktop app, or as a mobile app distributable in the app store from a single codebase.

To learn more about how powerful this is, and the ways you can work with this kind of setup to cheaply and easily build a cross-platform app, [check out my talk at Mobile+Web Devcon](http://mobilewebdevconference.com/san-francisco-july-2015/agenda/day-three/145pm1.html) in San Francisco, July 14-16 2015. 

## Setup
```
# After cloning this project
npm install; bower install

```

## Web
```
ember s
```
Then visit http://localhost 4200
![Web App](http://i60.tinypic.com/32zm9f8.png)

## Desktop App
```
ember nw
```
The desktop app will launch automatically once the build process completes
![Desktop App](http://i58.tinypic.com/o6mzyw.png)

## Mobile App (iOS)
```
ember cordova:build

``
Once this command completes, the XCode project in the `./cordova/platforms/ios` folder will have been updated with the latest app code. Open this project in XCode and run it by clicking the "Run" button

![XCode Run](http://i61.tinypic.com/23u4ryb.jpg)

And the mobile app will launch in the iOS simulator device of your choice

![Mobile App](http://i61.tinypic.com/330r2av.png)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

