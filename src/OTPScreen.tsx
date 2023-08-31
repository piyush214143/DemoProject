import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OTPScreen = ({ route, navigation }: any) => {
  const { email } = route.params;
  const [otp, setOTP] = useState('');

  const handleVerifyOTP = () => {
    // You can add OTP verification logic here
    // Once OTP is verified, you can navigate to the next screen
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verify OTP</Text>
      <Text style={{color:"black"}}>Enter the OTP sent to {email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor={"grey"}
        value={otp}
        onChangeText={setOTP}
        keyboardType="number-pad"
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color:"black"
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    marginTop:20
  },
});

export default OTPScreen;
