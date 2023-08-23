import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you have the FontAwesome icons installed

const dummyNotifications = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have a new message from a friend.',
    timestamp: '2023-08-25 09:30 AM',
    read: false,
  },
  {
    id: 2,
    title: 'Reminder',
    message: "Don't forget to submit your assignment by 5 PM.",
    timestamp: '2023-08-25 12:00 PM',
    read: true,
  },
  // Add more notifications here
];

const OrderStatus = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={dummyNotifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.notification, item.read ? styles.read : styles.unread]}>
            <FontAwesome name="bell" size={24} color={item.read ? '#888' : '#007AFF'} />
            <View style={styles.notificationContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // A light background color
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
 
  notification: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for cards
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  read: {
    backgroundColor: '#f0f0f0',
  },
  unread: {
    backgroundColor: '#ffffff',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 14,
    color: '#777',
  },
});

export default OrderStatus;
