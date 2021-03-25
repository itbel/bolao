/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

AppRegistry.registerComponent("bolao", () => App);
