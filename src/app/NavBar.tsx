import {Flex, Heading, HStack, Link} from "@chakra-ui/react";
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
        <Flex as="nav" position="sticky" top="0" zIndex="overlay" bg={COLORS.background} py={4} align="center" justify="space-between" mb={8}>
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

            <HStack gap={6}>
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
            </HStack>
        </Flex>
    )
}