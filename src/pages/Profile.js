import React from 'react';
import {WebView} from 'react-native-webview';


function Profile({navigation}){
  const githubusername = navigation.getParam('github_username');
  return( <WebView source={{uri:`https://github.com/${githubusername}`}} style={{flex:1}}/>
  );
}

export default Profile;