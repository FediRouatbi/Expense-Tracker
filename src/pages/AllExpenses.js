import React, { useState } from "react";
import "./alllexpenses.scss";
import { MdLibraryAdd } from "react-icons/md";
import Item from "../components/Item";
import {
  Table,
  Form,
  InputGroup,
  FormControl,
  Col,
  Row,
  Button,
} from "react-bootstrap";

const AllExpenses = () => {
  const [addExpense, setAddExpense] = useState(false);

  return (
    <div className="alllexpenses">
      <div className="add ">
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <div>Filter By : </div>
            </Col>
            <Col xs="auto">
              <select class="form-select" aria-label="Default select example">
                <option selected>Name</option>
                <option value="1">Type</option>
                <option value="2">Amount</option>
              </select>
            </Col>
            <Col xs="auto">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button type="button" class="btn btn-outline-primary">
                  search
                </button>
              </div>
            </Col>
          </Row>
        </Form>

        <MdLibraryAdd
          size={30}
          color="#4dabf7"
          className="icon"
          onClick={() => setAddExpense((prev) => !prev)}
        />
      </div>

      <Form className={addExpense ? "" : "hideit"}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInput" placeholder="Name/BUSINESS	" />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup>
              <FormControl id="inlineFormInputGroup" placeholder="Type" />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup>
              <FormControl id="inlineFormInputGroup" placeholder="Amount" />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Button type="submit">Add</Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th colSpan={3}>name/business </th>
            <th>type</th>
            <th>amount</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
          <Item delete={true} />
        </tbody>
      </Table>
    </div>
  );
};

export default AllExpenses;
