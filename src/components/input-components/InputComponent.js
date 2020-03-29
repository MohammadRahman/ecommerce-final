import React from 'react'
import classnames from 'classnames';
export const InputComponent = ({label,name,type,value,onChange,error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label} </label>
            <input className={classnames('form-control', { 'is-invalid': error })}
                name={name}
                value={value}
                type={type}
                onChange={onChange}
                error={error}
            />
            <div className="invalid-feedback">{error} </div>
        </div>
    )
}
