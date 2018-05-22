import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated','Warning: Accordion: isMounted is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('cretella_ecom', () => App);
