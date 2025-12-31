import Head from 'next/head'
import {
    Box,
    Container,
    Heading, HStack, Image,
    Text,
    VStack,
} from '@chakra-ui/react'
import {COLORS}  from "@/app/constants";

export default function Housing() {
    return (
        <Box bg={COLORS.background} color={COLORS.textDark}>
            <Image
                src="wide_crystal_search.jpg"
                alt="Wide Crystal Landscape"
                width="100%"
                height="350px"
                borderRadius="md"
                mx="auto"
            />

            <Container maxW="container.lg" py={8}>
                <VStack gap={6} textAlign="center">
                    <Heading as="h2" size="2xl" color={COLORS.textDark}>
                        Housing Development Project Manager
                    </Heading>
                    <Text fontSize="lg" color={COLORS.textDark}>
                        Applying Engineering to more than just tech. Working through government processes
                        and civil blueprints to build more housing in the California shortage.
                    </Text>
                </VStack>

                <HStack gap={8} align="stretch">
                    <Box p={6} borderRadius="md">
                        <Heading size="md" mb={2}>
                            Building a House on Land in San Diego -- An ongoing journey
                        </Heading>
                        <Text>
                            A small informal information pamphlet on getting started in building your own rentals.
                        </Text>
                        <iframe src="https://docs.google.com/document/d/1-2u5C-PAEn1DpAymg1wiEU6WCGzQmIKzsd-Mh6RFTXE/edit?tab=t.0" width="640" height="480" allow="autoplay"></iframe>
                    </Box>

                    <Box p={6} borderRadius="md">
                        <Heading size="md" mb={2}>
                            Efforts to Improve Undeveloped E17th Street
                        </Heading>
                        <Text>
                            Leading a community effort to improve undeveloped E17th Street to allow neighbors to split their lots and
                            double the amount of housing per lot.
                            <iframe src="https://docs.google.com/document/d/1mMXfH8HmPm-EwSiGSHyyNnPS8365dJOVi4MYOg6_xDs/edit?tab=t.0" width="640" height="480" allow="autoplay"></iframe>
                        </Text>
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}
