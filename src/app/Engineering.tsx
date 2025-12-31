import Head from 'next/head'
import {
    Box,
    Container,
    Heading,
    Text,
    Link,
    VStack, Image, HStack, Flex,
} from '@chakra-ui/react'
import {COLORS}  from "@/app/constants";

export default function Engineering() {
    return (
        <Box bg={COLORS.background} w={"100%"}>
            <Head>
                <title>Engineering • Sush Kudari</title>
            </Head>

            <Container>
                <VStack gap={6} textAlign="center">
                    <Heading as="h2" size="2xl" color={COLORS.textDark}>
                        Engineering
                    </Heading>
                    <Text fontSize="lg" color={COLORS.textDark}>
                        Front-end and aspiring full stack software engineer, trying to solve complex problems with precision, quality, and a touch of "ME".

                        My approach to engineering is "be me." I have a strong focus on codebase health, reducing engineer friction and delivering
                        quality features that streamline the user experience. Data driven decision making is a daily
                        part of my life. I not only look at user experience data, but I look at the data that allows me as an
                        engineer to be at my best.

                        I am an early adopter of AI tools. However, I have a holistic approach to AI tools as a mid level engineer.
                        My philopsohy is that AI is a powerful tool used to supplement my work -- not replace it (as you can hopefully tell by this website).
                        I use it to build starting templates, write manual test cases, and give me code reviews on specific details I am prone to overlook.
                        I will also pit AI tools against one another for multiple use cases and will determine which one is the best sidekick for the job.

                    </Text>

                    <HStack gap={2} textAlign="center" w={"100%"}>
                        <Heading as={"h3"} color={COLORS.textDark}>My Sources:</Heading>
                        <Link href={"https://www.amazon.com/Research-Methods-Psychology-Glynis-Breakwell/dp/0857022644"} target="_blank"><u>Research methods in Psychology</u>,&nbsp;&nbsp;&nbsp;</Link>
                        <Link href={"https://www.amazon.com/Peak-Performance-Elevate-Burnout-Science/dp/162336793X/ref=sr_1_1?crid=1TTRTNPK4E9D0&dib=eyJ2IjoiMSJ9.YxvqFIjETx5fI-lmAmOCMSjGAb4_F31aCNx4BYUMt9696Rnho3mPhPbiY0-eit8-Z4UgsuVV7QFgox6WVWmT-lb0C9-eyw9Yd_mPivsAWjZu1m6dzTNMP5h_RtBoocZNx1SW2nzCbejXaRfgAGeJb0eZYlBXuZ_cTiXVyG-ExegQRghLhu1iMQeb6lnmzFlBQloCcNe1LaOSzuZQiRR-_u1Datl8WwPt5OTN72vlKTc.qDufiViv27GfJCfLbaWQ5Jujn6mDMNIGa3gOmLSaDTo&dib_tag=se&keywords=Peak+Performance+book&qid=1766723510&sprefix=peak+performance+book+%2Caps%2C151&sr=8-1"} target="_blank"><u>Peak Performance</u>,&nbsp;</Link>
                        <Link href={"https://www.amazon.com/dp/0735211736/?bestFormat=true&k=the%20daily%20stoic%20book&ref_=nb_sb_ss_w_scx-ent-bk-ww_k1_1_9_de&crid=1X1411M0KDQ6B&sprefix=the%20Dailu"} target="_blank"><u>The Daily Stoic</u>&nbsp;</Link>
                        <Image
                            width="350px"
                            src="looking_out_noborder.png"
                            alt="Top Secret Page"
                            margin="auto"
                            borderRadius="md"
                        />
                    </HStack>
                </VStack>

                <VStack gap={8} align="stretch" bg={COLORS.rust} color={COLORS.creamFill} borderRadius="md" pt={"-2px"}>
                    <Box p={6} >
                        <Heading size="md" mb={2}>
                            <u>
                                <Link href={"https://colab.research.google.com/drive/1Tk6Zm2F-HZYjLDU_-1-lPcCfdEQxML7e?usp=sharing"} target={"_blank"} color={COLORS.creamFill}>Sewer Plan Checker</Link>
                            </u>
                        </Heading>
                        <Text>
                            AI-powered semantic and vision analysis of multi-unit sewer plans.
                            Script should be able to take in a sewer plan set and a specific city's guidelines on sewer plan requirements
                            and output all the violations that a city engineer would flag.
                            Should detects city code violations, augments GIS data, and delivers instant
                            feedback to civil engineers.
                        </Text>
                    </Box>

                    <Box p={6} borderRadius="md" >
                        <Heading size="md" mb={2}>
                            <u>
                                <Link color={COLORS.creamFill}>Stoic Stocks</Link>
                            </u>
                        </Heading>
                        <Text>
                            A fun React + Next.js app that allows mutliple friends to "paper-trade." Origins began in 2023 as
                            a HTML single page application that only ran on local host. Redone, in 2025-2026, this work showcases
                            foundational React, Next.js and some fullstack skills. App was used in a "Wolf of Wallstreet" party
                            by 10-12 friends. Trader with the largest portfolio at the end of the night was given their own&nbsp;

                            <Link href={"https://www.amazon.com/LEGO-Champions-Martin-Building-Featuring/dp/B09XWXM8R8/ref=sr_1_2?crid=HORFLLIE8924&dib=eyJ2IjoiMSJ9.tso-L0huSodrndvsrXBwgRT6l3JrxIou_c2oDSMN1-ZpG2-vzwW9T0RP-d0aWdP8C9NGxd2CHQFIkg7TQ7J4R7vj4xEZ-gyj3tYhm1-LNUbps337qtgpYsQENjMDayKbUPNSXWQ5NUQ-JubHAJjLvpETLfJezV5MtrXZmjVmLHhh5Xya_Cd0_QVJI9mbwR9rBbOcRNPTnLaX-c_s5fACR8bKduheKRzE1BcGt5HdJ0kVSD9zIRxWanwHVgxwx4fjUaFNDLtHrVeeD1Feu8zw4Lh_MbERjbefYEBF9NqxNlo.VD04HigrZrKrRLPxTcSojXUyHO0eJm3WeZ1Qy_-TAig&dib_tag=se&keywords=lego+aston+martin&qid=1766725598&sprefix=lego+aston+%2Caps%2C164&sr=8-2"} target={"_blank"}> Aston Martin</Link>.
                        </Text>
                    </Box>

                    <Box p={6} borderRadius="md">
                        <Heading size="md" mb={2}>
                            <u>AI Job Applier Agent</u>
                        </Heading>
                        <Text>
                            COMING SOON...
                        </Text>
                    </Box>

                    <Box p={6} borderRadius="md">
                        Want to see more of my work? Check out my <u><b><a href={"#resume"}> resume</a></b></u>. If you like it, shoot me a message!
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}
