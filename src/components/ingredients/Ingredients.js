import React, { useEffect, useContext, useState } from 'react';
import {Context, addItem, removeItem} from '../../components/App'
import axios from 'axios';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import NumberFormat from 'react-number-format';
import SummeryModal from './SummeryModal';

const Ingredients = (props) =>{

    const [ingredients, uploadIngredients] = useState([]);
    const {cart, totalAmount} = useContext(Context);

    const addIngredient = (ingredient) =>{addItem(ingredient);};
    const removeIngredient = (ingredient) =>{removeItem(ingredient);};

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getIngredients');
            uploadIngredients(res.data.items);
          })();
      }, []);
   
        const ingredientsList = (ingredients) => {
            if (ingredients && ingredients.length > 0) {
                return (ingredients.map((ingredient, index) => {
                  return (
                      <div>
                      <Button label={ingredient.name + ' price: ₪' + ingredient.price} className="p-button-raised p-button-text" 
                      onClick={()=> addIngredient(ingredient)} style={{textTransform: 'capitalize', width: '100%'}} />
                        <hr style={{marginTop: '0.2rem', marginBottom: '0.2rem'}}/>
                      </div>
                      );
                  })
                )
            }
        }
        const cartList = (ingredients) => {
            if (ingredients && ingredients.length > 0) {
                return (ingredients.map((ingredient, index) => {
                  return (
                      <div>
                      <Button label={ingredient.name + ' price: ₪' + ingredient.price} className="p-button-raised p-button-text" 
                      onClick={()=> removeIngredient(ingredient)} style={{textTransform: 'capitalize', width: '100%'}} />
                        <hr style={{marginTop: '0.2rem', marginBottom: '0.2rem'}}/>
                      </div>
                      );
                  })
                )
            }
        }
        const [modalShow, setModalShow] = useState(false);
            return (
              <div className="p-grid">
                <div className="p-offset-1 p-col-3">
                    <h1>Ingredients List</h1>
                    {!ingredients ? <h4>Loading...</h4> : ingredientsList(ingredients) }
                </div>
              <div className="p-col-3">
                <h1>My Shoping List</h1>
                    {cart.length > 0 ? (
                        cartList(cart)
                    ) : (
                    <h3>Your cart is empty</h3>
                    )}
                </div>
                <div className="p-offset-1 p-col-2 p-d-flex">
                    <Card className="totalCartCard" title="My Cart" style={{width: '250px', height: '300px'}}>
                        <p># Ingredients: {cart.length}</p>
                        <p>Total Amount: 
                        <NumberFormat className="p-ml-1 p-mr-1" value={totalAmount} prefix={'₪'} displayType={'text'} fixedDecimalScale decimalScale={2}/></p>
                        <Button label="Order" icon="pi pi-credit-card" iconPos="right" style={{width: '100%'}}
                        onClick={() => setModalShow(true)} />
                    </Card>
                </div>
                <SummeryModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
              </div>
            );
          }

export default Ingredients;