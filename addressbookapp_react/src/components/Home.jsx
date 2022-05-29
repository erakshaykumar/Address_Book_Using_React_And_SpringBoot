import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AddressbookService from "../service/AddressbookService";
import { useEffect } from "react";
import delete1 from "../components/assets/icons/delete.svg"
import edit1 from "../components/assets/icons/edit.svg"

export default function Home(props) {
  const [contacts, setContacts] = useState([]);

  
  useEffect(() => {
    fetchContactsApi();
  });

  function fetchContactsApi() {
    AddressbookService.getAllContacts()
      .then((result) => {
        setContacts(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let getProps=()=>{
    console.log(props)
  }

  let deleteContact = (id)=>{
      alert("deleting id : "+id)
      AddressbookService.delete(id);
      fetchContactsApi();
  }

  let updateContact = (id)=>{
      alert("updating id: "+id)
      props.history.push({
        pathname:"/form",
        state:id
      })

  }

  return (
    <div>
      <span></span>
      <header className="header-content header">
        <div className="logo-content">
          <img
            src="../assets/images/logo.PNG"
            alt=""
            className="logo-content-img"
            width="50px"
            onClick={getProps}
          />
          <div>
            <span className="addr-text">ADDRESS</span>
            <br />
            <span className="addr-text addr-book">BOOK</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="header-content">
          <div className="person-detail-text">
            PERSON DETAILS <div className="person-count"></div>
          </div>
          <Link to="/form" className="add-button">
            <img src="../assets/icons/add+24px.svg" alt="" />
            + Add Person
          </Link>
        </div>
      

      <div className="table-main">
        <table id="table-display" className="table">
          <thead>
            <tr>
              <th>SlNo</th>
              {/* <th>Unique id</th> */}
              <th>Full Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Phone Number</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
           
          {
             contacts.map((contact,i)=>{
              return(
                <tr key={contact.personId}>
                  <td>{i+1}</td>
                  {/* <td>{contact.personId}</td> */}
                  <td>{contact.fullName}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>
                  <td>{contact.city}</td>
                  <td>{contact.state}</td>
                  <td>{contact.zip}</td>
                  
                  <td>
                  <img
                    name={contact.personId}
                    src={delete1}
                    alt="delete"
                    onClick={() => deleteContact(contact.personId)}
                  />
                  <img
                    name={contact.personId}
                    src={edit1}
                    alt="edit"
                    onClick={() => updateContact(contact.personId)}
                  />
                </td>
                </tr>
              )
            })
          }
          </tbody>

        </table>
        </div>
      </div>
    </div>
  );
}
