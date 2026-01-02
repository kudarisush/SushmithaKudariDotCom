'use client'
import Head from 'next/head'
import {
  Box,
  Container,
  VStack,
  Heading,
  Text, HStack,
} from '@chakra-ui/react'
import Engineering from './Engineering'
import HousingDevelopment from './Housing'
import Art from './Art'

import {COLORS}  from "@/app/constants"
import {NavBar} from "@/app/NavBar"
import {IntroSection} from "@/app/IntroSection"
import {Contact} from "@/app/Contact";

export default function Home() {

  return (
      <Box bg={COLORS.background} w={"100%"}>
        <Head>
          <title >Sush Kudari • Engineer • Developer • Artist</title>
          <meta
              name="description"
              content="Sush Kudari’s personal site — Engineer, Housing Developer, Artist"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box p={{base: 8, lg: 30}}><NavBar /></Box>
        <IntroSection />

        <Box id="engineering" pt={12}><Engineering /></Box>

        <Box id="housing" pt={12}><HousingDevelopment /></Box>

        <Box id="art"><Art /></Box>

        <Box><Contact/></Box>

      </Box>
  )
}
