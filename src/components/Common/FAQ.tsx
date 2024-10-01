import { FAQType } from '@/constants/types'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

type Props = {
    questions: FAQType
}

const FAQ = ({ questions }: Props) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                questions.map((item) => {
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
    )
}

export default FAQ