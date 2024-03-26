import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import CustomDrawerMenu from "../components/CustomDrawerMenu";
import Profile from "../screens/Profile";




const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
      drawerContent={(props) => <CustomDrawerMenu {...props} />}
    >
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator >
  )
}

export default DrawerStack
