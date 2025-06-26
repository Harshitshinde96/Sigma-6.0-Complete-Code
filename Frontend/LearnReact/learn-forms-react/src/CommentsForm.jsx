import { useFormik } from "formik";
import { useState } from "react";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is Required";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },

    validate,
    onSubmit: (values) => { 
      alert(JSON.stringify(values, null, 2));
      addNewComment(values)
    },
  });
  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />

        <label htmlFor="textarea">Add Remarks</label>
        <textarea
          id="textarea"
          value={formik.values.remarks}
          placeholder="add few remarks"
          onChange={formik.handleChange}
          name="remarks"
        ></textarea>
        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
        />
        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
