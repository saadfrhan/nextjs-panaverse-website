"use client";

import {
  Button,
  ChakraProvider, Flex
} from '@chakra-ui/react';
import Image from "next/image";
import Panaverse from '../images/panaverse.png';
import { Inter } from '@next/font/google'
import Link from 'next/link';
import '../styles/globals.css';
import { motion } from "framer-motion";

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.variable}>
        <ChakraProvider>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Flex paddingBlock={5} paddingInline={10} gap={6} alignContent="center" alignItems="center" justifyContent="flex-start">
              <Image alt="panaverse" src={Panaverse} className="nav-pv" />
              <Button>
                <Link href="/">Home</Link>
              </Button>
              <Button>
                <Link href="courses">Courses</Link>
              </Button>
            </Flex>
            {children}
          </motion.div>
        </ChakraProvider>
      </body>
    </html >
  )
}
