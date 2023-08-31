import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity , Modal , Pressable, Alert } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';


interface Asset {
  uri: string;
}


const UploadPostScreen = ({ navigation }: any) => {
  const [selectedImage, setSelectedImage] = useState<Asset | null>(null);
  const [modalVisible, setModalVisible] = useState(false);


  const logout =() => {
  setModalVisible(true)
  }
  
  const handleImageUpload = () => {
    const options : any  = {
      mediaType: 'photo',
      quality: 0.5,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.errorMessage && response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        if (selectedAsset.uri) {
          setSelectedImage({
            uri: selectedAsset.uri,
          });
        }
      }
    });
  };

  return (
    <View>
      <View style={{flexDirection:"row" , height:70, backgroundColor:"#22225c" , justifyContent: 'space-between', alignItems:"center" , borderBottomEndRadius:10 , borderBottomLeftRadius:10 , paddingHorizontal:10}}>
        <Image source={require("../src/assets/images/profile.png")} style={{height:50, width:50}}></Image>
        <Text style={{color:"#ffffff" , marginRight:30}}>Username</Text>
        <TouchableOpacity onPress={logout}>
        <Image source={require("../src/assets/images/logout.png")} style={{height:30, width:30}}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={handleImageUpload} style={styles.imageContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
        ) : (
          <View>
          <Image source={require("../src/assets/images/blankimage.png")} style={styles.image} />
          <Text style={{color:"black" ,textAlign:"center"}}>Select the image</Text>
          </View>
        )}
      </TouchableOpacity>
      <Button title="Upload" onPress={() => console.log('Image uploaded!')} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you Sure you want to logout ? </Text>
          <View style={{flexDirection:"row" , justifyContent:"space-between" , width:"70%"}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>{
                setModalVisible(!modalVisible)
                ; navigation.navigate("LoginScreen")
              } }>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    width:80,
    padding: 10,
    elevation: 2,
    marginLeft:5
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:"black"
  },
});

export default UploadPostScreen;
