import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator , Modal , Pressable , Alert } from 'react-native';

interface UploadedImage {
  id: string;
  uri: string;
}

interface UserDetails {
  name: string;
  // Add other user details as needed
}

const PreviousScreen = ({ userDetails }: { userDetails: UserDetails }) => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

 const navigation = useNavigation()
  const logout =() => {
    setModalVisible(true)
    }
  useEffect(() => {
    // Simulating image fetching delay with setTimeout
    setTimeout(() => {
      setUploadedImages([
        { id: '1', uri: 'https://cdn.pixabay.com/photo/2016/04/06/15/58/mannequin-1312106_640.jpg' },
        { id: '2', uri: 'https://cdn.pixabay.com/photo/2016/04/06/15/58/mannequin-1312106_640.jpg' },
        { id: '3', uri: 'https://cdn.pixabay.com/photo/2016/04/06/15/58/mannequin-1312106_640.jpg' },
        // Add more image URLs here
      ]);
      setIsLoading(false);
    }, 2000); // Simulated delay of 2 seconds
  }, []);

  const deleteImage = (id: string) => {
    setUploadedImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <View>
    <View style={{flexDirection:"row" , height:70, backgroundColor:"#22225c" , justifyContent: 'space-between', alignItems:"center" , borderBottomEndRadius:10 , borderBottomLeftRadius:10 , paddingHorizontal:10}}>
    <Image source={require("../src/assets/images/profile.png")} style={{height:50, width:50}}></Image>
    <Text style={{color:"#ffffff" , marginRight:50}}>Username</Text>
    <TouchableOpacity onPress={logout}>
        <Image source={require("../src/assets/images/logout.png")} style={{height:30, width:30}}></Image>
        </TouchableOpacity>
  </View>
    <View style={styles.container}>
      <Text>User: {userDetails?.name}</Text>
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={uploadedImages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.uri }} style={styles.image} />
              <TouchableOpacity onPress={() => deleteImage(item.id)} style={styles.button}>
                <Text style={{color:"#ffffff"}}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Edit', item.id)} style={styles.button}>
                <Text style={{color:"#ffffff"}}>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
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
              style={[styles.buttonNew, styles.buttonClose]}
              onPress={() =>{
                setModalVisible(!modalVisible)
                ; navigation.navigate("LoginScreen")
              } }>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonNew, styles.buttonClose]}
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

    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#22225c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonNew: {
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

export default PreviousScreen;
