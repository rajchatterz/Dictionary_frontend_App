import React, { useRef, useEffect , useState } from "react";
import { Pressable, StyleSheet, Text, Image, View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const LoginOptions = () => {
    const navigation = useNavigation();

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "886878491301-3l5cesi8giepfpunu592gj7o9t6n4b19.apps.googleusercontent.com",
        iosClientId: "886878491301-edq8q2n3tp747f63tgmb7fithlmn73in.apps.googleusercontent.com",
        webClientId: "886878491301-acc2qkks9l0aag6vo9gf39phtbp53c6k.apps.googleusercontent.com",
    });


    const refRBSheet = useRef();
    const googleSignInRef = useRef();

    useEffect(() => {
        // Open the bottom sheet when the component mounts
        refRBSheet.current.open();
        handleEffect();
    }, [[response, token]]);





    //google signin functions --------------------------------------------------------------------

    async function handleEffect() {
        const user = await getLocalUser();
        console.log("user", user);
        if (!user) {
            if (response?.type === "success") {
                // setToken(response.authentication.accessToken);
                getUserInfo(response.authentication.accessToken);
            }
        } else {
            setUserInfo(user);
            console.log("loaded locally");
        }
    }

    const getLocalUser = async () => {
        const data = await AsyncStorage.getItem("@user");
        if (!data) return null;
        return JSON.parse(data);
    };

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            console.log(userInfo.email)
            console.log(userInfo?.picture)
            console.log(userInfo.name)

             //login success
            //store pro-Image , Name , email
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
        }
    };

    //--------------------------------------------------------------------------------







    const handleLoginWithPhone = () => {
        // Handle logic for login with phone
        console.log("Login with phone button pressed");
        refRBSheet.current.close();
        navigation.navigate("Login");
    };

    const handleLoginWithGoogle = () => {
        // Handle logic for login with Google
        console.log("Login with Google button pressed");
        refRBSheet.current.close();
        //googleSignInRef.current.onPromptAsync();
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "grey"
            }}
        >

            <RBSheet
                ref={refRBSheet}
                height={300}
                openDuration={250}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "grey"
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                <View style={{ padding: 20 }}>

               
            
                    <Pressable
                        style={styles.button}
                        onPress={handleLoginWithPhone}
                    >
                        <Icon name="phone" size={30} color="white" style={{ marginRight: 20 }} />
                        <Text style={styles.btntxt}>Continue With Phone</Text>
                    </Pressable>


                {/* login with google button working fine */}
                    <Pressable
                            style={styles.Googlebutton}
                            onPress={() => { promptAsync() }}
                        >
                            <Image
                                source={require('../../assets/sign_in_with_google.jpg')}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: "cover",
                                    borderRadius: 8
                                }}
                            />
                        </Pressable>


                    {/* <Button
                        title="remove local store"
                        onPress={async () => await AsyncStorage.removeItem("@user")}
                    /> */}



                </View>
            </RBSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#6A0DAD",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row"
    },
    Googlebutton: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    btntxt: {
        fontSize: 28,
        fontWeight: "400",
        color: "white",
    },
});

export default LoginOptions;
