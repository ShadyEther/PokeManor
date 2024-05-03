"use client"
import PokeBox from "@/components/pokemon/pokebox";
import { useEffect, useState } from "react";


export default function PokeView(){  
    const[page,setpage]=useState(25);
    const[data,setdata]=useState(null);

    useEffect(()=>{
        const fetchdata=async ()=>{
            const res=await fetch("https://pokeapi.co/api/v2/pokemon/"+page)
            const data=await res.json()
            setdata(data)
        };
        fetchdata();
        

    },[page]);

    return(
        <div className="pokeview">
            <h1>{page}</h1>
            <PokeBox data={data}>
            </PokeBox>
            <br></br>
            <button onClick={()=>{if (page>1) setpage(page-1)}}>Prev</button>
            <button onClick={()=>{setpage(page+1)}}>Next</button>
        </div>

        
    )
}
