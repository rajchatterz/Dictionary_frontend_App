import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { useNavigation } from '@react-navigation/native';
import Stepper from './service_order';

const Pickup = ({}) => {
  const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
  const [chosenDate, setChosenDate] = useState(tomorrow);
  const [chosenTime, setChosenTime] = useState(0);


  const formatDate = (date) => {
    const dateNumber = date.toLocaleDateString('en-US', { day: 'numeric' });
    let dayName = date.toLocaleDateString('en-US', { weekday: 'short',day: 'numeric' }).substring(3,6);
    if(dateNumber.length==1){
     dayName = date.toLocaleDateString('en-US', { weekday: 'short',day: 'numeric' }).substring(2,5);
    }else{
    dayName = date.toLocaleDateString('en-US', { weekday: 'short',day: 'numeric' }).substring(3,6);
    }
   
    return { dayName, dateNumber };
  };

  const timeSlots = [
    '11 AM - 1 PM',
    '1 PM - 3 PM',
    '3 PM - 5 PM',
    '5 PM - 7 PM',
     '7 PM - 9 PM',
     '8 PM - 9 PM'

  ];

  const renderTimeSlots = () => {
    return (
      <View style={styles.timeSlotsContainer}>
        {timeSlots.map((timeSlot, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeSlot,
              {
                backgroundColor:
                  chosenTime === index ? '#2D70BC' : '#F5F5F5', 
              },
            ]}
            onPress={() => {
        setChosenTime(index);
        console.log('Selected time:', timeSlots[index]);
      
      }} >
            <Text style={[
              styles.timeSlotText,
              {
                color:
                  chosenTime === index ? 'white' : 'black',              
              },
            ]}>{timeSlot}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const navigation = useNavigation();

  


  return (
    <View style={styles.container}>
       <Text style={styles.boxTitle}>Select Pickup Date and Time</Text>
      <View style={styles.row}>
        {[0, 1, 2, 3,4,5,6].map((index) => {
          const date = new Date(chosenDate);
          date.setDate(chosenDate.getDate() + index);
          const isSelected = date.toDateString() === chosenDate.toDateString();
          const { dayName, dateNumber } = formatDate(date);
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateBox,
                isSelected && { backgroundColor: '#2D70BC' },
              ]}
              onPress={() => {
                console.log('Selected date:', date.toLocaleDateString());
                setChosenDate(date);
            
               
              }}>
            
              <Text style={[styles.dayNameText, isSelected && { color: 'white' }]}>
                {dayName}
              </Text>
              <View style={styles.line}></View>
              <Text style={[styles.dateNumberText, isSelected && { color: 'white' }]}>
                {dateNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.boxTitle}>Select available time slot</Text>
      {renderTimeSlots()}
      
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  boxTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    marginTop:10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBox: {
    width: 40,
    height: 70,
    margin:5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
  dayNameText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 5,
  },
  dateNumberText: {
    fontSize: 14,
    textAlign: 'center',
  },
  timeSlotsContainer: {
    border:1,
    marginTop:5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeSlot: {
    width: '40%',
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeSlotText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Pickup;
