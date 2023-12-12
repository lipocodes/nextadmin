import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' fill />    
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <label>Username</label>
        <input type="text" name="username" placeholder='John Doe'></input>
        <label>Email</label>
        <input type="text" name="email" placeholder='John Doe@mail.com'></input>
        <label>Password</label>
        <input type="password" name="password" placeholder='John Doe'></input>
        <label>Phone</label>
        <input type="text" name="phone" placeholder='+1234567'></input>
        <label>Address</label>
        <textarea  name="address"  placeholder='New York'></textarea>
        <label>Is Admin</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>    
    </div>
  )
}

export default SingleProductPage



