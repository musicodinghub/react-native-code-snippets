/** 
 * React Native Code Snippets - Drawer Menu UI Example 
 * 
 * TODO:
 * [x] 1. Prepare
 * [x] 2. Install dependencies components, e.g. @react-navigation
 * [x] 3. Build a simple drawer menu with 2 inner testing screens
 * [x] 4. Define images & menus constant that will be used in step 5
 * [x] 5. Add custom drawer menu items
 * [x] 6. Create Stack Navigator for each screens
 * [x] 7. Link up the drawer menu with some UI examples which created in previous videos
 * [x] 8. Style the drawer menu
 * 
 * */

import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import styled from 'styled-components/native';

// import { ActivityFeed } from '../Feed';
// import { MessagingOption1 } from '../Messaging';
// import { ProfileOption1, ProfileOption2 } from '../Profile';

const AVATAR = {uri: 'https://musicoding.com/content/images/apps/avatar.png'};
const FACEBOOK = {uri: 'https://musicoding.com/content/images/apps/facebook_white_icon.png'};
const TWITTER = {uri: 'https://musicoding.com/content/images/apps/twitter_white_icon.png'};
const INSTAGRAM = {uri: 'https://musicoding.com/content/images/apps/instagram_white_icon.png'};

const MENUS =[{
  name: 'Feed',
  label: 'FEED',
  icon: require('../../../assets/images/feed_white_icon.png')
},{
  name: 'Explore',
  label: 'EXPLORE',
  icon: require('../../../assets/images/explore_white_icon.png')
},{
  name: 'Messages',
  label: 'MESSAGES',
  icon: require('../../../assets/images/messages_white_icon.png')
},{
  name: 'Notifications',
  label: 'NOTIFICATIONS',
  icon: require('../../../assets/images/alert_white_icon.png')
},{
  name: 'Photos',
  label: 'PHOTOS',
  icon: require('../../../assets/images/photos_white_icon.png')
},{
  name: 'Videos',
  label: 'VIDEOS',
  icon: require('../../../assets/images/videos_white_icon.png')
},{
  name: 'Places',
  label: 'PLACES',
  icon: require('../../../assets/images/places_white_icon.png')
},{
  name: 'Settings',
  label: 'SETTINGS',
  icon: require('../../../assets/images/settings_white_icon.png')
},{
  name: 'Search',
  label: 'SEARCH',
  icon: require('../../../assets/images/search_white_icon.png')
},]

const VideosScreen = () => {
  return (
    <Container>
      <Text size='24px'>Videos Screen</Text>
    </Container>
  )
}
const SettingsScreen = () => {
  return (
    <Container>
      <Text size='24px'>Settings Screen</Text>
    </Container>
  )
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Videos" component={VideosScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
      {/* you can define other screens stack here */}
      {/* <Stack.Screen name="Feed" component={ActivityFeed} options={{headerShown: false}}/>
      <Stack.Screen name="Messages" component={MessagingOption1} options={{headerShown: false}}/>
      <Stack.Screen name="Profile" component={ProfileOption2} options={{headerShown: false}}/> */}
    </Stack.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  const [activedIndex, setActivedIndex] = useState(0);
  return (
    <SideBarContainer>
      <TouchableOpacity onPress={()=>{
        props.navigation.navigate('Profile')
        props.navigation.closeDrawer();
      }} >
        <Header>
          <Avatar source={require('../../../assets/images/avatar.png')} style={{width: 50, height: 50, borderRadius:50}}/>
          <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 16 }}>
            <Text color='#fff' size='14px' bold>John Doe</Text>
            <Text color='#fff' size='10px'>San Francisco, CA</Text>
          </View>
        </Header>
      </TouchableOpacity>
      <DrawerContentScrollView style={{marginLeft:16}}>
        {/* <DrawerItemList {...props} /> */}
        {
          MENUS.map((menu, index)=>{
            return (
              <DrawerItem 
                activeTintColor = '#fff'
                focused = {activedIndex === index}
                key = {index} 
                label={()=>(<Text align='left' color='#fff' size='10px' bold>{menu.label}</Text>)}
                onPress={()=>{
                  props.navigation.navigate(menu.name);
                  props.navigation.closeDrawer();
                  setActivedIndex(index);
                }}
                icon = {()=>(
                  <Icon source={menu.icon}/>
                )}
                style={{height: 48}}
              ></DrawerItem>
            )
          })
        }
      </DrawerContentScrollView>
      <Footer>
        <TouchableOpacity>
          <Icon source={require('../../../assets/images/facebook_white_icon.png')} style={{marginRight: 32}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon source={require('../../../assets/images/twitter_white_icon.png')} style={{marginRight: 32}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon source={require('../../../assets/images/instagram_white_icon.png')} style={{marginRight: 32}}/>
        </TouchableOpacity>
      </Footer>
    </SideBarContainer>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault
      hideStatusBar={true}
      initialRouteName="Videos"
      drawerStyle={{
        marginVertical: -10
      }}
      drawerContent={(props)=>(<CustomDrawerContent {...props} />)}
    >
      {/* <Drawer.Screen name ="Videos" component={VideosScreen} options={{headerShown: true}}/>
      <Drawer.Screen name ="Settings" component={SettingsScreen} options={{headerShown: true}}/> */}
      <Drawer.Screen name ="Stacks" component={StackNavigator}/>
    </Drawer.Navigator>
  )
}

const DrawerMenu = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const SideBarContainer = styled.View`
  flex: 1;
  background-color: #2699fb;
`;
const Header = styled.View`
  height: 104px;
  background-color: #bce0fd;
  flex-direction: row;
  padding: 32px 32px;
`;
const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 32px;
  margin-bottom: 32px;
`;

const Text = styled.Text`
  color: ${(props)=>(props.color ? props.color: '#2699fb')};
  font-size: ${(props)=>(props.size ? props.size: '14px')};
  line-height: ${(props)=>(props.height ? props.height: '24px')};
  font-weight: ${(props)=>(props.bold ? 'bold': 'normal')};
  text-align: ${(props)=>(props.align ? props.align : 'center')};;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;

export default DrawerMenu;