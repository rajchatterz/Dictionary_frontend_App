// BottomScreenDrawer.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BottomScreenDrawer = ({ isVisible, content, onClose, handleClick , buttonText , heading }) => {
  const windowHeight = Dimensions.get('window').height;
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(isVisible);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    console.log("requesting to close")
    setIsBottomSheetOpen(false);
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button}>

      </TouchableOpacity>

      <Modal animationType="none" transparent={true} visible={isBottomSheetOpen} onRequestClose={handleCloseBottomSheet}>
        <View style={styles.modalContainer}>
          <View style={[styles.bottomSheet, { height: windowHeight * 0.45 }]}>
            <View style={{ flex: 0, width: '100%', justifyContent: 'flex-end', flexDirection: 'row' }}>
              <TouchableOpacity onPress={handleCloseBottomSheet}>
                <View style={{ padding: 0 }}>
                  <Ionicons name="close-outline" size={26} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              {/* Render content based on prop value */}
              <Text style={{marginBottom:20,fontSize: 18, fontWeight: 'bold',textAlign:'center'}}>{heading}</Text>
<View >
{content}
</View>
              
              <TouchableOpacity onPress={() => { handleCloseBottomSheet(); handleClick() }} style={styles.bottom_button}>
                <Text style={{ color: 'white' ,alignSelf:'center'  }}>{buttonText}</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomScreenDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 12,

  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 20,
    bottom: -1,
    borderColor: '#09458C',
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 24,
  },

  bottom_button: {
    width: 300,
    height: 50,
    backgroundColor: '#3730a3',
    borderRadius: 4,
    alignSelf: 'center', // Add this line to center the button horizontally
    justifyContent: 'center',
    marginTop: 2, // Add this line to center the button vertically
    
  },
});
