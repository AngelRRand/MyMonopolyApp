import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AppStack = () => {


    return (
        <NavigationContainer>

                <Tab.Navigator
                    screenOptions={{
                        tabBarLabel: "",
                        headerShown: false,
                        tabBarStyle: {
                            height: 55,
                            paddingTop: 10,
                            backgroundColor: "#ffffff",
                        },
                    }}
                >

                    <Tab.Screen
                        name="HomeStack"
                        component={HomeStack}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <Icon
                                        name="home"
                                        size={30}
                                        color="#800040"
                                    />
                                ) : (
                                    <Icon
                                        name="home"
                                        size={30}
                                        color="#222222"
                                    />
                                ),
                        }}
                    />

                    <Tab.Screen
                        name="UserStack"
                        component={UserStack}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <Icon
                                        name="user"
                                        size={30}
                                        color="#800040"
                                    />
                                ) : (
                                    <Icon
                                        name="user"
                                        size={30}
                                        color="#222222"
                                    />
                                ),
                        }}
                    />

                </Tab.Navigator>

        </NavigationContainer>
    )
}

export default AppStack