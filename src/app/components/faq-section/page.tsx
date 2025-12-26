"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const sample_faqs = [
    {
        question: "How does pricing work?",
        answer: "Our pricing is based on usage and scales with your needs. You only pay for what you use, with transparent per-transaction fees and no hidden costs. We offer both monthly subscriptions and pay-as-you-go options."
    },
    {
        question: "Do my vendors need to create an account to receive payments?",
        answer: "No, vendors don't need to create an account. They can receive payments directly to their bank account or via email. However, creating an account gives them access to additional features like payment history and invoicing tools."
    },
    {
        question: "What payment methods are currently supported on the platform?",
        answer: "We support all major credit and debit cards (Visa, Mastercard, American Express), ACH bank transfers, wire transfers, and digital wallets like Apple Pay and Google Pay. International payments are supported in over 135 currencies."
    },
    {
        question: "Does it cost more to send a payment faster?",
        answer: "Standard payments are processed within 2-3 business days at no additional cost. If you need instant or same-day processing, there's a small expedited processing fee of 1.5% of the transaction amount."
    },
    {
        question: "Do I get charged for my API user?",
        answer: "API access is included in all paid plans at no extra cost. You can create unlimited API users and make up to 10,000 API calls per month. Additional API calls beyond that are charged at $0.01 per call."
    },
    {
        question: "Am I able to set up approval rules?",
        answer: "Yes, you can set up custom approval workflows based on payment amount, vendor, or payment type. Approvals can be routed to specific team members or require multiple approvers for large transactions."
    }
];

const sample_copy = {
    title: "Frequently Asked Questions",
    subtitle: "Answers to common questions about our platform and services.",
    ctaText: "If you can't find an answer, please reach out to our support team. We're always there for you.",
    ctaHref: ""
}

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    subsets: ["latin"],
    weight: ["400"],
});

type Faq = {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    faqs: Faq[];
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
    showCta?: boolean;
    ctaButtonText?: string;
}

export default function FaqSection({
    faqs = sample_faqs,
    title = sample_copy.title,
    subtitle = sample_copy.subtitle,
    ctaText = sample_copy.ctaText,
    ctaHref = sample_copy.ctaHref,
    showCta = true,
    ctaButtonText = "Reach Out"
}: FaqSectionProps) {
    return (
        <div className="w-full flex justify-between px-8 bg-zinc-50 dark:bg-[#131315] border border-gray-200 dark:border-[#1D1D21] overflow-hidden">
            <div className="w-1/3 flex flex-col border-l border-gray-200 dark:border-[#1D1D21]">
                <div className="p-4 flex flex-col gap-4">
                    <div>
                        <h2 className={`text-3xl tracking-wide ${instrumentSerif.className}`}>{title}</h2>
                        <p className="text-sm opacity-80">{subtitle}</p>
                    </div>
                    {
                        showCta &&

                        <div className="flex flex-col gap-4">
                            <p className="text-sm opacity-60">{ctaText}</p>
                            <Button
                                size={"sm"}
                                className="p-2 rounded-none w-fit shadow-none"
                                asChild
                            >
                                <a href={ctaHref}>{ctaButtonText}</a>
                            </Button>
                        </div>
                    }
                </div>

                <div className="flex-1 w-full relative overflow-hidden min-h-[200px]">
                    <SvgIllustration />
                </div>

            </div>

            <div className="w-2/3 py-8 h-full border-x border-gray-200 dark:border-[#1D1D21]">
                <Accordion
                    type="single"
                    collapsible
                    className="border-y border-gray-200 dark:border-[#1D1D21]"
                    defaultValue="item-1"
                >
                    {
                        faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index}
                                className="px-4"
                            >
                                <AccordionTrigger className="font-medium tracking-wider hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance opacity-60 tracking-wide">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

function SvgIllustration() {
    return (
        <svg className="absolute inset-0 w-full h-full text-zinc-400 dark:text-zinc-500" xmlns="http://www.w3.org/2000/svg">
            

            {/* Background grid */}
            <rect width="100%" height="100%" fill="url(#faq-grid)" />
            <defs>
                {/* Grid Pattern */}
                <pattern id="faq-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
                </pattern>

                {/* Radial gradient for glow effect */}
                <radialGradient id="faq-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Central glow with pulse */}
            <motion.circle
                cx="50%"
                cy="50%"
                r="80"
                fill="url(#faq-glow)"
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                style={{ transformOrigin: "center" }}
            />

            {/* Animated rotating circles */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                style={{ transformOrigin: "50% 50%" }}
            >
                <circle cx="50%" cy="50%" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" opacity="0.4" />
            </motion.g>

            <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                style={{ transformOrigin: "50% 50%" }}
            >
                <circle cx="50%" cy="50%" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="12 6" opacity="0.6" />
            </motion.g>

            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                style={{ transformOrigin: "50% 50%" }}
            >
                <circle cx="50%" cy="50%" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.8" />
            </motion.g>

            {/* Center dot with pulse */}
            <motion.circle
                cx="50%"
                cy="50%"
                r="4"
                fill="currentColor"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                style={{ transformOrigin: "center" }}
            />
            <motion.circle
                cx="50%"
                cy="50%"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.5"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                style={{ transformOrigin: "center" }}
            />

            {/* Animated flowing lines - horizontal */}
            <motion.line
                x1="0"
                y1="50%"
                x2="35%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="8 8"
                opacity="0.5"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />
            <motion.line
                x1="65%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="8 8"
                opacity="0.5"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />

            {/* Animated flowing lines - vertical */}
            <motion.line
                x1="50%"
                y1="0"
                x2="50%"
                y2="35%"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="8 8"
                opacity="0.5"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />
            <motion.line
                x1="50%"
                y1="65%"
                x2="50%"
                y2="100%"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="8 8"
                opacity="0.5"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />

            {/* Floating indicator dots */}
            <motion.g
                animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
                <circle cx="25%" cy="30%" r="3" fill="currentColor" />
            </motion.g>
            <motion.g
                animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
            >
                <circle cx="75%" cy="70%" r="3" fill="currentColor" />
            </motion.g>
            <motion.g
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
            >
                <circle cx="70%" cy="25%" r="2" fill="currentColor" />
            </motion.g>

            {/* Corner accents with blink */}
            <motion.rect
                x="10%"
                y="15%"
                width="8"
                height="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.rect
                x="82%"
                y="75%"
                width="8"
                height="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
            />
            <motion.circle
                cx="15%"
                cy="80%"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
            />

            {/* Small cross markers */}
            <motion.g
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
            >
                <line x1="85%" y1="20%" x2="90%" y2="20%" stroke="currentColor" strokeWidth="1" />
                <line x1="87.5%" y1="17%" x2="87.5%" y2="23%" stroke="currentColor" strokeWidth="1" />
            </motion.g>
            <motion.g
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            >
                <line x1="10%" y1="60%" x2="15%" y2="60%" stroke="currentColor" strokeWidth="1" />
                <line x1="12.5%" y1="57%" x2="12.5%" y2="63%" stroke="currentColor" strokeWidth="1" />
            </motion.g>
        </svg>
    )
}