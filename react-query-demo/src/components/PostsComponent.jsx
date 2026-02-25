import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function PostsComponent() {
  const fetchPosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return res.data;

  }
    const { data, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: ()=> fetchPosts()
    });
    console.log(data);
    // console.log("loading", isLoading);
    // console.log("error", isError);
  if (isError) {
    return (
        <p className="text-red-500 text-5xl ">Error</p>
      )
    }
  if (isLoading) {
    return (
        <p className="text-3xl ">Loading...</p>
      )
    }

    return (
        <div className="p-20 flex flex-wrap gap-8 ">
            {data.map((e) => (
                <div key={e.id} className="w-100 border flex flex-col p-8 rounded-2xl">
                    <h2 className="text-2xl font-blod uppercase">{e.title}</h2>
                    <p className="text-gray-400 capitalize">{e.body}</p>
                </div>
            ))}
        </div>
    );
}
