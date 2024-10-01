export const make = ["Recommended Partner"]
export const agencyType = ["Shopify", "Wordpress"]
export const country = [
    "North America",
    "Middle East",
    "Latin America",
    "Europe",
    "Asia Pacific",
    "Africa",
    "Vietnam",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Ukraine",
    "Turkey",
    "Thailand",
    "Taiwan",
    "Switzerland",
    "Sweden",
    "Spain",
    "South Africa",
    "Singapore",
    "Russia",
    "Romania",
    "Portugal",
    "Poland",
    "Philippines",
    "Pakistan",
    "New Zealand"
];

export const filterOptions = [
    {
        id: "make",
        title: "Makes",
        options: make,
        type: "checkbox"
    },
    {
        id: "agencyType",
        title: "Agency Type",
        options: agencyType,
        type: "checkbox"
    },
    {
        id: "country",
        title: "Filter by Country",
        options: country,
        type: "checkbox"
    }
]