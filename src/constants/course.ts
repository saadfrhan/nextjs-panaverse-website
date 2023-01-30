import { Item } from "@/ts";

export const courses: Item = {
  "Core Courses": [{
    main: "Core Courses",
    mainDesc: `Every participant of the program will start by completing the following three core courses:`,
    number: "I",
    heading: "CS-101: Object-Oriented Programming using TypeScript",
    description: `We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.`
  },
  {
    number: "II",
    heading: `W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform`,
    description: `The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).`
  },
  {
    number: "III",
    heading: `W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps`,
    description: `In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.`
  }],
  "Specialized Tracks": [{
    main: "Specialized Tracks",
    mainDesc: `After completing the first three quarters the participants will select one or more specializations consisting of two courses each:`,
    number: "I",
    heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.`,
    courses: [{
      number: "IV",
      heading: `W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps`
    },
    {
      number: "V",
      heading: `MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences`
    }]
  }],

}