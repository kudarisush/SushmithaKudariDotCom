"use client";

import {useColorMode} from "@/components/ui/color-mode";
import {Box, Image} from "@chakra-ui/react";
import {useState, useEffect} from 'react'; // <-- Import hooks

export const HeroImage = () => {
  const {colorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  // 1. State to track if the component has mounted on the client
  const [hasMounted, setHasMounted] = useState(false);

  // 2. After the component mounts, set the state to true
  useEffect(() => {
    setHasMounted(true);
  }, []); // Empty array ensures this runs only once on mount

  // 3. On server-render and the first client-render (before mount),
  //    hasMounted will be 'false'. We return null
  //    so the server and client HTML match.
  if (!hasMounted) {
    return <Box height={20}/>; // Placeholder to avoid layout shift
  }

  // 4. After mounting, hasMounted is 'true', and we can
  //    safely render the correct image based on the client's theme.
  return (
    <>
      {isDark ? (
        <Image src={"/next_dark.svg"} alt="Next.js Logo" height={20}/>
      ) : (
        <Image src={"/next.svg"} alt="Next.js Logo" height={20}/>
      )}
    </>
  );
}