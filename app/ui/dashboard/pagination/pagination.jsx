"use client"
import React from 'react'
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Pagination({count}) {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
  const ITEMS_PER_PAGE = 2;
  const hasPrev = ITEMS_PER_PAGE * (parseInt(page)-1) > 0 ;
  const hasNext = ITEMS_PER_PAGE * (parseInt(page)-1) + ITEMS_PER_PAGE < count;
  const handleChangePage = (type) => {
    type==="prev"? params.set("page",parseInt(page)-1) : params.set("page",parseInt(page)+1);
    replace(`${pathname}?${params}`);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChangePage("prev")}>Previous</button>
      <button className={styles.button} disabled={!hasNext}  onClick={()=>handleChangePage("next")}>Next</button>
    </div>
  )
}

export default Pagination