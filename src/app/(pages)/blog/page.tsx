"use client"
// import { getBlogPage } from "@/sanity/queries/page";
import { Container } from "@/components/Layouts/Container";
import { Heading } from "@/components/Layouts/Heading";
import { Section } from "@/components/Layouts/Section";
import { SubTitle } from "@/components/Layouts/SubTitle";
import BlogCard from "./_components/BlogCard";
import { useMediaQuery } from "react-responsive";
import BlogCardSmall from "./_components/BlogCardSmall";
const BlogPage = async () => {
    const isMedium = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    const data = [{
        id: "1",
        title: "Best Way to Get Organic Traffic on Your Website",
        slug: "blog-post-1",
        author: "Syed Safwan Abbas",
        category: ["Social Media", "Whatsapp Guide"],
        mainImage: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus ac metus condimentum tincidunt. Sed euismod, dolor in dignissim congue, urna nunc condimentum velit, at fermentum orci turpis at neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
        createdAt: "2022-09-15T14:42:00.000Z",
        desc: "Lorem ipsum dolor sit amet, consectetur adip",
        authorImage: {
            image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        },
        readTime: "7 Min Read"
    },
    {
        id: "2",
        title: "How To Excel Marketing Strategy with Facebook Ads",
        slug: "blog-post-1",
        author: "Syed Safwan Abbas",
        category: ["Social Media", "Whatsapp Guide"],
        mainImage: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus ac metus condimentum tincidunt. Sed euismod, dolor in dignissim congue, urna nunc condimentum velit, at fermentum orci turpis at neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
        createdAt: "2022-09-15T14:42:00.000Z",
        desc: "Lorem ipsum dolor sit amet, consectetur adip",
        authorImage: {
            image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        },
        readTime: "9 Min Read"
    }, {
        id: "3",
        title: "How To Excel Marketing Strategy with Instagram Reels Ads",
        slug: "blog-post-1",
        author: "Syed Safwan Abbas",
        category: ["Social Media", "Whatsapp Guide"],
        mainImage: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus ac metus condimentum tincidunt. Sed euismod, dolor in dignissim congue, urna nunc condimentum velit, at fermentum orci turpis at neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
        createdAt: "2022-09-15T14:42:00.000Z",
        desc: "Lorem ipsum dolor sit amet, consectetur adip",
        authorImage: {
            image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        }
    }, {
        id: "4",
        title: "How To Excel Marketing Strategy with Facebook Ads",
        slug: "blog-post-1",
        author: "Syed Safwan Abbas",
        category: ["Social Media", "Whatsapp Guide"],
        mainImage: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus ac metus condimentum tincidunt. Sed euismod, dolor in dignissim congue, urna nunc condimentum velit, at fermentum orci turpis at neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
        createdAt: "2022-09-15T14:42:00.000Z",
        desc: "Lorem ipsum dolor sit amet, consectetur adip",
        authorImage: {
            image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        }
    },
    {
        id: "5",
        title: "How To Excel Marketing Strategy with Facebook Ads",
        slug: "blog-post-1",
        author: "Syed Safwan Abbas",
        category: ["Social Media", "Whatsapp Guide"],
        mainImage: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus ac metus condimentum tincidunt. Sed euismod, dolor in dignissim congue, urna nunc condimentum velit, at fermentum orci turpis at neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
        createdAt: "2022-09-15T14:42:00.000Z",
        desc: "Lorem ipsum dolor sit amet, consectetur adip",
        authorImage: {
            image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        }
    },
    {
        id: "6",
        title: "How To Excel Marketing Strategy with Facebook Ads",
        slug: "blog-post-1",
        author: "Syed Safwan Abbas",
        category: ["Social Media", "Whatsapp Guide"],
        mainImage: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus ac metus condimentum tincidunt. Sed euismod, dolor in dignissim congue, urna nunc condimentum velit, at fermentum orci turpis at neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
        createdAt: "2022-09-15T14:42:00.000Z",
        desc: "Lorem ipsum dolor sit amet, consectetur adip",
        authorImage: {
            image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        }
    }]




    return (
        <Section className="bg-secondary-950">
            <Container>
                <SubTitle subTitle="Our blog" />
                <div className="text-black">
                    <Heading as="h1" className="text-2xl md:text-hero leading-none font-semibold tracking-tight">
                        Our Latest Posts
                    </Heading>
                    <p className="mt-2 md:mt-6 text-sm md:text-md tracking-tight max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
                        eum in aspernatur, placeat saepe aut quidem sit sunt officia iure
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:mt-12 mt-20 w-full">
                    {data.length > 0 &&
                        <>
                            {isMedium ? data.map((post) => (<BlogCard key={post.id} data={post} classes="md:col-span-3 md:row-span-3 h-[400px] md:h-fit lg:h-[200px] lg:p-0" latest={false} />)) : <>
                                <BlogCard data={data[0]} classes="md:col-span-3 md:row-span-3 lg:row-span-6 h-[400px] md:[200px] lg:h-full max-h-[633px] p-3 lg:p-0" latest={true} />
                                <div className="md:col-span-3 grid grid-cols-1 gap-4">
                                    {data.slice(1, 4).map(post => (
                                        <BlogCard key={post.id} data={post} classes="md:col-span-3 md:row-span-3 h-[400px] md:h-fit lg:h-[200px] p-3 lg:p-0" latest={false} />
                                    ))}
                                </div>
                            </>}
                        </>
                    }
                </div>
                {data.length > 4 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 xl:grid-cols-4 gap-4 mt-4">
                        {data.slice(4).map(post => (
                            <BlogCardSmall key={post.id} data={post} classes={""} />
                        ))}
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default BlogPage;