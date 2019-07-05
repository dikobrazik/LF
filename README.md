# LF
For build app, react-native need Android SDK path
1. Go to your React-native Project -> Android
2. Create a file local.properties
3. Open the file
4. paste your Android SDK path like below

in Windows) sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
in macOS) sdk.dir = /Users/USERNAME/Library/Android/sdk
in linux) sdk.dir = /home/USERNAME/Android/Sdk

Replace USERNAME with your user name

Now, Run the react-native run-android in your terminal.

apk file will replace in /android/app/build/outputs/apk/debug
