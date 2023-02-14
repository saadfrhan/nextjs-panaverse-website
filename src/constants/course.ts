export const core_courses = {
  description: `Every participant of the program will start by completing the following three core courses:`,
  courses: [
    {
      number: "I",
      heading: "CS-101: Object-Oriented Programming using TypeScript",
      slug: "/courses/cs-101-object-oriented-programming-using-typescript"
    },
    {
      number: "II",
      heading: `W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform`,
      slug: "/courses/w2-201-developing-planet-scale-web-2.0-serverless-cloud-cloud-apps-and-apis-using-next.js-13-and-cloud-development-kit-(cdk)-for-terraform"
    },
    {
      number: "III",
      heading: `W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps`
    }
  ]
}

export const course_slugs = [
  "ac-351-ambient-computing-with-voice-assistants-and-matter-protocol-devices", "ac-361-embedded-programming-using-c-and-rust",
  "bio-361-bioinformatics-with-python", "cn-351-certified-kubernetes-application-developer-(ckad)", "cn-361-developing-multi-cloud-apis-using-cdk-for-terraform", "cs-101-object-oriented-programming-using-typescript",
  "ai-351-developing-planet-scale-intelligent-apis-and-python-programming",
  "ai-361-deep-learning-and-mlops",
  "bio-351-python-for-biologists",
  "mv-361-developing-planet-scale-open-virtual-and-augmented-metaverse-experiences",
  "npa-351-ccna-200-301-certification",
  "w2-201-developing-planet-scale-web-2.0-serverless-cloud-cloud-apps-and-apis-using-next.js-13-and-cloud-development-kit-(cdk)-for-terraform", "w3-351-developing-smart-contracts-and-planet-scale-web-3.0-dapps"
]

export const specs = {
  description: `After completing the first three quarters the participants will select one or more specializations consisting of two courses each:`,
  specializations: [{
    number: "I",
    heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.`,
    courses: [{
      number: "IV",
      heading: `W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps`,
      slug: "/courses/w3-351-developing-smart-contracts-and-planet-scale-web-3.0-dapps"
    },
    {
      number: "V",
      heading: `MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences`,
      slug: "/courses/mv-361-developing-planet-scale-open-virtual-and-augmented-metaverse-experiences"
    }]
  },
  {
    number: "II",
    heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description: `The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.`,
    courses: [{
      number: "IV",
      heading: `AI-351: Developing Planet-Scale Intelligent APIs and Python Programming`,
      slug: "/courses/ai-351-developing-planet-scale-intelligent-apis-and-python-programming"
    },
    {
      number: "V",
      heading: `AI-361: Deep Learning and MLOps`,
      slug: "/courses/ai-361-deep-learning-and-mlops"
    }]
  },
  {
    number: "III",
    heading: "Cloud-Native Computing Specialization",
    description: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. `,
    courses: [{
      number: "IV",
      heading: `CN-351: Certified Kubernetes Application Developer (CKAD)`,
      slug: "/courses/cn-351-certified-kubernetes-application-developer-(ckad)"
    },
    {
      number: "V",
      heading: `CN-361: Developing Multi-Cloud APIs using CDK for Terraform`,
      slug: "/courses/cn-361-developing-multi-cloud-apis-using-cdk-for-terraform"
    }]
  },
  {
    number: "IV",
    heading: "Ambient Computing and IoT Specialization",
    description: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.`,
    courses: [{
      number: "IV",
      heading: `AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices`,
      slug: "/courses/ac-351-ambient-computing-with-voice-assistants-and-matter-protocol-devices"
    },
    {
      number: "V",
      heading: `AC-361: Embedded Programming using C and Rust`,
      slug: "/courses/ac-361-embedded-programming-using-c-and-rust"
    }]
  },
  {
    number: "V",
    heading: "Genomics and Bioinformatics Specialization",
    description: `Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.`,
    courses: [{
      number: "IV",
      heading: `Bio-351: Python for Biologists`,
      slug: "/courses/bio-351-python-for-biologists"
    },
    {
      number: "V",
      heading: `Bio-361: Bioinformatics with Python`,
      slug: "/courses/bio-361-bioinformatics-with-python"
    }]
  },
  {
    number: "VI",
    heading: "Network Programmability and Automation Specialization",
    description: `More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.`,
    courses: [{
      number: "IV",
      heading: `NPA-351: CCNA 200-301 Certification`,
      slug: "/courses/npa-351-ccna-200-301-certification"
    },
    {
      number: "V",
      heading: `NPA-361: Network Programmability and Automation`,
      slug: "/courses/npa-361-network-programmability-and-automation"
    }]
  }]
}

