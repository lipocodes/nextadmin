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

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasNext}>Next</button>
      <button className={styles.button} disabled={!hasPrev}>Previous</button>
    </div>
  )
}

export default Pagination