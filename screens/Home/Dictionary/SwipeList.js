import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useRef,useEffect} from "react";
import Feed from "../../../LakshitModule/Feed";
import Swiper from "react-native-deck-swiper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function SwipeList() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dictionarybackendapp-production.up.railway.app/v1/wordifyme/user-word-category/65798b945026a7002a24e194",
          {
            headers: {
              Authorization: `Bearer ${`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc5OGI5NDUwMjZhNzAwMmEyNGUxOTQiLCJpYXQiOjE3MDI4OTY1MDcsImV4cCI6MTcwMjkxMDkwNywidHlwZSI6ImFjY2VzcyJ9.Kxp_NmYw8IK0fAyewKb4NOiLxaEfViMroeWvN2xfc0o`}`,
            },
          }
        );
        const newData = response.data.data;
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const swiperRef = useRef();

  const navigation = useNavigation()

  const onSwiped = () => {
    setIndex((index + 1) % Feed.length);
  };

  const Card = (card) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShMOHBfPGb7D50_ZYOhDLdZl0mzLNr5Dayw&usqp=CAU' }} style={styles.cardImage} />
      <View style={styles.textcontainer}>
        <Text style={styles.headtext}>{card?.meaning}</Text>
        <MaterialCommunityIcons
          name="volume-high"
          size={32}
          style={{ textAlign: "right", right: 20, bottom: 25 }}
          onPress={()=>console.warn("Speak")}
        />
        <Text style={styles.caption}>{card?.use_case}</Text>
        <Text style={{top:90,left:20,position:'absolute'}} >{card?.word}</Text>
      </View>
    </View>
  );
};

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        backgroundColor="white"
        cards={data.flatMap((category) => category.wordsList)}
        cardIndex={index}
        renderCard={(card) => Card(card)}
        onSwiped={onSwiped}
        disableBottomSwipe
        disableTopSwipe
        animateCardOpacity
        stackSize={2}
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
    backgroundColor: "grey",
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
