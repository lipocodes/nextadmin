"use client"
//npm install use-debounce@9.0.4    for searching only when user stops typing
import React from 'react'
import styles from './search.module.css'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


function Search({placeholder}) {

 const searchParams = useSearchParams();
 const {replace} = useRouter();
 const pathname = usePathname();

 const handleSearch = useDebouncedCallback((e) => {
 const params = new URLSearchParams(searchParams);

 params.set("page",1)

 if(e.target.value){
  e.target.value.length>2 && params.set("q",e.target.value);
  
 }else{
  params.delete("q");
 }
 replace(`${pathname}?${params}`);
},300);


  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search