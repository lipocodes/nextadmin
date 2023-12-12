import React from 'react'
import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/pagination'

function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
            <td></td>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" height={40} width={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.12.2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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

export default UsersPage
