import { useState } from "react";
import { Input } from "../UI/Input";

const initialValue = {
  name: "",
  surname: "",
  city: "",
  email: "",
  phone: "",
};

export function ProductsForm() {
  const [formState, setFormState] = useState(initialValue);

  const [errorState, setErrorState] = useState(initialValue);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorState(validateForm());
  };

  const validateForm = () => {
    let error = {};

    if (formState.name.length < 2) {
      error.name = "Name is too short";
    }
    if (formState.surname.length < 2) {
      error.surname = "Surname is too short";
    }
    if (formState.city.length < 2) {
      error.city = "City is too short";
    }
    if (
      !/^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/.test(
        formState.email
      )
    ) {
      error.email = "Email is not valid";
    }

    if (formState.phone.length < 10) {
      error.phone = "Phone is too short";
    }

    return error;
  };

  return (
    <section>
      <p className="form__title">Or Subscribe to the Newsletter</p>

      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name..."
          error={errorState.name}
          value={formState.name}
          name="name"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Surname..."
          error={errorState.surname}
          value={formState.surname}
          name="surname"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="City..."
          error={errorState.city}
          value={formState.city}
          name="city"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Email address..."
          error={errorState.email}
          value={formState.email}
          name="email"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Phone address..."
          error={errorState.phone}
          value={formState.phone}
          name="phone"
          onChange={handleChange}
        />

        <button type="submit" className="form__btn">
          submit
        </button>
      </form>
    </section>
  );
}
