import React from 'react'
import styles from './Botao.module.scss'

export default function Botao(props) {
  return (
    <button className={styles.botao}>
      {props.children}
    </button>
  )
}
