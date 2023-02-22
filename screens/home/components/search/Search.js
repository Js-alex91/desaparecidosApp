import { Box, Input } from 'native-base'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Search = () => {
  return (
    <Box style={{
        alignSelf:'center',
        marginTop: 80,
        backgroundColor: 'white', 
        height: 50, 
        width: '70%',
        borderRadius: 30,
    }}>
        <Box style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            height: '100%',
            paddingHorizontal: 10,
        }}>
            <Box>
                <Ionicons
                    name="search"
                    size={32}
                    color="primary" />
            </Box>

            <Box w='80%' maxW="250px" >
                <Input mx="2" variant="unstyled" placeholder="Buscar desaparecido" w="100%" />
            </Box>
        </Box>
    </Box>
  )
}

export default Search