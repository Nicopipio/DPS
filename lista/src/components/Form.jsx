"use client"

import React, { useState } from 'react'
import Todo from './Todo'
import styles from '../app/page.module.css'

const Form = () => {
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value })

  const handleClick = (e) => {
    e.preventDefault();
    if (
      Object.keys(product).length === 0 ||
      product.name.trim() === '' ||
      product.brand.trim() === '' ||
      product.quantity.trim() === '' ||
      product.price.trim() === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    setProducts([...products, product]);
    setProduct({}); 
  };

  const deleteProduct = (indice) => {
    const newProducts = [...products];
    newProducts.splice(indice, 1);
    setProducts(newProducts);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label>Nombre del producto</label>
        <input className={styles.form_input} type='text' name='name' onChange={handleChange} />
        <label>Marca</label>
        <input className={styles.form_input} type='text' name='brand' onChange={handleChange} />
        <label>Cantidad</label>
        <input className={styles.form_input} type='text' name='quantity' onChange={handleChange} />
        <label>Precio</label>
        <input className={styles.form_input} type='text' name='price' onChange={handleChange} />
        <button className={styles.form_button} type='submit'>
          Agregar
        </button>
      </form>
      {products.map((value, index) => (
        <Todo product={value} key={index} index={index} deleteTodo={deleteProduct} />
      ))}
    </>
  )
}

export default Form