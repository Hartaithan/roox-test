import "./userProfile.scss";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { User } from "../UserList/UserList";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Input/Textarea";
import Loader from "../../components/Loader/Loader";

function UserProfile() {
  let { userId } = useParams();
  const [user, setUser] = React.useState<User>();
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("getUser:", error);
        setLoading(false);
      });
  }, []); // eslint-disable-line

  const validation = yup.object({
    name: yup.string().required("Name field is required"),
    username: yup.string().required("User name field is required"),
    email: yup.string().required("E-mail field is required"),
    street: yup.string().required("Street field is required"),
    city: yup.string().required("City field is required"),
    zipcode: yup.string().required("Zip code field is required"),
    phone: yup.string().required("Phone field is required"),
    website: yup.string().required("Website field is required"),
    comment: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      street: user?.address.street,
      city: user?.address.city,
      zipcode: user?.address.zipcode,
      phone: user?.phone,
      website: user?.website,
      comment: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.info("Form", values);
    },
    validationSchema: validation,
  });

  return (
    <div className="userProfile">
      <div className="userProfile__header">
        <h3>Профиль пользоваетля</h3>
        <Button text="Редактировать" />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="userProfile__form">
          <Input
            type="text"
            value={formik.values.name}
            placeholder="Иван Иванов"
            label="Name"
            name="name"
            error={formik.errors.name}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, name: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.username}
            placeholder="Ivan"
            label="User name"
            name="username"
            error={formik.errors.username}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, username: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.email}
            placeholder="example@mail.com"
            label="E-mail"
            name="email"
            error={formik.errors.email}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, email: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.street}
            placeholder="ул. Пример"
            label="Street"
            name="street"
            error={formik.errors.street}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, street: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.city}
            placeholder="Москва"
            label="City"
            name="city"
            error={formik.errors.city}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, city: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.zipcode}
            placeholder="1234234"
            label="Zip code"
            name="zipcode"
            error={formik.errors.zipcode}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, zipcode: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.phone}
            placeholder="89991112233"
            label="Phone"
            name="phone"
            error={formik.errors.phone}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, phone: e.target.value })
            }
          />
          <Input
            type="text"
            value={formik.values.website}
            placeholder="www.example.com"
            label="Website"
            name="website"
            error={formik.errors.website}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, website: e.target.value })
            }
          />
          <Textarea
            value={formik.values.comment}
            placeholder="Enter comment"
            label="Comment"
            name="comment"
            error={formik.errors.comment}
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, comment: e.target.value })
            }
          />
        </div>
      )}
      <Button
        className={
          formik.isValid
            ? "userProfile__submit"
            : "userProfile__submit disabled"
        }
        type="submit"
        text="Отправить"
        disabled={formik.isValid ? false : true}
        onClick={() => formik.handleSubmit()}
      />
    </div>
  );
}

export default UserProfile;
