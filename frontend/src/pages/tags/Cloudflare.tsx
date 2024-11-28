import { BlogCard } from "../../components/BlogCard";
import { HomeTags } from "../../components/HomeTags";

const cloudflareBlogs = [
    {
        title: 'Introduction to Cloudflare Services',
        description: 'Cloudflare offers various web security services to protect and accelerate websites. This blog provides an overview of Cloudflare’s main services and how they benefit web applications.'
    },
    {
        title: 'Speed Up Your Website with Cloudflare CDN',
        description: 'Content Delivery Networks (CDNs) are essential for fast web performance. Learn how Cloudflare’s CDN can help reduce load times and improve user experience.'
    },
    {
        title: 'Understanding Cloudflare’s DDoS Protection',
        description: 'DDoS attacks can cripple websites. This blog explains how Cloudflare’s DDoS protection works and how it can help mitigate attacks to keep your site online.'
    },
    {
        title: 'Securing Web Traffic with Cloudflare SSL/TLS',
        description: 'SSL/TLS encryption is crucial for securing web traffic. Discover how Cloudflare provides SSL/TLS certificates and ensures secure connections for your website.'
    },
    {
        title: 'Leveraging Cloudflare Workers for Serverless Applications',
        description: 'Cloudflare Workers allow developers to run serverless code at the edge. This blog covers the basics of Cloudflare Workers and how to use them in your applications.'
    },
    {
        title: 'Enhancing Security with Cloudflare Access',
        description: 'Cloudflare Access provides secure access to internal applications without a VPN. Learn how to set up and use Cloudflare Access to protect your resources.'
    },
    {
        title: 'Improving Performance with Cloudflare Argo Smart Routing',
        description: 'Argo Smart Routing reduces latency and increases reliability by routing traffic through the fastest paths. Understand how it works and its benefits.'
    },
    {
        title: 'Streamlining Video Delivery with Cloudflare Stream',
        description: 'Cloudflare Stream simplifies video streaming by providing an easy-to-use platform for video delivery. Learn about its features and how to integrate it.'
    },
    {
        title: 'Ensuring High Availability with Cloudflare Load Balancing',
        description: 'Load balancing is critical for application performance and availability. This blog discusses how Cloudflare Load Balancing works and its advantages.'
    },
    {
        title: 'Monitoring Website Performance with Cloudflare Analytics',
        description: 'Cloudflare Analytics provides insights into your website’s performance and security. Discover the metrics available and how to use them to optimize your site.'
    },
];

export const Cloudflare = () => {
    return (
        <>
            <HomeTags />
            <div className="min-h-screen dark:bg-slate-800 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-md mb-4 text-center text-white">Cloudflare Workers</h1>
                    <button className="bg-gray-500 rounded-full hover:bg-gray-700 text-gray-300 font-bold py-1 px-4  focus:outline-none">
                        Follow
                    </button>
                    <div className="border-b border-slate-600 my-8"></div>

                </div>

                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div>
                            {cloudflareBlogs.map(blog => <BlogCard
                                id={0}
                                authorName={"Himanshu Yadav"}
                                title={blog.title}
                                content={blog.description}
                                publishedDate={"21 July 2024"}
                            />)}
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};
