import React, { useState, useEffect } from "react";
import axios from "axios";

const Crud = () => {
  const [formData, setFormData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const [editID, setEditID] = useState();

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const { userId, id, title, body } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && id && title && body) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({ userId: "", id: "", title: "", body: "" });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = () => {
    if (userId && id && title && body) {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${editID}`, formData)
        .then(() => {
          setFormData({ userId: "", id: "", title: "", body: "" });
          setRefresh(refresh + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (deleteID) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${deleteID}`)
      .then((res) => {
        console.log("Deleted", res);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (editIDNotState) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${editIDNotState}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
    // console.log(data);
  }, [refresh]);

  return (
    <div className="container bg-black max-w-fit">
      <div className="row">
        <div className="mr-1 flex">
          <h4 className="text-gray-400"> Post </h4>
          <form onSubmit={handleSubmit}>
            <div className="mr-2 ">
              <label htmlFor="userId" className="text-gray-400 p-3">
                User Id
              </label>
              <input
                type="text"
                className="bg-gray-400"
                id="userId"
                placeholder="Enter user id"
                name="userId"
                value={userId}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="id" className="text-gray-400 p-3 flex">
                Id
              </label>
              <input
                type="text"
                className="bg-gray-400"
                id="id"
                placeholder="Enter id"
                name="id"
                value={id}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="title" className="text-gray-400 p-3">
                Title
              </label>
              <input
                type="text"
                className=" bg-gray-400"
                id="title"
                placeholder="Enter title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="body" className="text-gray-400 p-3">
                Body
              </label>
              <input
                className=" bg-gray-400"
                id="body"
                rows="3"
                placeholder="Enter body"
                name="body"
                value={body}
                onChange={handleChange}
              ></input>
            </div>

            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                handleUpdate();
              }}
            >
              Update
            </button>
          </form>

          <hr />

          <table className="table table-striped ">
            <thead>
              <tr className="bg-gray-400 outline">
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="bg-gray-500 outline p-5">{item.userId}</td>
                  <td className="bg-gray-500 outline p-2">{item.id}</td>
                  <td className="bg-gray-500 outline p-3">{item.title}</td>
                  <td className="bg-gray-500 outline p-3">{item.body}</td>
                  <td>
                    <button
                      className="btn btn-warning bg-black"
                      onClick={() => {
                        handleEdit(item.id);
                        setEditID(item.id);
                      }}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn btn-danger bg-black"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crud;

