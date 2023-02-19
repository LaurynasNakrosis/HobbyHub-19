import { useNavigation } from '@react-navigation/core'
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';

const DUMMY_DATA = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Douglas',
        hobbyName: 'Swimming',
        photoURL: 'https://avatars.githubusercontent.com/u/24712956?v=4',
        age: 30,
    },
    {   
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        hobbyName: 'Swimming',
        photoURL: 'https://avatars.githubusercontent.com/u/24712956?v=4',
        age: 25,
    },
    {   id: 3,
        firstName: 'Elon',
        lastName: 'Musk',
        hobbyName: 'Swimming',
        photoURL: 'https://media.licdn.com/dms/image/C4D03AQEogDmoacJn4Q/profile-displayphoto-shrink_200_200/0/1639867842897?e=1681948800&v=beta&t=SX0E2UNvwp32eQhiskghNQaQ_HQd9-uKfQobsQ1wG6M',
        age: 75,
    },
];
const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screen} >
        {/* Header */}
        <View style={styles.row}>
            <TouchableOpacity >
                <Image style={styles.margin}
                    source={require("../assets/neon-chat.png")} />
            </TouchableOpacity>
            <TouchableOpacity >
                <AntDesign style={styles.margin}
                    name="pluscircle" size={45} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Image style={styles.margin}
                    source={require("../assets/chat-4-512.png")} />
            </TouchableOpacity>
        </View>
        {/* End of Header */}
        {/*Cards*/}
            <View style={styles.wrapper}>
                <Swiper 
                    containerStyle={{backgroundColor: 'transparent'}}
                    cards={DUMMY_DATA} 
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    overlayLabels={{
                        left: {
                            title: "NOPE",
                            style: {
                                label:{
                                    textAlign: "right",
                                    color: "red",
                                }
                            }
                        },
                        right: {
                            title: "MATCH",
                            style: {
                                label:{
                                    color: "green",
                                }     
                            }
                        }
                    }} 
                    renderCard={(card) => (
                        <View 
                            key={card.id} 
                            style={styles.container}
                        >
                            <Image 
                                source={{uri: card.photoURL}} 
                                style={styles.image} 
                            />
                            <View style={styles.titleBox}>
                                <View> 
                                    <Text style={styles.text}>
                                        {card.firstName} {card.lastName}
                                    </Text>
                                    <Text>
                                        {card.hobbyName}
                                    </Text>
                                </View>
                                <Text style={styles.text}>{card.age}</Text>

                            </View>
                        </View>                    
                    )}
                />
            </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#EF4444', // Red 500
        height: '75%', // h3/4
        borderRadius: 16, // rounded-xl
      },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
    },
    margin:{
        margin: 10,
        width: 45,
        height: 45,
        color: 'white',
    },
    wrapper: {
        flex: 1, // flex-1
        marginTop: -6, // -mt-6
      },
    screen:{
        flex: 1,// flex-1
    },
    image: {
        position: 'absolute', // absolute
        top: 0, // top-0
        width: '100%', // w-full
        height: '100%', // h-full
        borderRadius: 16, // rounded-xl
        shadowColor: '#000', // shadow-xl
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: '#FFF', // bg-white
        zIndex: 10, // z-10
        shadowColor: '#000', // shadow-
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    titleBox:{
        position: 'absolute', // absolute
        bottom: 0, // bottom-
        backgroundColor: '#FFF', // bg-white
        width: '100%', // w-full
        textAlign: 'center', // text-center
        fontWeight: 'bold', // text-bold
        color: '#000', // text-black
        height: '15%', // h-100
        justifyContent: 'space-between', //
        alignItems: 'between', // space-between
        flexDirection: 'row', // row
        padding: 10, // padding-10
        borderBottomRightRadius: 16, // rounded-xl
        borderBottomLeftRadius: 16, // rounded-xl
        shadowColor: '#000', // shadow-xl
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        zIndex: 10, // z-10
    },       
    text: {
        fontWeight: 'bold', // text-bold
        color: '#000', // text-black
        fontSize: 20, // text-20
    },
    
    
  });
export default HomeScreen