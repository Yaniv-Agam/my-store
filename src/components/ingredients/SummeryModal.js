import React, { useContext, useState } from 'react';
import {Context} from '../App'
import UserDataForm from './UserDataForm';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

const SummeryModal = (props) => {

  // const { register, errors, handleSubmit, reset } = useForm();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [comments, setComments] = useState('');
  // const [errors, setErrors] = useState([]);
  
  const hadleSubmit = (e) => {
    e.preventDefault();

    if(validate()){
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["comment"] = "";
      this.setState({input:input});

      alert('Demo Form is submited');
  }
};

const validate = () => {
  let input = this.state.input;
  let errors = {};
  let isValid = true;

  if (!input["name"]) {
    isValid = false;
    errors["name"] = "Please enter your name.";
  }

  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Please enter your email Address.";
  }

  if (typeof input["email"] !== "undefined") {
      
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(input["email"])) {
      isValid = false;
      errors["email"] = "Please enter valid email address.";
    }
  }

  this.setState({
    errors: errors
  });

  return isValid;
}

const summeryList = (cart) => {
  if (cart && cart.length > 0) {
      return (cart.map((item, index) => {
        return (
            <div className="p-grid">
              <div className="p-col-3">
                <span key={item.name} style={{textTransform: 'capitalize'}}> {item['count'] + ' x ' + item.name}</span>
              </div>
              <div className="p-col-2">
                <NumberFormat className="p-ml-2" value={item.price} prefix={'₪'} displayType={'text'} fixedDecimalScale decimalScale={2}/>
              </div>
            </div>
            );
        })
      )
  }
}

    const { summeryCart, totalAmount } = useContext(Context);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Shoping Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Ingredients List</h4>
          <div>
              {summeryList(summeryCart)}
              <hr />
              <div>Total Amount: 
                <NumberFormat className="p-ml-2" value={totalAmount} prefix={'₪'} displayType={'text'} fixedDecimalScale decimalScale={2}/>
              </div>
          </div>
          <hr />
          <UserDataForm 
          onSumbit={hadleSubmit}/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>hadleSubmit}>Confirm order</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default SummeryModal;
  