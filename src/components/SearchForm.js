import React from "react";

function SearchForm(props) {
  return (
    <form>
      
      <div className="form-group row">
        <div className="col-xs-2">
          <label htmlFor="search">Name</label>
          <label htmlFor="search">Position</label>
          <label htmlFor="search">Office</label>
          <label htmlFor="search">Age</label>
          <label htmlFor="search">Start Date</label>
          <label htmlFor="search">Salary</label>
        </div>

        <br />
        
        <div className="col-xs-2">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control-inline"
          placeholder="Search For a Movie"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control-inline"
          placeholder="Search For a Movie"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control-inline"
          placeholder="Search For a Movie"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control-inline"
          placeholder="Search For a Movie"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control-inline"
          placeholder="Search For a Movie"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control-inline"
          placeholder="Search For a Movie"
          id="search"
        />
        </div>
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
