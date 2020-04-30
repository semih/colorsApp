import React from 'react'
import styles from './Input.module.css' 

const Input = ({ value, label, type='text', handleChange, ...inputProps }) => (
    <label className={styles.inputHolder}>
        <div className={styles.label}>{label}</div>
        <input value={value} type={type} onChange={handleChange} className={styles.input} />
    </label>
)

export default Input