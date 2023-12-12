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
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder='Iphone'></input>
          <label>Price</label>
          <input type="number" name="price" placeholder='1000.00'></input>
          <label>Stock</label>
          <input type="number" name="stock" placeholder='100'></input>
          <label>Color</label>
          <input type="text" name="color" placeholder='Green'></input>
          <label>Size</label>
          <input type="number"  name="size"  placeholder='9'></input>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea  name="desc" id="desc" rows="10" placeholder='Description'></textarea>
          <button>Update</button>
        </form>
      </div>    
    </div>
  )
}

export default SingleProductPage



