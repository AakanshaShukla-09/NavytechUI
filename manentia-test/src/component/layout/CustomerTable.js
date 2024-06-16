import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import Avtar from "../../resources/Avtar.svg";

const apiURL = "https://jsonplaceholder.typicode.com/users";

function CustomerTable() {
  const [dataList, setDataList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getUserList();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const nameCell = (data) => {
    return (
      <div class="d-flex">
        <div class="p-2">
          <Image src={Avtar} roundedCircle width={"50"}></Image>
        </div>
        <div class="p-2">
          <h6 class="text-start">{data.name}</h6>

          <p class="text-start text-secondary">{data.email}</p>
        </div>
      </div>
    );
  };

  const actionCell = () => {
    return (
      <div>
        <a href="">
          <i class="bi bi-pencil text-dark"></i>
        </a>{" "}
        &nbsp;
        <a>
          <i class="bi bi-arrow-right text-dark"></i>
        </a>
      </div>
    );
  };

  const getUserList = () => {
    axios({
      method: "get",
      url: apiURL,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        setDataList(response.data);
      })
      .catch(() => {});
  };

  const handleSearch = (e) => {
    const newRows = dataList.filter((rows) => {
      console.log(e);
      console.log(e.target.value);
      return rows.name
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setDataList(newRows);
  };

  const columns = [
    {
      selector: (data) => data.name,
      name: "NAME",
      cell: (data) => nameCell(data),
      sortable: "true",
    },
    { selector: (data) => data.company.name, name: "COMPANY" },
    { selector: (data) => data.phone, name: "PHONE" },
    { name: "ACTIONS", cell: (data) => actionCell() },
  ];

  return (
    <div>
      <div class="d-flex py-3 gap-3">
        <Form className="flex-grow-1">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search customers"
            aria-label="Search"
            onChange={handleSearch}
          />
        </Form>

        <Form>
          <Form.Select
            class="form-control me-2"
            type="search"
            placeholder="Search customers"
            aria-label="Search"
          >
            <option value="1">Last Updated(newest)</option>
            <option value="2">Oldest</option>
          </Form.Select>
        </Form>
      </div>
      {loading ? (
        <div class="mx-auto my-auto pt-5">
          <Spinner />
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={dataList}
          pagination
          selectableRows
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 20]}
          defaultSortFieldId={1}
        />
      )}
    </div>
  );
}
export default CustomerTable;
