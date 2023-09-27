import React from "react";
import "../UserCSS.css";
import axios from "axios";
// import { Link } from "react-router-dom"
const BaseURL = "http://localhost:5000/api/user";
const ListUser = () => {
  const [userList, setUserList] = React.useState(null);
  const [pageOption , setPageOption] = React.useState({
    page:1,
    limit:8
  });
  React.useEffect(() => {
    axios.get(`${BaseURL}/list?page=${pageOption.page}&limit=${pageOption.limit}`).then((response) => {
      setUserList(response.data);
    });
  }, [pageOption.page]);

  const handlePreviousPage = () => {
    setPageOption({ ...pageOption ,page: pageOption.page-1 });
    console.log(pageOption);
  }
  const handleNextPage = () => {
    console.log(pageOption);
    setPageOption({ ...pageOption ,page: pageOption.page+1 });
  }

  console.log(userList);
  if (!userList) return null;

  return (
    <>
      <div className="d-flex align-content-around flex-wrap">
        {userList.data.rows.map((user) => (
          <div className="card m-6 w-25" key={user.id}>
            <div className="card-header">
                <h4>{user.firstName} <span></span> {user.lastName}</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.mobile}</li>
                <li className="list-group-item">{user.email}</li>
              </ul>
              <button className=" m-2 btn btn-info" > Update </button>
              <button className=" m-2 btn btn-warning" > Delete </button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className=" m-2 btn btn-info" onClick={handlePreviousPage} disabled={pageOption.page === 1 ? true : false}> Previous </button>
        <button className=" m-2 btn btn-warning" onClick={handleNextPage}> Next </button>
      </div>
    </>
  );
};

export default ListUser;
