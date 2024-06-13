/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GradientText from './components/GradientText';
import CalculatorApp from './calculatorappcomponents/CalculatorApp';
import StopWatchApp from './stopwatchortimerappcomponents/StopWatchApp';
import NoteApp from "./notemakingappreactnative/NoteApp";


// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => GradientText);
// AppRegistry.registerComponent(appName, () => CalculatorApp);
// AppRegistry.registerComponent(appName, () => StopWatchApp);
AppRegistry.registerComponent(appName, () => NoteApp);

