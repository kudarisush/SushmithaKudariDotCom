import {Flex, Heading, Link, Stack, Menu, Portal, Button} from "@chakra-ui/react";
import NextLink from "next/link";
import {COLORS} from "@/app/constants";;

export const NavBar = () => {
    const tabs = [
        { label: 'Home',    href: '#home'    },
        { label: 'About',   href: '#about'   },
        { label: 'Engineering', href: '#engineering' },
        { label: 'Housing', href: '#housing' },
        { label: 'Art',     href: '#art'     },
        { label: 'Resume',  href: '#resume' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <Stack  direction={{ base: "column", lg:"row" }} >
            <Flex as="nav" position="sticky" top="0" zIndex="overlay" bg={COLORS.background} align="center" justify="space-between" w={{base:"100%",md:"70%"}}>
                <Link
                    as={NextLink}
                    href="#home"
                    _hover={{ textDecoration: 'none' }}
                >
                    <Heading
                        as="h1"
                        fontSize="30px"
                        color={COLORS.crystalShade}
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                    >
                        Sush Kudari
                    </Heading>
                </Link>
            </Flex>
            <Stack direction={{ base: "column", lg:"row" }} gap={6} w={{base:"100%",md:"50%"}}>
                {tabs.map(({ label, href }) => (
                    <Link
                        as={NextLink}
                        key={label}
                        href={href}
                        fontWeight="bold"
                        color={COLORS.textDark}
                        _hover={{ color: COLORS.crystalFill }}
                    >
                        {label}
                    </Link>
                ))}
            </Stack>
        </Stack>
    )
}