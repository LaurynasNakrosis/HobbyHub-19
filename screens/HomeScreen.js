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
        hobbyName: 'Simming',
        photoURL: 'https://images.unsplash.com/photo-1504349127888-41',
        age: 30,
    },
    {   
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        hobbyName: 'Simming',
        photoURL: 'https://images.unsplash.com/photo-1504349127888-41',
        age: 25,
    },
    {   id: 3,
        firstName: 'Elon',
        lastName: 'Musk',
        hobbyName: 'Simming',
        photoURL: 'https://images.unsplash.com/photo-1504349127888-41',
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
                    source={require("../assets/favicon.png")} />
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
                renderCard={(card) => (
                   <View key={card.id} style={styles.container}>
                        <Text>{card.firstName}</Text>
                        <Text>{card.lastName}</Text>
                    </View> 
                )  
        }
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
    },
    wrapper: {
        flex: 1, // flex-1
        marginTop: -6, // -mt-6
      },
    screen:{
        flex: 1,// flex-1
    }
  });
export default HomeScreen