import Head from 'next/head'
import {
    Box,
    Container,
    Heading, Stack, Image,
    Text,
    VStack, AspectRatio,
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
                <Text fontSize="lg" maxW="2xl" color={COLORS.creamFill} p={6}>
                    From Art Deco panels to surreal sci-fi landscapes, I like to put all that is vivid in life, on a canvas.
                    Mediums may differ. Below is my latest collection called "The Utility of Creativity." It showcases the
                    potential for art to be multi-functional.
                </Text>
            </VStack>

            <Stack px={8} direction={{ base: "column", lg:"row" }} display={"flex"} alignContent={"center"}>
                <Box alignContent={"center"}>
                    <AspectRatio  width={{ base: "100%", lg:"350px"}}
                                  height={{ base: "100%", lg:"350px"}} ratio={1}>
                        <iframe
                            title="naruto"
                            src="IMG_6874.mp4"
                            allowFullScreen
                        />
                    </AspectRatio>

                </Box>

                <Image
                    src="FlamesOfLife.jpeg"
                    alt="FlamesOf Life Jpeg"
                    borderRadius="md"
                    mx="auto"
                    width={{ base: "100%", lg:"350px"}}
                    height={{ base: "100%", lg:"350px"}}
                />
                <Image
                    src="MenuDisplay.jpeg"
                    alt="Interchanging Menu Display"
                    borderRadius="md"
                    mx="auto"
                    width={{ base: "100%", lg:"350px"}}
                    height={{ base: "100%", lg:"350px"}}
                />
                <Image
                    src="KeyHolder.jpeg"
                    alt="Key Holder Display"
                    borderRadius="md"
                    mx="auto"
                    width={{ base: "100%", lg:"350px"}}
                    height={{ base: "100%", lg:"350px"}}
                />
            </Stack>

        </Box>
    )
}
