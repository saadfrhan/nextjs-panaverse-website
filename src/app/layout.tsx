"use client";

import {
  ChakraProvider, Flex
} from '@chakra-ui/react';
import { Inter } from '@next/font/google'
import '../styles/globals.css';
import { motion } from "framer-motion";
import { useMediaQuery } from '@chakra-ui/react';

import Topbar from '@/components/navigation/topbar';
import { Mobbar } from '@/components/navigation/mobbar';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [landscape] = useMediaQuery('(min-width: 994px)', {
    ssr: true,
    fallback: false
  });

  return (
    <html lang="en">
      <head />
      <body className={inter.variable}>
        <ChakraProvider>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Topbar landscape={landscape} />
            <Flex direction="column" paddingInline="3%">
              {children}
            </Flex>
            {!landscape && <Mobbar />}
          </motion.div>
        </ChakraProvider>
      </body>
    </html >
  )
}
