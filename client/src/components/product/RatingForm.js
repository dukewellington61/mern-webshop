import React, { useState } from "react";

const RatingForm = (user) => {
  const [formData, setFormData] = useState({
    description: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createRating(formData);
  };

  return (
    <form action="/action_page.php">
      <div id="review_card" className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>placeholder</div>
          </li>
          <li className="list-group-item">
            <textarea
              type="text"
              name="description"
              placeholder="enter a product review"
              onChange={(e) => onChange(e)}
            ></textarea>
          </li>
          <input type="hidden" name="user_id" value={user._id}></input>
          <input type="hidden" name="user_name" value={user.firstname}></input>
          <li>
            <input
              type="submit"
              value="Submit"
              onSubmit={(e) => onSubmit(e)}
            ></input>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default RatingForm;
