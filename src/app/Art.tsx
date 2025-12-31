import Head from 'next/head'
import {
    Box,
    Container,
    Heading, HStack, Image,
    Text,
    VStack,
} from '@chakra-ui/react'
import {COLORS}  from "@/app/constants";

export default function Art() {
    return (
        <Box bg={COLORS.background} pb={8}>
            <Head>
                <title>Art</title>
            </Head>

            <VStack gap={6} textAlign="center" mb={12} bg={COLORS.crystalShade} w={"100%"} py={8} color={COLORS.creamFill}>
                <Heading as={"h2"}>
                    Art & Illustration
                </Heading>
                <Text fontSize="lg" maxW="2xl" color={COLORS.creamFill}>
                    From Art Deco panels to surreal sci-fi landscapes, I like to put all that is vivid in life, on a canvas.
                    Mediums may differ. Below is my latest collection called "The Utility of Creativity." It showcases the
                    potential for art to be multi-functional.
                </Text>
            </VStack>

            <Container w={"100%"} >
                <VStack gap={8} align="stretch">
                    <HStack>
                        <video width="300px" controls>
                            <source src="IMG_6874.mp4" type="video/mp4"/>
                        </video>
                        <Image
                            src="FlamesOfLife.jpeg"
                            alt="FlamesOf Life Jpeg"
                            borderRadius="md"
                            mx="auto"
                            width="350px"
                            height="350px"
                        />
                        <Image
                            src="MenuDisplay.jpeg"
                            alt="Interchanging Menu Display"
                            borderRadius="md"
                            mx="auto"
                            width="300px"
                            height="350px"
                        />
                        <Image
                            src="KeyHolder.jpeg"
                            alt="Key Holder Display"
                            borderRadius="md"
                            mx="auto"
                            width="300px"
                            height="350px"
                        />
                    </HStack>

                </VStack>
            </Container>
        </Box>
    )
}
