import React, { useState } from 'react';
import s from './FormEmpleadoModal.module.css';

const FormEmpleadoModal = ({ onClose, onSubmit, empleado = {}, titulo, botonTexto }) => {
  const [formValues, setFormValues] = useState({
    nombre: empleado?.nombre || '',
    apellido: empleado?.apellido || '',
    email: empleado?.email || '',
    nroDocumento: empleado?.nroDocumento || '',
    fechaNacimiento: empleado?.fechaNacimiento || '',
    fechaIngreso: empleado?.fechaIngreso || '',
    fechaCreacion: empleado?.fechaCreacion || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className={s.formEmpleadoModal}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={onClose}>X</button>
        <h2 className={s.titulo}>{titulo}</h2>

        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.formGroup}>
            <label>Nombre:</label>
            <input 
              type="text" 
              name='nombre' 
              value={formValues.nombre} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Apellido:</label>
            <input 
              type="text" 
              name='apellido' 
              value={formValues.apellido} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Email:</label>
            <input 
              type="email" 
              name='email' 
              value={formValues.email} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>NroDocumento:</label>
            <input 
              type="text" 
              name='nroDocumento' 
              value={formValues.nroDocumento} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Fecha de nacimiento:</label>
            <input 
              type="date" 
              name='fechaNacimiento' 
              value={formValues.fechaNacimiento} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Fecha de ingreso:</label>
            <input 
              type="date" 
              name='fechaIngreso' 
              value={formValues.fechaIngreso} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Fecha de creacion:</label>
            <input 
              type="date" 
              name='fechaCreacion' 
              value={formValues.fechaCreacion} 
              onChange={handleChange} 
              required
            />
          </div>

          <button type='submit' className={s.submitButton}>{botonTexto}</button>
        </form>
      </div>
    </div>
  );
};

export default FormEmpleadoModal;
