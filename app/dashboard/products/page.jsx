import React from 'react'
import styles from '../../ui/dashboard/products/products.module.css';
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/pagination'


function ProductsPage() {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a product..."/>
      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src="/noproduct.jpg" height={40} width={40} className={styles.productImage} />
              Iphone
            </div>
          </td>
          <td>New iPhone</td>
          <td>$250</td>
          <td>15.12.2023</td>
          <td>72</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/dashboard/products/test">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination/>
  </div>
  )
}

export default ProductsPage