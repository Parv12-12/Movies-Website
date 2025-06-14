import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
const AppContext = createContext();

 export const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({children})=>{

    const [isLoading,SetLoading] = useState(true);
    const [movies,SetMovie] = useState([]);
    const [error,SetError] = useState({show:"false", msg:''});
    const [query , SetQuery] = useState("titanic");


    const getMovies = async(url)=>{
        SetLoading(true);
        try {
            const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if (data.Response === "True"){
        SetLoading(false);
        SetMovie(data.Search);
         SetError({
                show:"false",
                msg:'',
            })
        }
        else{
            SetError({
                show:"true",
                msg:data.Error,
            })
        }

        } catch (error) {
            console.log(error);
            
            
        }
    }

    useEffect(()=>{

      let timerOut =   setTimeout(() => {
             getMovies(`${API}&s=${query}`);
            
        },800);

      return ()=>clearTimeout(timerOut)

       

    },[query])
    return(
        <>
            <AppContext.Provider value={{isLoading,movies,error,query,SetQuery}}>{children}</AppContext.Provider>
        </>
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider,useGlobalContext}