import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function PostsComponent() {
    const fetchPosts = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data;
    };

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
        staleTime: 1000 * 60,
        cacheTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
    console.log(data);
    // console.log("loading", isLoading);
    // console.log("error", isError);
    if (isError) {
        return <p className="text-red-500 text-5xl ">Error</p>;
    }
    if (isLoading) {
        return <p className="text-3xl ">Loading...</p>;
    }

    return (
        <div className="flex flex-col pt-5 items-center">
            <button onClick={() => refetch()} className="p-2 border w-fit cursor-pointer rounded-2xl bg-sky-700 text-white">refetch data</button>
            <div className="p-20 flex flex-wrap gap-8 ">
                {data.map((e) => (
                    <div key={e.id} className="w-100 border flex flex-col p-8 rounded-2xl">
                        <h2 className="text-2xl font-blod uppercase">{e.title}</h2>
                        <p className="text-gray-400 capitalize">{e.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
