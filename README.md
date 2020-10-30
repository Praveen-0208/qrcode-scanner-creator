# qrcode-scanner-creator

This is a React-Native project which allows users to create and also scan qr codes. This is built with Android and hence the configs are for **Android Only.**

Refer the following links for IoS configuration.
[react-native-qrcode-scanner](https://www.npmjs.com/package/react-native-qrcode-scanner)
[react-native-qrcode-svg](https://www.npmjs.com/package/react-native-qrcode-svg)
[react-navigation](https://reactnavigation.org/)

# Pre-Requisite:
- LTS version of [nodejs](https://nodejs.org/en/)
 
# Instructions:
  - Clone the repo and run "npm install"
  - Include the following lines inside /android/app/build.gradle
  ```sh
  android{
      ...
      defaultConfig{
          ...
          missingDimensionStrategy 'react-native-camera', 'general'
          multiDexEnabled true
      }
  }
  .
  .
  .
  dependencies{
      ...
      implementation 'androidx.multidex:multidex:2.0.1'
  }
  ```
- Include the following lines inside /android/app/src/main/AndroidManifest.xml
```sh
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.VIBRATE"/>
```
- All set! Finally run the command "react-native run-android" in the root diresctory of the project.
