import React from 'react'
import styles from '../app/page.module.css'

const Todo = ({ product, index, deleteTodo }) => {
  return (
    <div className={styles.list}>
      <h3 className='Titulo3'>{`Nombre: ${product.name}, Marca: ${product.brand}, Cantidad: ${product.quantity}, Precio: ${product.price}`}</h3>
      <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>
        X
      </button>
    </div>
  )
}
export default Todo