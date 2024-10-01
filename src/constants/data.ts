export const footerSocialLinks = [
    {
        href: "/whatsapp",
        label: "Whatsapp",
    },
    {
        href: "/line",
        label: "Line",
    },
    // {
    //     href: "/viber",
    //     label: "Viber",
    // },
    {
        href: "telegram",
        label: "Telegram",
    },
    {
        href: "/instagram",
        label: "Instagram",
    },
    {
        href: "/facebook",
        label: "Facebook",
    },
    // {
    //     href: "/shopify",
    //     label: "Shopify",
    // },
    {
        href: "/woocommerce",
        label: "WooCommerce",
    },
];

export const footerCompanyLinks = [
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/career",
        label: "Career",
    },
    {
        href: "/contact",
        label: "Contact Us",
    },
];
export const footerInsiderLinks = [
    {
        href: "/pricing",
        label: "Pricing",
    },
    {
        href: "/support",
        label: "Help Center",
    },
    {
        href: "#",
        label: "Documentation",
    },
    {
        href: "#",
        label: "API Reference",
    },
    {
        href: "#",
        label: "Roadmap",
    },
    {
        href: "#",
        label: "Mobile App",
    },
    {
        href: "#",
        label: "ChatGPT",
    },
    {
        href: "#",
        label: "System Status",
    },
];

export const footerResourcesLinks = [
    {
        href: "/partner",
        label: "Partners",
    },
    {
        href: "/blog",
        label: "Blog",
    },
    // {
    //     href: "#",
    //     label: "Podcast",
    // },
    {
        href: "/customer",
        label: "Customers",
    },
    {
        href: "#",
        label: "Community",
    },
    {
        href: "/agency",
        label: "Agency Service",
    },
    // {
    //     href: "#",
    //     label: "Free Tools",
    // },
];

interface AdvantagesType {
    sectionHeading: string;
    sectionDescription: string;
    advantages: {
        id: number;
        heading: string;
        description: string;
        color: string;
        duration: number;
    }[];
}

export const landingAdvantages: AdvantagesType = {
    sectionHeading: "Choose the Digitize Bird Advantage",
    sectionDescription:
        "It's easy to see why many businesses are moving into Digitize Bird conversational suite, most of them with WhatsApp.",
    advantages: [
        {
            id: 1,
            heading: "Conversational Marketing",
            description:
                "WhatsApp CTA on Social Ads, Broadcast and Customer Profiling.",
            color: "var(--sky-500)",
            duration: 3000,
        },
        {
            id: 2,
            heading: "Conversational Commerce",
            description: "WhatsApp automation, order management, sales reporting",
            color: "var(--yellow-500)",
            duration: 3500,
        },
        {
            id: 3,
            heading: "Conversational Support",
            description: "Shared inbox, chatbot, customer satisfaction report.",
            color: "var(--emerald-500)",
            duration: 4000,
        },
        {
            id: 4,
            heading: "Conversational Care",
            description: "Live chat, post-purchase, loyalty, re-engagement.",
            color: "var(--purple-500)",
            duration: 4500,
        },
    ],
};

export const partnerAdvantages: AdvantagesType = {
    sectionHeading: "Let's team up",
    sectionDescription:
        "Marketing firm, development agency, automation strategists, ecommerce experts, designers, freelance developers... this program is for you.",
    advantages: [
        {
            id: 1,
            heading: "Agency & Freelancer",
            description:
                "This program is geared toward development, digital marketing agencies and freelancers, who manage tech stack for their clients.",
            color: "var(--sky-500)",
            duration: 3000,
        },
        {
            id: 2,
            heading: "Technology",
            description:
                "Open a wealth of growth opportunities through building onto Digitize Bird’s API. Reach brands to provide value across the ecommerce ecosystem.",
            color: "var(--yellow-500)",
            duration: 3500,
        },
        {
            id: 3,
            heading: "Ambassador",
            description:
                "You're an existing Digitize Bird client, and you want to share your experience with friends and peers. You plan on sharing via social media, blog posts, etc.",
            color: "var(--emerald-500)",
            duration: 4000,
        },
        {
            id: 4,
            heading: "Affiliate",
            description:
                "This program is for social influencers, content publishers, educators, or video creators who want to promote Digitize Bird to their audience.",
            color: "var(--purple-500)",
            duration: 4500,
        },
    ],
};

export const whyPartner = [
    {
        id: 1,
        heading: "Lead Sharing",
        description:
            "Generate leads through our agency directory and get leads whenever we have a customer that needs your services.",
    },
    {
        id: 2,
        heading: "Revenue sharing",
        description:
            "Receive revenue share for Digitize Bird customers you refer or manage. Get rewarded with an industry leading commission.",
    },
    {
        id: 3,
        heading: "Dedicated support",
        description:
            "Get a dedicated partner manager to stay in constant communication and give the best support to your clients.",
    },
    {
        id: 4,
        heading: "Marketing support",
        description:
            "We will help drive awareness for your business with personalized co-marketing initiatives, and much more.",
    },
];

export const PartnerFaq = [
    {
        id: "item-1",
        question: "Are there any fees to join the Partner Program?",
        answer:
            "Absolutely not! We want to work together as a team and reward you for your investment, time, and trust.",
    },
    {
        id: "item-2",
        question: "How are referrals tracked?",
        answer:
            "For affiliate partners, Digitize Bird will provide you with an affiliate URL link via Rewardly. Once your contact sign-ups and completes the payment, they'll be considered as your referrals and will be automatically updated in Rewardly. For agency/channel/developer partners who play a more involved role in closing sales, a tracking system specific to their preferred option can be set up upon discussion.",
    },
    {
        id: "item-3",
        question: "How do I get paid?",
        answer:
            "DigitizeBird disburses payouts when a minimum of $500 have accumulated in your partner account. Payments are usually disbursed via Stripe, Paypal, or direct bank transfer. This can be set up based on cost convenience and partner’s preference.",
    },
    {
        id: "item-4",
        question: "How much commission do I get?",
        answer:
            "For referral partners DigitizeBird will offer a 50% one time commission for each subscription. For agency/channel/developer partner involved with DigitizeBird in doing business development and co-marketing campaigns together- DigitizeBird will offer a 20% Monthly recurring commission for each subscription.",
    },
    {
        id: "item-5",
        question: "What are the differences between referral partner and agency partner?",
        answer:
            "Referral partners can be anyone from a content creator to a developer to an agency. Referral partners act on their own accord to refer users to DigitizeBird and maintain a very low touch point in converting the customer. Agency or developers maintain a close relationship with DigitizeBird and require a contract signing to get started. There are also more benefits to being an agency or developer partner. To find out these perks contact our partner team at redwan@digitizebird.ai.",
    },
];

export const InstagramFaq = [
    {
        id: "item-1",
        question: "What is a shared inbox for Instagram?",
        answer:
            "A shared inbox for Instagram allows more than one person to login to the same inbox and respond to customer messages collaboratively. So, a modern shared inbox should also have some useful features, such as ticket management, activity tracking, and collision detection.",
    },
    {
        id: "item-2",
        question: "Do you use the official Meta API?",
        answer:
            "Yes, we use the official Meta API for Facebook, Instagram and WhatsApp connection.",
    },
    {
        id: "item-3",
        question: "How many Instagram accounts can I connect on DigitizeBird?",
        answer:
            "Connect as many Instagram accounts as you want. We dare you!",
    }
];

export const lineFaq = [
    {
        id: "item-1",
        question: "Do you use official Line API?",
        answer:
            "Yes, we use the official Line API.",
    },
    {
        id: "item-2",
        question: "Why should I use Digitize Bird alongside Line?",
        answer:
            "A Line account can only accommodate one user per phone. This limitation creates support issues for medium and large brands and e-commerce stores. However, with Digitize Bird, all your agents can collaborate and reply to incoming Line messages from the Digitize Bird inbox. You can also create Line chatbots to automate messages.",
    },
    {
        id: "item-3",
        question: "What is a shared inbox for Line?",
        answer:
            "A shared inbox for Line allows more than one person to login to the same Line inbox and respond to customer messages collaboratively. So, a modern shared inbox should also have some useful features, such as ticket management, activity tracking, and collision detection.",
    },
    {
        id: "item-4",
        question: "How many Line accounts can I connect on Digitize Bird?",
        answer:
            "You can connect as many Line accounts as you want.",
    }
];

export const telegramFaq = [
    {
        id: "item-1",
        question: "Do you use official Telegram API?",
        answer:
            "Yes, we use the official Telegram API.",
    },
    {
        id: "item-2",
        question: "Why should I use Digitize Bird alongside Telegram?",
        answer:
            "A Telegram account can only accommodate one user per phone. This limitation creates support issues for medium and large brands and e-commerce stores. However, with Digitize Bird, all your agents can collaborate and reply to incoming Line messages from the Digitize Bird inbox. You can also create Line chatbots to automate messages.",
    },
    {
        id: "item-3",
        question: "What is a shared inbox for Telegram?",
        answer:
            "A shared inbox for Telegram allows more than one person to login to the same Telegram inbox and respond to customer messages collaboratively. So, a modern shared inbox should also have some useful features, such as ticket management, activity tracking, and collision detection.",
    },
    {
        id: "item-4",
        question: "How many Telegram accounts can I connect on Digitize Bird?",
        answer:
            "You can connect as many Telegram accounts as you want.",
    }
];

export const wooCommercFAQ = [
    {
        id: "item-1",
        question: "Does MyAlice have a WordPress plugin?",
        answer: "Yes, you can download the Digitize Bird Plugin from WordPress Library"
    },
    {
        id: "item-2",
        question: "Do you have a WooCommerce live chat?",
        answer: "Yes, you can install our WooCommerce live chat on your store website and chat with your web visitors in real-time from DigitizeBird dashboard."
    },
]

export const countriesRate = [
    {
        value: "argentina",
        label: "Argentina",
    },
    {
        value: "brazil",
        label: "Brazil",
    },
    {
        value: "egypt",
        label: "Egypt",
    },
    {
        value: "france",
        label: "France",
    },
    {
        value: "united arab emirates",
        label: "United Arab Emirates",
    },
]

export const whatsAppContent = {
    heading_one: 'Lets connect all the communication dots!',
    section_one_paragraph: 'Converting leads into customers, generating attractive broadcast campaigns, creating repeat customers, increasing customer loyalty, upsell or cross-sell — Digitize Bird covers all the use-cases of WhatsApp!',
    section_two_heading: 'Generate campaigns through WhatsApp template message',
    section_two_paragraph: 'Create campaigns and send them out to all your loyal customer base via broadcasting. Increase your sales on special occasions and during the holiday season!',
    rating_para: 'The fastest growing communication platform built on official WhatsApp cloud APIs. You no longer need multiple tools for your teams and can work with a single workspace.',
    section_three_heading: "Send welcome message on WhatsApp",
    section_three_paragraph: "Create campaigns and send them out to all your loyal customer base via broadcasting. Increase your sales on special occasions and during the holiday season!",
    section_four: "List products, sell, and collect payments via WhatsApp",
    section_four_paragraph: "WhatsApp Commerce is definitely the future for a lot of businesses out there. Same like how you have a catalog of products on a Shopify store, you can list products on your WhatsApp business account, allow customers to add products to cart, and make payments effortlessly via payment gateways.",
    section_five: "Upto 60% abandoned cart recovery via automated triggers",
    section_five_paragraph: "Send WhatsApp notifications to all the users dropping off after adding products to your cart. Creatively design your messages so that it turns into a sale!",
    section_six: "Send shipping notifications",
    section_six_paragraph: "Send automated shipping notifications after every sale has been completed to your customers so that they can track their orders throughout the process!",
    section_seven: "Send relevant upsell messages to customer&apos;s WhatsApp",
    section_seven_paragraph: "If your product needs repeated usage for a longer period to get results, then why not ask the customer to re-order? Great for increasing the lifetime value of the customer."
}

export const instagramContent = {
    heading_one: 'The modern way to sell and support on Instagram',
    section_one_paragraph: 'A workspace for all your Instagram communication. Sales, customer support, store orders, and business insights in one place.',
    section_two_heading: 'Generate campaigns through WhatsApp template message',
    section_two_paragraph: 'Create campaigns and send them out to all your loyal customer base via broadcasting. Increase your sales on special occasions and during the holiday season!',
    rating_para: 'The fastest growing communication platform built on official Meta cloud APIs. You no longer need multiple tools for your teams and can work with a single platform.',
}

export const facebookContent = {
    heading_one: 'The modern way to sell and support on Facebook',
    section_one_paragraph: 'A workspace for all your Facebook Messenger communication. Sales, customer support, store orders, and business insights in one place.',
    section_two_heading: 'Generate campaigns through WhatsApp template message',
    section_two_paragraph: 'Create campaigns and send them out to all your loyal customer base via broadcasting. Increase your sales on special occasions and during the holiday season!',
    rating_para: "The fastest growing communication platform built on official Meta cloud APIs. You no longer need multiple tools for your teams and can work with a single platform."
}

export const lineContent = {
    heading_one: 'The modern way to sell and support on Line',
    section_one_paragraph: 'A workspace for all your Line communication. Sales, customer support, store orders, and business insights in one place.',
    section_two_heading: 'Work together',
    section_two_paragraph: 'Your customers are on Line. All the time. So when they&apos;re looking to buy, and they message you, they&apos;re at their moment of highest intent. Engaging with these visitors through a team collaboration inbox.',
    section_two_points: ["Shared inbox for teams", "Assign conversations to agents", "Measure agent performance"],
    section_three_heading: "Convert, not just converse",
    section_three_paragraph: "When customers come to your store intending to buy something, you need to help him as much as possible. Which includes placing the order for him. With Digitize Bird deep eCommerce integration, you can now do it with a single click while chatting with your customer.",
    section_three_points: ["Order create, update or refund", "Product recommender", "Automated updated inventory"],
    section_four_heading: "Front line of support",
    section_four_paragraph: "Almost half of customers find waiting to speak with customer support most annoying. Provide immediate self service, cost-effectively with Digitize Bird automation.",
    section_four_points: ["Personalized support 24/7", "Handover from Bot to Human", "Add NLP to support in native language"],
    rating_para: "The fastest growing communication platform built on official cloud APIs. You no longer need multiple tools for your teams and can work with a single platform."
}

export const wooCommerceContent = {
    heading_one: 'Connect your WooCommerce Store to WhatsApp',
    section_one_paragraph: 'A workspace to manage all your WhatsApp conversations, sales, and marketing to turn you and your team into revenue champions.',
    section_two_heading: 'Work together',
    section_two_paragraph: 'Your customers are on Line. All the time. So when they&apos;re looking to buy, and they message you, they&apos;re at their moment of highest intent. Engaging with these visitors through a team collaboration inbox.',
    section_two_points: ["Shared inbox for teams", "Assign conversations to agents", "Measure agent performance"],
    rating_para: "When you succeed, we succeed. Our team of experts will go above and beyond to understand your business and implement a solution that shows immediate impact."
}

export const telegramContent = {
    heading_one: 'The modern way to sell and support on Telegram',
    section_one_paragraph: 'A workspace for all your Telegram communication. Sales, customer support, store orders, and business insights in one place.',
    section_two_heading: 'Work together',
    section_two_paragraph: 'Your customers are on Telegram. All the time. So when they&apos;re looking to buy, and they message you, they’re at their moment of highest intent. Engaging with these visitors through a team collaboration inbox.',
    section_two_points: ["Shared inbox for teams", "Assign conversations to agents", "Measure agent performance"],
    section_three_heading: "Convert, not just converse",
    section_three_paragraph: "When customers come to your store intending to buy something, you need to help him as much as possible. Which includes placing the order for him. With Digitize Bird deep eCommerce integration, you can now do it with a single click while chatting with your customer.",
    section_three_points: ["Order create, update or refund", "Product recommender", "Automated updated inventory"],
    section_four_heading: "Front line of support",
    section_four_paragraph: "Almost half of customers find waiting to speak with customer support most annoying. Provide immediate self service, cost-effectively with Digitize Bird automation.",
    section_four_points: ["Personalized support 24/7", "Handover from Bot to Human", "Add NLP to support in native language"],
    rating_para: "The fastest growing communication platform built on official cloud APIs. You no longer need multiple tools for your teams and can work with a single platform."
}

export const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

