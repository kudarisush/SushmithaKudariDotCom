import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {COLORS} from "@/app/constants";

export const IntroSection = () => {
    return (
        <>
            <Box id="home" pb={12}>
                <VStack
                    as="main"
                    gap={8}
                    textAlign="center"
                    minH="60vh"
                    justify="center"
                >
                    <Image
                        src="build-a-website-wide.png"
                        alt="Build a Man"
                        width="100%"
                        objectFit="cover"
                        borderRadius="md"
                        mx="auto"
                    />
                    <Heading
                        as="h2"
                        size="2xl"
                        color={COLORS.textDark}
                        letterSpacing="0.05em"
                    >
                        Bringing Visions to Life
                    </Heading>

                    <Text fontSize="lg" color={COLORS.crystalShade}>
                        Software Engineer • Housing Developer • Artist — weaving geometry,
                        color, and story into every project.
                    </Text>
                </VStack>
            </Box>
            <Box id="about" w={"100%"} background={"#F4D085"} borderRadius="md">
                <HStack>
                    <Image
                        h={"300px"}
                        src="TheHeavensWeptShards.png"
                        alt="When the heavens wept shards"
                        borderRadius="md"
                    />
                    <VStack gap={6} align="start">
                        <Heading as="h2" size="xl" color={COLORS.textDark}>
                            About
                        </Heading>
                        <Text color={COLORS.textDark}>
                            I’m Sush Kudari — a software engineer, housing developer, and
                            artist blending Art Deco aesthetics with modern design. I am obsessed with how you interact with my with my work.
                            If you have ever lit a match off my paintings or you have a encountered a bad user experience in the micro-projects
                            I have built, tell me. I want to know what your experience is.
                        </Text>
                    </VStack>
                </HStack>
            </Box>
        </>
    )
}