"use client";

import {
  ChakraProvider, Flex
} from '@chakra-ui/react';
import { Inter } from '@next/font/google'
import '../styles/globals.css';
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from '@chakra-ui/react';

import Topbar from '@/components/navigation/topbar';
import { useRef } from 'react';

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

  const [landscape] = useMediaQuery('(min-width: 994px)');

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <html lang="en" ref={ref}>
      <body className={inter.variable}>
        <ChakraProvider>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0, animationDelay: "2s" }}>
            <Topbar landscape={landscape} />
            <Flex direction="column" paddingInline="5%" pb="5%">
              {children}
            </Flex>
            {!landscape && <Mobbar />}
          </motion.div>
        </ChakraProvider>
      </body>
    </html >
  )
}
