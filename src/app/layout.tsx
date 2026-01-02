import { Provider } from "@/components/ui/provider"
import {NavBar} from "@/app/NavBar";
import {Box} from "@chakra-ui/react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}