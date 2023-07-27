import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

const UploadFileScreen = () => {
  const handleFileUpload = async () => {
    try {
      const document = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      const { uri, type, name } = document;
      const reference = storage().ref(`uploads/${name}`);
      await reference.putFile(uri, { contentType: type });

      const downloadURL = await reference.getDownloadURL();

      console.log('Download URL:', downloadURL);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload File" onPress={handleFileUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UploadFileScreen;
