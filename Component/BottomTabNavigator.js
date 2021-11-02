    import React,{Component} from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

    import SearchScreen from "../SCREEN/search";
    import TransactionScreen from '../SCREEN/transaction';

    const Tab =   createBottomTabNavigator();
    export default class BottomTabNavigator extends Component 
    {
        render()
        {
            return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name ="transsaction" component={TransactionScreen}/>
                    <Tab.Screen name ="search" component={SearchScreen}/>
                </Tab.Navigator>
            </NavigationContainer>


            );
        }
    }