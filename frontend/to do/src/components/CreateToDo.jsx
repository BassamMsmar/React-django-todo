const CreateTodo = () => {
  return (
    <div className="container">
      <form className="row w-100">
        <div className="col-8">
          <input type="text" className="form-control" placeholder="Enter Todo Title" />
        </div>
        <div className="col-2">
          <select className="form-select">
            <option value="Done">Done</option>
            <option value="InProgress">InProgress</option>
          </select>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
