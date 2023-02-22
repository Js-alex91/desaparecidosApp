import { Box, Button, FlatList, Heading, Image, Text,  } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'

const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Aafreen Khan",
  timeStamp: "12:47 PM",
  recentText: "Good Day!",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Sujitha Mathur",
  timeStamp: "11:11 PM",
  recentText: "Cheer up, there!",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "Anci Barroco",
  timeStamp: "6:22 PM",
  recentText: "Good Day!",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Aniket Kumar",
  timeStamp: "8:56 PM",
  recentText: "All the best",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}, {
  id: "28694a0f-3da1-471f-bd96-142456e29d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
}];

export const MissingList = () => {
  return (
    <Box mt='40px'>
      <Heading fontSize="xl" p="4" pb="3" textAlign='center' color='primary'>
        Lista de Desaparecidos
      </Heading>

      <FlatList
        data={data} 
        horizontal={true}
        renderItem={({
          item
        }) => (
          <Box 
            style={styles.item}
          >
              <Image
                style={styles.image}
                source={{uri: item.avatarUrl}}
                alt={item.fullName}
                size="xl"
              />
              <Box p="4">
                <Text> Nombre: <Text fontWeight='bold'>{item.fullName}</Text></Text>
                <Text> Edad: <Text fontWeight='bold'>{item.timeStamp}</Text></Text>
                <Text> Nacionalidad: <Text fontWeight='bold'>{item.recentText}</Text></Text>

                <Button
                  mt="4"
                  bg="primary"
                >
                  <Text color='#fff'>Más información</Text>
                </Button>
              </Box>
          </Box>
        )
      }>

      </FlatList>
    </Box>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    width: 250,
    height: 350,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  image: {
    flex: 1,
    width: null,
    height: null,
    // resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
})