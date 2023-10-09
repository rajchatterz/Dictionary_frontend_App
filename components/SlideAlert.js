import React, { useEffect, useState } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

const SlideAlert = ({ message, onSlideUpComplete }) => {
  const [slideAnim] = useState(new Animated.Value(-100)); // Initial position outside the screen
console.log("reached!!")
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300, // Adjust the animation duration as needed
      useNativeDriver: true,
    }).start();

    // Slide up and hide after some time (e.g., 3 seconds)
    const timeout = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Callback to reset the slideAnim value after the animation is complete
        slideAnim.setValue(-100);

        // Call the provided callback to update the state after slide-up animation
        onSlideUpComplete();
      });
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <Text style={styles.messageText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: "15%",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    marginTop:"10%",
    color: 'white',
    fontSize: 16,
  },
});

export default SlideAlert;
