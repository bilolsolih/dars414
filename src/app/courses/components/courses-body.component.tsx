"use client";
import {useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";


export default function CoursesBodyComponent({initialData, initialPage = 1, initialSize = 10}) {
    const [query, setQuery] = useState(new URLSearchParams([
            ['size', initialSize.toString()],
            ['page', initialPage.toString()]
        ])
    );

    const {data, isLoading, error} = useQuery({
        staleTime: () => 2000,
        queryKey: [query.toString()],
        queryFn: async () => {
            const response = await axios.get('http://localhost:8888/public/players/get-all-players' + '?' + query.toString());
            if (response.status !== 200)
                throw new Error("Error fetching all players.");
            return response.data;
        },
        initialData: initialData,
    })

    return <section>
        {!data && <h1>Loading...</h1>}
        <div className="flex items-center gap-10">
            <button onClick={() => {
                query.set('page', `${Number(query.get('page')) - 1}`);
                setQuery(new URLSearchParams(query));
            }}>Left
            </button>

            <button onClick={() => {
                query.set('page', `${Number(query.get('page')) + 1}`);
                setQuery(new URLSearchParams(query));
            }}>Right
            </button>
        </div>
        {data && data.data.map(item => <h1 key={item.id}>{item.fullName}</h1>)}
    </section>
}