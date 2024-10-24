import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const CustomModal = ({ children, Tittle, OpenButton }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.showModalButton}
        onPress={() => setModalVisible(true)}
      >
        {OpenButton}
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View>
              <Text className="text-black font-extrabold text-lg mt-3">{Tittle}</Text>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModalButton: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 12,
  },
  buttonTextBlack: {
    color: 'black',
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonTextRed: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold"
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // bg-black with bg-opacity-50
  },
  modalContent: {
    backgroundColor: '#fff', // bg-white// p-6
    borderRadius: 12, // rounded-lg
    width: '80%', // w-4/5
  },
  modalTitle: {
    fontSize: 20, // text-lg
    fontWeight: 'bold', // font-bold
  },
  modalText: {
    marginTop: 8, // mt-2
    fontSize: 16, // text-base
  },
  closeModalButton: {
    backgroundColor: 'white', // bg-red-500
    padding: 12, // p-3
    borderRadius: 12, // rounded-lg
    marginTop: 16, // mt-4
  },
});
