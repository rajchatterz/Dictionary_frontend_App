import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddressForm = () => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleAddressLine1Change = (text) => {
    setAddressLine1(text);
  };

  const handleAddressLine2Change = (text) => {
    setAddressLine2(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleStateChange = (text) => {
    setState(text);
  };

  const handleZipCodeChange = (text) => {
    setZipCode(text);
  };

  const handleSubmit = () => {
    const address = `${addressLine1}, ${addressLine2}, ${city}, ${state} ${zipCode}`;
    console.log('Submitted address:', address);
    // Do something with the address, such as sending it to a server or storing it in state
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleAddressLine1Change}
        value={addressLine1}
        placeholder="Address Line 1"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleAddressLine2Change}
        value={addressLine2}
        placeholder="Address Line 2"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleCityChange}
        value={city}
        placeholder="City"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleStateChange}
        value={state}
        placeholder="State"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleZipCodeChange}
        value={zipCode}
        placeholder="Zip Code"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddressForm;
