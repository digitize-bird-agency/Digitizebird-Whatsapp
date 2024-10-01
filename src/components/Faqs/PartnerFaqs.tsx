import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { PartnerFaq } from "@/constants/data";



export function PartnerFaqs() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                PartnerFaq.map((item) => {
                    return (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    );
}
