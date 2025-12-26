import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";

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
        <div className="w-full flex justify-between px-8 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="w-1/3 flex flex-col border-l border-gray-200 dark:border-gray-800">
                <div className="p-4 flex flex-col gap-4">
                    <div>
                        <h2 className={`text-3xl tracking-wide ${instrumentSerif.className}`}>{title}</h2>
                        <p className="text-sm">{subtitle}</p>
                    </div>
                    {
                        showCta &&

                        <div className="flex flex-col gap-4">
                            <p className="text-sm opacity-60">{ctaText}</p>
                            <Button
                                size={"sm"}
                                className="p-2 rounded-none"
                                asChild
                            >
                                <a href={ctaHref}>{ctaButtonText}</a>
                            </Button>
                        </div>
                    }
                </div>

                <div className="flex-1 w-full relative overflow-hidden bg-zinc-100/50 dark:bg-zinc-900/50">
                    <svg className="absolute inset-0 w-full h-full text-zinc-300 dark:text-zinc-800" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            {/* A Graph Paper Pattern */}
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>

                        {/* Fill background with grid */}
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* A decorative "Schematic Circle" in the center */}
                        <circle cx="50%" cy="50%" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                        <circle cx="50%" cy="50%" r="20" fill="none" stroke="currentColor" strokeWidth="1" />

                        {/* Decorative Lines */}
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

            </div>

            <div className="w-2/3 py-8 h-full border-x border-gray-200 dark:border-gray-800">
                <Accordion
                    type="single"
                    collapsible
                    className="border-y border-gray-200 dark:border-gray-800"
                    defaultValue="item-1"
                >
                    {
                        faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index}
                                className="px-4"
                            >
                                <AccordionTrigger className="font-semibold tracking-wide">
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