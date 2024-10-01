"use client"
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

import { agencies } from '@/constants/agencies'
import Image from 'next/image'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useMediaQuery } from 'usehooks-ts'
import { GrNext, GrPrevious } from "react-icons/gr";

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

const ITEMS_PER_PAGE = 6;

const Agencies = () => {
    const [currentPage, setCurrentPage] = useState(1);

    function isAvailable(arr1?: string[], arr2?: string[]) {
        if (!arr2 || arr2.length === 0) {
            return true;
        }
        if (!arr1 || arr1.length === 0) {
            return false;
        }
        return arr1.some((item) => arr2.includes(item.toLowerCase()));
    }

    const searchParams = useSearchParams();
    const paramsObj = convertStringToQueriesObject(searchParams);

    let filteredAgencies = agencies.filter((agency) => {
        const hasMake = isAvailable(agency.make, paramsObj?.make);
        const hasAgencyType = isAvailable(agency.agency_type, paramsObj?.agencyType);
        const hasCountry = isAvailable(agency.country, paramsObj?.country);
        return hasMake && hasAgencyType && hasCountry;
    });

    if (Object.keys(paramsObj).length === 0) {
        filteredAgencies = agencies;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedAgencies = filteredAgencies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(filteredAgencies.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage: any) => {
        setCurrentPage(newPage);
    }
    const mobileScreen = useMediaQuery('(max-width:1023px)')
    return (
        <div>
            {filteredAgencies.length !== 0 ? <> <TransitionGroup className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
                {paginatedAgencies.map((agency, index) => {
                    return (
                        <CSSTransition key={index} timeout={300} classNames='agency'>
                            <div className='border p-2 rounded-md space-y-2'>
                                <Image src={agency.image} alt={agency.name} width={400} height={400} className='rounded-md shadow-sm aspect-[4/5] object-cover object-top' />
                                <div>
                                    <h3 className='text-lg font-semibold tracking-tight'>{agency.name}</h3>
                                    <p className='text-sm text-gray-500'>{agency.country}</p>
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
                <div className='flex justify-center mt-6'>
                    <button
                        className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {mobileScreen ? <GrPrevious /> : 'Previous'}
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {mobileScreen ? <GrNext /> : 'Next'}
                    </button>
                </div>
            </> : <h3 className='text-center text-slate-700'>No Agencies Found</h3>
            }

        </div>
    )
}

export default Agencies
