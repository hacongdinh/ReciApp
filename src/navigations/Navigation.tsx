import { createStackNavigator } from "@react-navigation/stack"
import splashscreen from "../screens/splashscreen/Splashscreen"
import { COLORS, ICONS, SCREENS } from "../constant/constant"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookMark from "../screens/Bookmark/BookMark";
import Home from "../screens/Home/Home";
import Search from "../screens/Search/Search";
import Setting from "../screens/Setting/Setting";
import { Text } from "react-native";
import { TabIcon } from "../components/TabIcon";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export const MainNavigation =() =>(
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name={SCREENS.Tab} component={TabNavigation} />
        <Stack.Screen name={SCREENS.Spashcreen} component={splashscreen} />
    </Stack.Navigator>
)

export const TabNavigation = () => (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle:{
            
        }
    }}>
        <Tab.Screen name={SCREENS.Home} component={Home}
        options={
            {
                tabBarIcon:({focused}) => <TabIcon focused={focused} icon={ICONS.home}/>
            }
        }/>
        <Tab.Screen name={SCREENS.Search} component={Search} options={
            {
                tabBarIcon:({focused}) => <TabIcon focused={focused} icon={ICONS.search}/>
            }
        } />
        <Tab.Screen name={SCREENS.BookMark} component={BookMark} options={
            {
                tabBarIcon:({focused}) => <TabIcon focused={focused} icon={ICONS.bookmark}/>
            }
        } />
        <Tab.Screen name={SCREENS.Setting} component={Setting} options={
            {
                tabBarIcon:({focused}) => <TabIcon focused={focused} icon={ICONS.setting}/>
            }
        } />
    </Tab.Navigator>
)