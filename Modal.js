import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

const baseUrl = 'http://localhost:3002';

const ModalView = () => {
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

  const onSubmitFormHandler = async event => {
    try {
      const response = await axios.post(`${baseUrl}/api/post/add`, morphs);
      if (response.status === 201) {
        alert(`Done!`);
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      alert('An error has occurred');
    }
  };
  return (
    <WebView source={{uri: 'http://sysflicxchanuka-001-site1.ftempurl.com'}} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalView;
