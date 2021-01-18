import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { required } from "./validate";
import { CustomField } from "./Fields/CustomField.jsx";
import { FIREBASE_DB } from "../../../../utils/apies";
import { updateCart } from "../../../../redux/store/store.actions";

let OrderForm = (props) => {
  const store = useSelector((state) => state.store);
  const { cart } = store;
  const { handleSubmit } = props;

  const getTotalPrice = () => {
    if (cart.length > 0)
      return cart
        .map((product) => Number(product.price) * product.quantity)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    else return 0;
  };

  const submit = (values, dispatch) => {
    const submitCart = cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    }));

    FIREBASE_DB.ref(`orders`)
      .child(`order${new Date().getTime()}`)
      .set(
        JSON.stringify({
          user: { ...values },
          cart: submitCart,
          totalPrice: getTotalPrice(),
        })
      );

    dispatch(updateCart([]));
    dispatch(reset("order-form"));
  };

  return (
    <form className="order-form" onSubmit={handleSubmit(submit)}>
      <h5 className="text-center">Order Form</h5>
      <Field
        name="name"
        component={CustomField}
        className="w-100"
        label="Name"
        validate={[required]}
      />
      <Field
        name="surname"
        component={CustomField}
        className="w-100"
        label="Surname"
        validate={[required]}
      />
      <Field
        name="address"
        component={CustomField}
        className="w-100"
        label="Address"
        validate={[required]}
      />
      <Field
        name="phone"
        component={CustomField}
        type="tel"
        className="w-100"
        label="Phone"
        validate={[required]}
      />
      <div className="form-group">
        <p className="font-weight-bold">{`Total: $${getTotalPrice()}`}</p>
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Order
      </button>
    </form>
  );
};

OrderForm = reduxForm({
  form: "order-form",
})(OrderForm);

export default OrderForm;
