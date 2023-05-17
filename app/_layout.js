import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'

import * as SpalshScreen from 'expo-splash-screen'

SpalshScreen.preventAutoHideAsync()

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout =  ()=>{
    const [fontsloaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    })

    const onLayoutRootView = useCallback(async()=>{
        if(fontsloaded){
            await SpalshScreen.hideAsync()
        }
    },[fontsloaded])

    if(!fontsloaded){
         return null;
    }

    return(
        // <Stack initialRouteName='home' onLayout={onLayoutRootView}>
        //     <Stack.Screen name="home"/>
        // </Stack>
        <Stack onLayout={onLayoutRootView}/>
        
    
    )
}
export default Layout