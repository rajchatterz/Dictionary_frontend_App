import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import Feed from "../../../LakshitModule/Feed";
import Swiper from "react-native-deck-swiper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.imageSource }} style={styles.cardImage} />
      <View style={styles.textcontainer}>
        <Text style={styles.headtext}>{card.Interest}</Text>
        <MaterialCommunityIcons
          name="volume-high"
          size={32}
          style={{ textAlign: "right", right: 20, bottom: 25 }}
        />
        <Text style={styles.caption}>{card.caption}</Text>
      </View>
    </View>
  );
};

export default function SwipeList() {
  const [index, setIndex] = useState(0);

  const swiperRef = useRef();

  const navigation = useNavigation()

  const onSwiped = () => {
    setIndex((index + 1) % Feed.length);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        backgroundColor="white"
        cards={Feed}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        onSwiped={onSwiped}
        disableBottomSwipe
        disableTopSwipe
        animateCardOpacity
        stackSize={4}
        stackScale={10}
        stackSeparation={1}
        infinite
      />
      <Ionicons onPress={()=>navigation.navigate('WordList')} name="eye-off-sharp" size={24}color={'black'} style={{bottom: 154,left:170}}/>
      <AntDesign
        onPress={() =>navigation.goBack()}
        style={{ bottom: 184, right: 180 }}
        name="arrowleft"
        size={25}
        color={"black"}
      />
      <Text
        style={{ bottom: 210, right: 65, fontSize: 18, fontWeight: "bold" }}
      >
        Vocabulary mapping
      </Text>
      <View style={{ top: 285, right: 120 }}>
        <AntDesign.Button
          name="questioncircle"
          size={94}
          backgroundColor="transparent"
          underlayColor="transparent"
          activeOpacity={0.3}
          color={"#EE6A6A"}
          onPress={() => swiperRef.current.swipeLeft()}
        />
        <Text style={{ fontSize: 20, left: 40 }}>NO</Text>
      </View>
      <View style={{ top: 150, left: 120 }}>
        <AntDesign.Button
          name="checkcircle"
          size={94}
          backgroundColor="transparent"
          underlayColor="transparent"
          activeOpacity={0.3}
          color={"#5FCD98"}
          onPress={() => swiperRef.current.swipeRight()}
        />
        <Text style={{ fontSize: 20, left: 35 }}>YES</Text>
      </View>
      <View style={{ top: 190 }}>
        <Pressable onPress={() =>navigation.goBack()} style={styles.Button}>
          <Text style={styles.btntext}>Come Back Later</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  card: {
    flex: 0.55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 16,
    top:110
  },
  cardImage: {
    width: "100%",
    resizeMode: "cover",
    flex: 1,
    borderRadius: 16,
  },
  textcontainer: {
    position: "absolute",
    backgroundColor: "white",
    height: 150,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    top: 255,
    width: "100%",
    opacity: 0.7,
  },
  headtext: {
    textAlign: "left",
    left: 20,
    top: 5,
    fontSize: 24,
    fontWeight: "900",
  },
  caption: {
    position: "absolute",
    top: 70,
    left: 20,
  },
  Button: {
    height: 60,
    width: 350,
    borderRadius: 8,
    backgroundColor: "#6A0DAD",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0},
  },
  btntext: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    top: 15,
  },
});
