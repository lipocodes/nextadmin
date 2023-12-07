import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src='/noavatar.png'  alt='' width={40} height={40} className={styles.userImage}/>
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3200</td>
          </tr>
          <tr>
            <td>
              <Image src='/noavatar.png'  alt='' width={40} height={40} className={styles.userImage}/>
              Jane Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>13.02.2024</td>
            <td>$6000</td>
          </tr>
          <tr>
            <td>
              <Image src='/noavatar.png'  alt='' width={40} height={40} className={styles.userImage}/>
              Donna Martin
            </td>
            <td>
              <span className={`${styles.status} ${styles.canceled}`}>Canceled</span>
            </td>
            <td>12.02.2024</td>
            <td>$1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions