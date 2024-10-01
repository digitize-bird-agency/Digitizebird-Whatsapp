"use client"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { countriesRate } from "@/constants/data"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
const PricingSection = () => {
    const [open, setOpen] = useState(false)
    const [showConversionDetail, setShowConversionDetail] = useState(false)
    const [value, setValue] = useState("")
    const [conversionCost, setConversionCost] = useState(0)
    return (
        <div className='max-w-4xl mx-auto grid grid-cols-2 mt-10 gap-20'>
            <div className='flex flex-col items-start gap-3'>
                <div className="w-full">
                    <Label>Your Country</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="!w-full justify-between"
                            >
                                {value
                                    ? countriesRate.find((country) => country.value === value)?.label
                                    : "Select Country..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="!w-[400px] p-0">
                            <Command>
                                <CommandInput placeholder="Select Country..." />
                                <CommandList>
                                    <CommandEmpty>No Country found.</CommandEmpty>
                                    <CommandGroup>
                                        {countriesRate.map((country) => (
                                            <CommandItem
                                                key={country.value}
                                                value={country.value}
                                                onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? "" : currentValue)
                                                    setOpen(false)
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        value === country.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {country.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="w-full space-y-2">
                    <Label>Marketing Conversation (monthly)</Label>
                    <Input type="number" min={0} defaultValue={0} className="border border-input bg-background hover:bg-accent focus:border-none focus:outline-none hover:text-accent-foreground w-full " />
                </div>
                <div className="w-full space-y-2">
                    <Label>Utility Conversation (monthly)</Label>
                    <Input type="number" min={0} defaultValue={0} className="border border-input bg-background hover:bg-accent focus:border-none focus:outline-none hover:text-accent-foreground w-full " />
                </div>
                <div className="w-full space-y-2">
                    <Label>Authentication Conversation (monthly)</Label>
                    <Input type="number" min={0} defaultValue={0} className="border border-input bg-background hover:bg-accent focus:border-none focus:outline-none hover:text-accent-foreground w-full " />
                </div>
                <div className="w-full space-y-2">
                    <Label>Service Conversation (monthly)</Label>
                    <Input type="number" min={0} defaultValue={0} className="border border-input bg-background hover:bg-accent focus:border-none focus:outline-none hover:text-accent-foreground w-full " />
                </div>
            </div>
            <div>
                <p className="text-md tracking-tight">Your WhatsApp Business <span className="font-bold">cost per month</span> for Rest of Asia Pacific</p>
                <div className="border border-gray-300 rounded-md mt-4">
                    <div className="flex items-start justify-between p-2 px-4">
                        <div>
                            <h6>Total Coversation Cost</h6>
                            <span>${conversionCost}</span>
                        </div>
                        <Button variant={"ghost"} size={"sm"} onClick={() => setShowConversionDetail(!showConversionDetail)}>
                            Hide Details
                        </Button>
                    </div>
                    {
                        showConversionDetail &&
                        <div className="border-t border-gray-300 px-4 p-2">
                            <div className="flex flex-col items-start justify-between w-full gap-2">
                                <div className="flex items-center justify-between w-full text-sm">
                                    <h6>Marketing</h6>
                                    <span>${conversionCost}</span>
                                </div>
                                <div className="flex items-center justify-between w-full text-sm">
                                    <h6>Utility</h6>
                                    <span>${conversionCost}</span>
                                </div>
                                <div className="flex items-center justify-between w-full text-sm">
                                    <h6>Authentication</h6>
                                    <span>${conversionCost}</span>
                                </div>
                                <div className="flex items-center justify-between w-full text-sm">
                                    <h6>Service</h6>
                                    <span>${conversionCost}</span>
                                </div>
                                <div className="flex items-center justify-between w-full text-sm text-emerald-500">
                                    <h6>Free Service</h6>
                                    <span>${conversionCost}</span>
                                </div>
                                <div className="flex items-center justify-between w-full text-sm">
                                    <h6>15% Processing Free</h6>
                                    <span>${conversionCost}</span>
                                </div>
                                <hr className="bg-black h-[1px] w-full" />
                                <div className="flex items-center justify-between w-full text-sm my-2">
                                    <h6 className="text-md font-bold">15% Processing Free</h6>
                                    <span className="text-md font-bold">${conversionCost}</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingSection
