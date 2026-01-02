import Head from 'next/head'
import {
    Box,
    Container,
    Heading, Stack, Image,
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
                        Housing Developer
                    </Heading>
                    <Text fontSize="lg" color={COLORS.textDark}>
                        Applying Engineering to more than just tech. Working through government processes
                        and civil blueprints to build more housing amongst the California housing shortage.
                    </Text>

                    <Stack gap={8} align="stretch" direction={{ base: "column", md: "row" }}>
                        <Box p={6} borderRadius="md" w={"100%"}>
                            <Heading size="md" mb={2}>
                                Building a House on Land in San Diego -- An ongoing journey
                            </Heading>
                            <Text  pb={12}>
                                A small informal information pamphlet on getting started in building your own rentals.
                            </Text>
                            <iframe src="https://docs.google.com/document/d/1-2u5C-PAEn1DpAymg1wiEU6WCGzQmIKzsd-Mh6RFTXE/edit?tab=t.0" width="100%" height="480" allow="autoplay"></iframe>
                        </Box>

                        <Box p={6} borderRadius="md" w={"100%"}>
                            <Heading size="md" mb={2}>
                                Efforts to Improve Undeveloped E17th Street
                            </Heading>
                            <Text pb={6}>
                                Leading a community effort to improve undeveloped E17th Street to allow neighbors to
                                split their lots and
                                double the amount of housing per lot.
                            </Text>
                            <iframe
                                src="https://docs.google.com/document/d/1mMXfH8HmPm-EwSiGSHyyNnPS8365dJOVi4MYOg6_xDs/edit?tab=t.0"
                                width="100%" height="480" allow="autoplay"></iframe>
                        </Box>
                    </Stack>

                </VStack>

            </Container>
        </Box>
    )
}
