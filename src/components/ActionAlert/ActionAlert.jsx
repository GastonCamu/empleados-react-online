import React from 'react';
import s from './ActionAlert.module.css';

const ActionAlert = ({ message, onConfirm, onCancel, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className={s.overlay}>
            <div className={s.actionalert}>
                <button className={s.closeButton} onClick={onCancel}>X</button>
                <div className={s.message}>
                    {message}
                </div>
                <div className={s.actions}>
                    <button className={s.confirmButton} onClick={onConfirm}>OK</button>
                    <button className={s.cancelButton} onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ActionAlert;
