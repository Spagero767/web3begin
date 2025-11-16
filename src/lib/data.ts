import { type Concept, type GlossaryTerm, type ForumPost } from '@/lib/types';

export const learningPath: Concept[] = [
  {
    slug: 'blockchain-basics',
    title: 'Blockchain Basics',
    description: 'Understand the fundamental technology behind cryptocurrencies and Web3.',
    content: [
      "A blockchain is a decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks.",
      "This ensures the security and integrity of the data. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger. The decentralized database managed by multiple participants is known as Distributed Ledger Technology (DLT).",
      "Blockchain is a type of DLT in which transactions are recorded with an immutable cryptographic signature called a hash."
    ],
    quiz: [
      {
        question: 'What is a key feature of blockchain technology?',
        options: ['Centralized control', 'Immutability', 'Editable records', 'Private data storage'],
        correctAnswer: 1,
        explanation: 'Immutability, the inability to be changed, is a core principle of blockchain, ensuring that transactions are permanent and unalterable.',
      },
      {
        question: 'What is a "block" in a blockchain?',
        options: ['A type of cryptocurrency', 'A collection of transactions', 'A centralized server', 'A user account'],
        correctAnswer: 1,
        explanation: 'A block is a data structure within the blockchain database, where transaction data is permanently recorded. A block records some or all of the most recent transactions not yet validated.',
      },
    ],
  },
  {
    slug: 'smart-contracts',
    title: 'Smart Contracts',
    description: 'Learn about self-executing contracts with the terms of the agreement directly written into code.',
    content: [
      "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss.",
      "They can also automate a workflow, triggering the next action when conditions are met. Smart contracts work by following simple “if/when...then…” statements that are written into code on a blockchain. A network of computers executes the actions when predetermined conditions have been met and verified.",
      "These actions could include releasing funds, registering a vehicle, sending notifications, or issuing a ticket. The blockchain is then updated when the transaction is completed. That means the transaction cannot be changed, and only parties who have been granted permission can see the results."
    ],
    quiz: [
      {
        question: 'What do smart contracts automate?',
        options: ['Email marketing', 'The execution of agreements', 'Social media posting', 'Website design'],
        correctAnswer: 1,
        explanation: 'Smart contracts are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome.',
      },
    ],
  },
  {
    slug: 'dapps',
    title: 'Decentralized Apps (dApps)',
    description: 'Discover applications that run on a decentralized network, not a single computer.',
    content: [
      "A decentralized application (dApp) is an application built on a decentralized network that combines a smart contract and a front-end user interface. In a dApp, the smart contract is what allows the app to connect to the blockchain.",
      "Unlike traditional apps that are hosted on centralized servers (like those owned by Google or Facebook), dApps run on a peer-to-peer network or a blockchain. This means they are not controlled by any single entity, making them resistant to censorship and providing users with more control over their data.",
      "Examples of dApps include decentralized finance (DeFi) platforms, marketplaces for non-fungible tokens (NFTs), and decentralized social media networks."
    ],
    quiz: [
      {
        question: 'Where do dApps run?',
        options: ['On a single server', 'On Google\'s cloud platform', 'On a peer-to-peer network or blockchain', 'On a user\'s local machine only'],
        correctAnswer: 2,
        explanation: 'dApps run on a P2P network or a blockchain, which is what makes them decentralized and not controlled by a single entity.',
      },
    ],
  },
  {
    slug: 'nfts',
    title: 'Non-Fungible Tokens (NFTs)',
    description: 'Explore unique digital assets that represent ownership of real-world items like art, music, and videos.',
    content: [
        "A non-fungible token (NFT) is a unique and non-interchangeable unit of data stored on a digital ledger (blockchain). NFTs can be used to represent easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to establish a verified and public proof of ownership.",
        "The key characteristic of NFTs is 'non-fungible', which means each token is unique and cannot be replaced with another identical token. This is in contrast to 'fungible' assets like currency, where one dollar bill is interchangeable with any other dollar bill.",
        "This uniqueness allows NFTs to act as proof of ownership for digital assets, creating a market for digital art and collectibles that was not previously possible."
    ],
    quiz: [
        {
            question: "What does 'non-fungible' mean?",
            options: ['Easily replaceable', 'Unique and not interchangeable', 'A type of currency', 'A physical object'],
            correctAnswer: 1,
            explanation: "Non-fungible means that an item is unique and cannot be replaced by another identical item. This is what gives NFTs their value as digital collectibles."
        }
    ]
  },
  {
    slug: 'daos',
    title: 'DAOs',
    description: 'Learn about Decentralized Autonomous Organizations, a new form of governance.',
    content: [
      "A decentralized autonomous organization (DAO), sometimes called a decentralized autonomous corporation (DAC), is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government.",
      "DAOs are member-owned communities without centralized leadership. A DAO's financial transaction record and program rules are maintained on a blockchain. The rules of the DAO are established by smart contracts, and decisions are made through proposals and voting by its members.",
      "This structure allows for a more democratic and transparent form of organization, where anyone with a stake can participate in governance."
    ],
    quiz: [
      {
        question: "Who controls a DAO?",
        options: ["A CEO", "A central government", "The organization members", "A board of directors"],
        correctAnswer: 2,
        explanation: "DAOs are controlled by their members, who vote on proposals to make decisions. There is no central authority."
      }
    ]
  },
  {
    slug: 'web3-wallets',
    title: 'Web3 Wallets',
    description: "Your key to accessing the decentralized web. Learn how they work.",
    content: [
        "A Web3 wallet is a digital wallet that allows users to interact with decentralized applications (dApps) and manage their digital assets, such as cryptocurrencies and NFTs. Unlike traditional wallets, Web3 wallets give users full control over their funds through the use of private keys.",
        "When you create a Web3 wallet, you are given a public address and a private key. The public address is like your bank account number, which you can share with others to receive funds. The private key, however, is a secret code that gives you access to your assets. It is crucial to keep your private key secure and never share it with anyone.",
        "Popular Web3 wallets include MetaMask, Trust Wallet, and Ledger. They come in various forms, including browser extensions, mobile apps, and hardware devices, each offering different levels of security and convenience."
    ],
    quiz: [
        {
            question: "What is the most important thing to keep secure in a Web3 wallet?",
            options: ["The public address", "The app password", "The private key", "The transaction history"],
            correctAnswer: 2,
            explanation: "The private key grants access to your funds. If it's lost or stolen, your assets can be lost forever. It must be kept secret and secure."
        }
    ]
  },
];

export const glossary: GlossaryTerm[] = [
  { term: "Blockchain", definition: "A decentralized, distributed, and immutable digital ledger used to record transactions across many computers." },
  { term: "Smart Contract", definition: "A self-executing contract with the terms of the agreement directly written into code, which runs on a blockchain." },
  { term: "dApp (Decentralized Application)", definition: "An application that runs on a decentralized network (like a blockchain), making it resistant to control by a single entity." },
  { term: "Cryptocurrency", definition: "A digital or virtual currency that uses cryptography for security, and is not issued by any central authority." },
  { term: "Gas Fees", definition: "The fees required to successfully conduct a transaction or execute a contract on the Ethereum blockchain." },
  { term: "Wallet", definition: "A digital wallet that allows users to store and manage their cryptocurrencies and interact with dApps." },
  { term: "NFT (Non-Fungible Token)", definition: "A unique digital asset that represents ownership of a specific item or piece of content, recorded on a blockchain." },
  { term: "DAO (Decentralized Autonomous Organization)", definition: "An organization run by code and controlled by its members, without a central authority." },
  { term: "DeFi (Decentralized Finance)", definition: "A movement that aims to build a new, open financial system using decentralized technologies." },
  { term: "Fungibility", definition: "The property of an asset whose individual units are interchangeable and essentially indistinguishable from each other. For example, a dollar is fungible." },
];

export const forumPosts: ForumPost[] = [
    {
        id: 1,
        title: "What's the best wallet for a beginner?",
        author: "CryptoNewbie",
        avatarUrl: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
        date: "2 days ago",
        replies: 5,
        content: "I'm just starting out and there are so many wallets to choose from. I'm looking for something secure but also easy to use. Any recommendations? I've heard of MetaMask and Ledger but not sure which is better for a start."
    },
    {
        id: 2,
        title: "Can someone explain gas fees like I'm five?",
        author: "ETH_Explorer",
        avatarUrl: "https://i.pravatar.cc/40?u=a042581f4e29026704e",
        date: "3 days ago",
        replies: 12,
        content: "I tried to make a transaction on Ethereum and the gas fee was higher than the transaction amount! Why does it fluctuate so much and what am I actually paying for?"
    },
    {
        id: 3,
        title: "Coolest NFT project you've seen recently?",
        author: "ArtCollector",
        avatarUrl: "https://i.pravatar.cc/40?u=a042581f4e29026704f",
        date: "5 days ago",
        replies: 8,
        content: "Looking for some inspiration. What are some of the most innovative or artistically interesting NFT projects out there right now? Not just looking for hype, but real utility or great art."
    },
    {
        id: 4,
        title: "How do DAOs actually make decisions?",
        author: "GovGeek",
        avatarUrl: "https://i.pravatar.cc/40?u=a042581f4e29026704a",
        date: "1 week ago",
        replies: 3,
        content: "I understand the concept of voting, but how does it work in practice? How are proposals created and what stops someone from spamming the system with bad proposals? Are there different voting mechanisms?"
    }
];
