import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  View,
  SafeAreaView,
} from 'react-native';
import WebView from 'react-native-webview';
import ModalView from './Modal';
import axios from 'axios';
// const baseUrl = 'http://localhost:3002';

const App = () => {
  const getSize = () => {
    const size = Math.floor(Math.random() * 200) + 1;
    return size;
  };

  const morphs = {
    Height: getSize(),
    Chest: getSize(),
    Neck: getSize(),
    Neck_Height: getSize(),
    Shoulders: getSize(),
    Shoulder_Slope: getSize(),
    Bust_Girth: getSize(),
    Stomach_Form: getSize(),
    Waist: getSize(),
    Arm_Length: getSize(),
    Upper_Arm_Girth: getSize(),
    Wrist: getSize(),
    Hip_Girth: getSize(),
    Hip_Height: getSize(),
    Thigh_Girth: getSize(),
    Lower_Leg_Length: getSize(),
    Calf: getSize(),
  };

  const saveData = async () => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:3002/api/post/add',
        morphs,
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    } finally {
      // setLoaded(true);
    }
  };
  return (
    <View style={{flex: 1}}>
      <WebView
        startInLoadingState
        renderLoading={() => (
          <View style={{flex: 1, alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        )}
        allowsBackForwardNavigationGestures
        source={{uri: 'http://sysflicxchanuka-001-site1.ftempurl.com'}}
      />
      <Button onPress={() => saveData()} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
