import { Box, Text } from 'native-base'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Search from '../search/Search';

export const Header = () => {
  return (
    <Box 
        bg="primary"
        style={{
        padding: 20,
        height: 250,
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 80,
    }}>
        <Box style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center'
        }}>
            <Box>
                <Text
                    color='white'
                >1</Text>
            </Box>
            <Box >
            <Ionicons name="md-contact" size={32} color="green" />
            </Box>
        </Box>

        <Search />
        
       
    </Box>
  )
}
