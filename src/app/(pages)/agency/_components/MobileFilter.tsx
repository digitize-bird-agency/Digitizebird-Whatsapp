"use client"
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React, { ChangeEvent } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { agencyType, countries } from '@/constants/agencies'
import { cn } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation';

const MobileFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [open, setOpen] = React.useState(false);
    const [countryOpen, setCountryOpen] = React.useState(false);
    const [value, setValue] = React.useState(searchParams.get('agencyType') || "");
    const [country, setCountry] = React.useState(searchParams.get('country') || "");

    // Function to update URL with filter parameters
    const updateFiltersInUrl = (params: Record<string, string | string[]>) => {
        const searchParams = new URLSearchParams(window.location.search);

        // Convert each key-value pair in params to URLSearchParams format
        Object.keys(params).forEach((key) => {
            const value = params[key];
            if (Array.isArray(value)) {
                value.forEach((v) => searchParams.append(key, v));
            } else if (value) {
                searchParams.set(key, value);
            } else {
                searchParams.delete(key);
            }
        });

        // Construct the query string
        const queryString = searchParams.toString();
        console.log(queryString);
        // Update the URL using router.push
        router.push(`/agency${queryString ? `?${queryString}` : ''}`, { scroll: false });
    };

    // Handler for agency type selection
    const handleAgencyTypeSelect = (currentValue: string) => {
        const newValue = currentValue === value ? "" : currentValue;
        setValue(newValue);
        setOpen(false);
        if (!country) {
            updateFiltersInUrl({ agencyType: newValue }); // Adjust 'type' to match your query parameter
        }
        updateFiltersInUrl({ agencyType: newValue, country: country });
    };

    // Handler for country selection
    const handleCountrySelect = (currentValue: string) => {
        const newCountry = currentValue === country ? "" : currentValue;
        setCountry(newCountry);
        setCountryOpen(false);
        if (!agencyType) {
            updateFiltersInUrl({ country: newCountry }); // Adjust 'country' to match your query parameter
        }
        updateFiltersInUrl({ country: newCountry, agencyType: value });
    };

    return (
        <div className='flex items-center justify-between'>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {value
                                ? agencyType.find((agency) => agency.value.toLowerCase() === value.toLowerCase())?.label
                                : "Agency Type..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search Type..." />
                            <CommandList>
                                <CommandEmpty>No Agency Found.</CommandEmpty>
                                <CommandGroup>
                                    {agencyType.map((agency) => (
                                        <CommandItem
                                            key={agency.value}
                                            value={agency.value}
                                            onSelect={handleAgencyTypeSelect}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === agency.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {agency.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div>
                <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={countryOpen}
                            className="w-[200px] justify-between"
                        >
                            {country
                                ? countries.find((ctry) => ctry.value.toLowerCase() === country.toLowerCase())?.label
                                : "Country..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search Type..." />
                            <CommandList>
                                <CommandEmpty>No Country Found.</CommandEmpty>
                                <CommandGroup>
                                    {countries.map((ctry) => (
                                        <CommandItem
                                            key={ctry.value}
                                            value={ctry.value}
                                            onSelect={handleCountrySelect}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    country === ctry.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {ctry.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default MobileFilter;
