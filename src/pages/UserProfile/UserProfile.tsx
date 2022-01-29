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
    name: yup.string().required("Required field"),
    username: yup.string().required("Required field"),
    email: yup.string().required("Required field"),
    street: yup.string().required("Required field"),
    city: yup.string().required("Required field"),
    zipcode: yup.string().required("Required field"),
    phone: yup.string().required("Required field"),
    website: yup.string().required("Required field"),
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
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, website: e.target.value })
            }
          />
          <Textarea
            value={formik.values.comment}
            placeholder="Enter comment"
            label="Comment"
            name="comment"
            onChange={(e: any) =>
              formik.setValues({ ...formik.values, comment: e.target.value })
            }
          />
        </div>
      )}
      <Button
        className="userProfile__submit"
        type="submit"
        text="Отправить"
        onClick={() => formik.handleSubmit()}
      />
    </div>
  );
}

export default UserProfile;
