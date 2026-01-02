import {Box, Heading, HStack, Text, Button, VStack, Stack,  Input, Textarea} from "@chakra-ui/react";
import {COLORS} from "@/app/constants";

export const Contact = () => {
    return (
        <Stack p={12} gap={12} justifyContent="center" background={COLORS.rust} direction={{ base: "column", md: "row" }}>
            <Box id="resume" w={{base:"100%" ,md:"50%"}} fontSize={{sm: 24, md:30, }} color={COLORS.creamFill}>
                <h1><u><a href="Sush_Kudari_Resume_2025.pdf" target="_blank">SUSH KUDARI 2025 RESUME 📝</a></u></h1>
            </Box>

            <Box p={4} id="contact" background={COLORS.crystalShade}>
                <form action="https://formsubmit.co/kudarisush@gmail.com" method="POST" style={{width:"100%"}}>
                    <Heading as="h2"  fontSize={{sm: 24, md:30, }} fontWeight={600} pb={4}>
                        Contact Me
                    </Heading>
                    <VStack w={"100%"}>
                        <Input type="text" name="name" placeholder="Your Name"
                               bg={COLORS.creamFill} color={COLORS.textDark}
                               required _placeholder={{ color: COLORS.textDark, opacity: 1 }}
                        />

                        <Input type="email" name="email" placeholder="Your Email"
                               bg={COLORS.creamFill} color={COLORS.textDark}
                               required _placeholder={{ color: COLORS.textDark, opacity: 1 }}/>

                        <Textarea placeholder="Your Message" name="message"
                               bg={COLORS.creamFill} color={COLORS.textDark}
                               required _placeholder={{ color: COLORS.textDark, opacity: 1 }} size="md"/>

                        <Button type="submit" width="100%" bg={COLORS.textDark}>Send</Button>
                    </VStack>

                </form>
            </Box>
        </Stack>
    );
}