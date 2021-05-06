import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

const UserDataForm = ({onsubmit, aftersubmit}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    return (
        <form 
        onSubmit={onsubmit}
        afterSubmit={aftersubmit}
        className="p-fluid">
        <div className="p-field p-mt-5">
          <span className="p-float-label">
            <InputText id="username" value={name} autoFocus onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name" className="p-invalid">Name*</label>
          </span>
        </div>
        <div className="p-field p-mt-5">
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-envelope" />
            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="email" className="p-invalid">Email*</label>
          </span>
        </div>  
        <div className="p-field p-mt-5">
          <span className="p-float-label">
            <InputTextarea value={comments} onChange={(e) => setComments(e.target.value)} rows={2} cols={30} />
              <label htmlFor="name" className="p-invalid">Comments</label>
          </span>
        </div>
      </form>
    );
}

export default UserDataForm