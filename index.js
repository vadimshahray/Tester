import App from './src/App'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Navigation } from 'react-native-navigation'

AppRegistry.registerComponent(appName, () => App)
Navigation.registerComponent('com.Tester.WelcomeScreen', () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.Tester.WelcomeScreen',
            },
          },
        ],
      },
    },
  })
})
