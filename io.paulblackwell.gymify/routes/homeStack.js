import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

import Home from '../screens/Home';
import WorkoutList from '../screens/WorkoutList';

const screens = {
    Home: {
        screen: Home
    },
    WorkoutList: {
        screen: WorkoutList
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);