import React from 'react'

function Alert(props) {
  const up = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
     props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
              <strong>{up(props.alert.msg)}</strong> : {props.alert.txt}
               <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert;