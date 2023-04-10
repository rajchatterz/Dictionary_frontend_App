import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TrackOrder from './TrackOrder';

const OrderStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
    <TrackOrder/>
      
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  activeTab: {
    flex: 1,
    backgroundColor: '#4338ca',
    marginRight:10,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center'
  },
  inactiveTab: {
    flex: 1,
    backgroundColor: '#c7d2fe',
    borderRadius: 20,
    marginRight:10,
    borderWidth: 1,
    borderColor: '#c7d2fe',
    padding: 10,
    alignItems: 'center'
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default OrderStatus;
