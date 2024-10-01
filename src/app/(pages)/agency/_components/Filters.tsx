"use client"
import { filterOptions } from '@/constants/menu';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react'
import CheckboxAndRadioGroup from './CheckboxAndRadioGroup';
import CheckboxAndRadioItem from './CheckboxAndRadioItem';

function convertStringToQueriesObject(searchParams: ReadonlyURLSearchParams) {
    let selectedQueries: Record<string, string[]> = {}
    searchParams.forEach((value, key) => {
        const queries = value.split(",");
        if (selectedQueries[key]) {
            selectedQueries[key].push(...queries)
        } else {
            selectedQueries[key] = queries
        }
    });
    return selectedQueries
}

const Filters = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [selectedFilterQueries, setSelectedFilterQueries] = useState<Record<string, string[]>>({})

    useEffect(() => {
        const paramObj = convertStringToQueriesObject(searchParams);
        setSelectedFilterQueries(paramObj)
    }, [searchParams])

    function checkValidQuery(queries: string[]) {
        return queries.filter((query) => query !== "").length > 0
    }

    function convertValidStringQueries(queries: Record<string, string[]>) {
        let q = "";
        for (let [key, value] of Object.entries(queries)) {
            q = q + `${q === "" ? "" : "&"}${key}=${value.join(",")}`
        }
        return q;
    }


    function handleSelectFilterOptions(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value
        const type = e.target.type;
        let selectedQueries = { ...selectedFilterQueries };

        if (type === "radio") {
            selectedQueries[name] = [value]
        } else {
            if (selectedQueries[name]) {
                if (selectedQueries[name].includes(value)) {
                    selectedQueries[name] = selectedQueries[name].filter((query) => query !== value)
                    if (!checkValidQuery(selectedQueries[name])) {
                        delete selectedQueries[name] //remove key if no valid value
                    }
                } else {
                    selectedQueries[name].push(value)
                }
            } else {
                selectedQueries[name] = [value]
            }
        }
        setSelectedFilterQueries(selectedQueries);
        router.push(`/agency?${convertValidStringQueries(selectedQueries)}`, {
            scroll: false
        })
    }

    function isChecked(id: string, option: string) {
        return (
            Boolean(selectedFilterQueries[id]) && selectedFilterQueries[id].includes(option.toLowerCase())
        )
    }


    return (
        <div className='col-span-4 space-y-6 sticky top-12 h-fit'>
            {
                filterOptions.map(({ id, title, type, options }) => {
                    return <div className='border-b pb-4' key={id}>
                        <p className='font-medium mb-4'>{title}</p>
                        <div className='space-y-2'>
                            {options.map((value) => {
                                return <CheckboxAndRadioGroup key={value}>
                                    <CheckboxAndRadioItem
                                        type={type}
                                        name={id}
                                        id={value.toLowerCase().trim()}
                                        label={value}
                                        value={value.toLowerCase().trim()}
                                        checked={isChecked(id, value)}
                                        onChange={handleSelectFilterOptions}
                                    />
                                </CheckboxAndRadioGroup>
                            })}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Filters
