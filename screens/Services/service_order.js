import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity ,TextInput,Button} from "react-native";
import CheckBox from 'expo-checkbox'
import Pickup from "./pickup_datetime";
import { Image } from 'react-native';
import image from '../../assets/delivery.png';
import { NavigationContainer, useNavigation,useRoute } from '@react-navigation/native';

const Stepper = () => {

  const route = useRoute();
  const serviceDetails = {
    "Washing and Fold": {
      title: "Washing and Fold",
      subtitle: "1 day",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, quam at eleifend scelerisque, lectus eros blandit leo, non luctus quam nibh eu felis. Proin accumsan leo quis nisl tristique, sed congue nisi finibus. Praesent suscipit tincidunt eleifend. ",
    },
    "Washing": {
      title: "Washing",
      subtitle: "2-3 days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, quam at eleifend scelerisque, lectus eros blandit leo, non luctus quam nibh eu felis. Proin accumsan leo quis nisl tristique, sed congue nisi finibus. Praesent suscipit tincidunt eleifend. ",
    },
    
  };
 // function getServiceDetails(serviceName) {
   // return serviceDetails[serviceName];
  //}
  
  const { serviceName } = "Washing";
  //const { title, subtitle, description } = getServiceDetails(serviceName);
  console.log(serviceName);


  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [addressLine1Error, setAddressLine1Error] = useState('');
const [cityError, setCityError] = useState('');
const [stateError, setStateError] = useState('');
const [zipCodeError, setZipCodeError] = useState('');

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
    if (addressLine1 === '') {
      setAddressLine1Error('Please enter your address');
      console.log('error');
    } else {
      setAddressLine1Error('');
     
    }

    
  if (city=== '') {
    setCityError('Please enter your city');
  } else {
    setCityError('');
  }

  if (state=== '') {
    setStateError('Please enter your state');
  } else {
    setStateError('');
  }

  if (zipCode=== '') {
    setZipCodeError('Please enter your zip code');
  } else {
    setZipCodeError('');
  }

  if (addressLine1!=''&& city!='' && state!='' && zipCode!='' ) {
    onNext();
    console.log('Form submitted');
  }
  
   
  };
 

  const onNext = () => {
    if (step === 4) {
      if (confirmed) {
        console.log("Thank you!");
      } else {
        setConfirmed(true);
      }
    } else {
      setStep(step + 1);
    }
  }

  const handleButtonPress = () => {
   
    handleSubmit();
  
  };

  const onConfirm = () => {
    setConfirmed(true);
    console.log("Thank you!");
    navigation.navigate('HomeScreen');
  };
  
  const onBack = () => {
    setStep(step - 1);
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.stepper}>
          <View
            style={[
              styles.step,
              step >= 1 && styles.completed,
              step === 1 && styles.active,
            ]}
            onPress={onBack}
            disabled={step === 1}
          >
            <Text style={styles.stepText}>1</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={[
              styles.step,
              step >= 2 && styles.completed,
              step === 2 && styles.active,
            ]}
            onPress={onBack}
            disabled={step == 2}
          >
            <Text style={styles.stepText}>2</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={[
              styles.step,
              step >= 3 && styles.completed,
              step === 3 && styles.active,
            ]}
            onPress={onBack}
            disabled={step == 3}
          >
            <Text style={styles.stepText}>3</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={[
              styles.step,
              step >= 4 && styles.completed,
              step === 4 && styles.active,
            ]}
      
            disabled={step == 4}
          >
            <Text style={styles.stepText}>4</Text>
          </View>
        </View>
        {step === 1 && (
          <><View style={styles.box}>
            <View style={styles.dry}>
              <Text style={styles.title}>Drying</Text>
              <Text style={styles.subtitle}>1</Text>
            </View>

            <View style={styles.bulletPoints}>
            
              <View style={styles.bulletPoint}>
                <Text style={styles.bulletPointText}>At our company, we offer top-quality dry cleaning services for delicate and sensitive fabrics. Our experienced professionals use advanced techniques and eco-friendly solvents to remove dirt and stains, leaving your clothes looking fresh and new. We also provide washing and ironing services to ensure that your everyday clothes are clean, crisp, and ready to wear. Let us take care of your laundry needs, so you can focus on the more important things in life.</Text>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    disabled={true}
                    style={{ height: 30, width: 30 }}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => { setToggleCheckBox(newValue); console.log(newValue); } } />
                </View>
              </View>
            </View>
          </View><TouchableOpacity
            style={styles.button}
            onPress={onNext}

          >
              <Text style={styles.buttonText}>
                {step === 3 ? "Confirm" : "Continue"}
              </Text>
            </TouchableOpacity></>
        )}
        {step === 2 && (
          <View style={styles.content}>
          <Pickup />
          <TouchableOpacity
    style={styles.button}
    onPress={onNext}
  >
    <Text style={styles.buttonText}>Schedule Pickup</Text>
  </TouchableOpacity>
          </View>
        )}
         {step === 3 && (
          <View>
       <Text style={styles.confirmationText}>Please enter your address </Text>
      <TextInput
        style={{ height: 50,width:350, borderColor: 'gray', borderWidth: 1 , marginTop:20,marginBottom:10,padding:10,borderRadius:5}}
        onChangeText={handleAddressLine1Change}
        value={addressLine1}
        placeholder="Flat Number / Society name"
      />
      {addressLine1Error ? (
  <Text style={styles.errorText}>{addressLine1Error}</Text>
) : null}
      <TextInput
        style={{ height: 50, borderColor: 'gray', borderWidth: 1 ,marginBottom:20 ,padding:10,borderRadius:5}}
        onChangeText={handleAddressLine2Change}
        value={addressLine2}
        placeholder="Nearby"
      />
      <TextInput
        style={{ height: 50, borderColor: 'gray', borderWidth: 1,marginBottom:10 ,padding:10,borderRadius:5}}
        onChangeText={handleCityChange}
        value={city}
        placeholder="City"
      />
      {cityError ? (
  <Text style={styles.errorText}>{cityError}</Text>
) : null}
      <TextInput
        style={{ height: 50, borderColor: 'gray', borderWidth: 1,marginBottom:10 ,padding:10,borderRadius:5}}
        onChangeText={handleStateChange}
        value={state}
        placeholder="State"
      />
      {stateError ? (
  <Text style={styles.errorText}>{stateError}</Text>
) : null}
      <TextInput
        style={{ height: 50, borderColor: 'gray', borderWidth: 1,marginBottom:10 ,padding:10,borderRadius:5}}
        onChangeText={handleZipCodeChange}
        value={zipCode}
        placeholder="Zip Code"
      />
    {zipCodeError ? (
  <Text style={styles.errorText}>{zipCodeError}</Text>
) : null}
          <TouchableOpacity
    style={styles.button}
    onPress={handleButtonPress}
  >
    <Text style={styles.buttonText}>Schedule Pickup </Text>
  </TouchableOpacity>
          </View>
        )}
        {step === 4 && (
  <View style={styles.confirmation}>
    <Text style={styles.confirmationText}>Thank you for booking !</Text>
     <Image
      source={image}
      style={{ width: 350, height: 250 }}
    />
    
    <Text style={styles.confirmationText}>Your order has been confirmed . </Text>
    <Text style={styles.confirmationText2}>Your order number is #13456 .</Text>
    <TouchableOpacity style={styles.button}  onPress={onConfirm}>
      <Text style={styles.buttonText}>Return to Home</Text>
    </TouchableOpacity>
  </View>
)}
        
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  confirmation: {
    paddingHorizontal: 30,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  confirmationText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop:20,
  },

  confirmationText2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  confirmButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    width: 350,
    height: 250,
    backgroundColor: "white",
    padding: 16,
    paddingTop: 20,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf:'flex-end',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    marginLeft:100,

  },

  stepper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 8,
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  completed: {
    backgroundColor: "#312e81",
  },
  active: {
    backgroundColor: "#2D70BC",
  },
  stepText: {
    color: "white",
  },
  separator: {
    width: 70,
    height: 2,
    backgroundColor: "#ddd",
  },
  content: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  dry: {
    alignContent: "space-between",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    height: 30,
    alignContent: "space-between",
    justifyContent: "space-between",
    marginRight: 60,
    alignItems: "flex-start",
  },
  subtitle: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    marginBottom: 30,
    marginLeft:217
  },

  bulletPoints: {
    alignSelf: "stretch",
    
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: 'black',
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bulletPointText: {
    marginLeft: 10,
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    
    borderRadius: 25,
    backgroundColor: "#2D70BC",
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Stepper;
