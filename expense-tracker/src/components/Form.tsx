import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="label-control">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="label-control">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="label-control">
          Category
        </label>
        <select className="form-select" id="category">
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default Form;
