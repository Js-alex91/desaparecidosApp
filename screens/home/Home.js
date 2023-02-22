import React from 'react'
import { Box, ScrollView, Text } from 'native-base'
import { Header } from './components/header/Header'
import { MissingList } from './components/missingList/MissingList'

export const Home = () => {
  return (
    <ScrollView>
      <Box style={{flex: 1, backgroundColor: '#000'}}>
        <Header />

        <MissingList />  


      </Box>
    </ScrollView>
  )
}
