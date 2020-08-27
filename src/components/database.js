import React from "react";
import { MDBDataTableV5 } from "mdbreact";
//first name, last name, photo, email, DOB
export default function employees() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "FirstName",
        field: "firstName",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
        {
          label: "lastName",
          field: "lastName",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
      },
      {
        label: "email",
        field: "email",
        width: 270,
      },
      {
        label: "DOB",
        field: "date",
        sort: "disabled",
        width: 150,
      },

    ],
    rows: [
      {
        firstName: "Tiger ",
        LastName: "Nixon",
        email: "example@aol.com",
        date: "2011/04/25",
      },
      {
        firstName: "Garrett Winters",
        LastName: "Winters",
        email: "example@aol.com",
        date: "2011/07/25",
      },
      {
        firstName: "Ashton",
        LastName: "Cox",
        email: "example@aol.com",
        date: "2009/01/12",
      },
      {
        firstName: "Cedric",
        LastName: "Kelly",
        email: "example@aol.com",
        date: "2001/09/15",
      },
      {
        firstName: "Airu",
        LastName: "Sato",
        email: "example@aol.com",
        date: "2000/12/19",
      },
      {
        firstName: "Brielle",
        LastName: "Williamson",
        email: "example@aol.com",
        date: "2001/06/02",
      },
      {
        firstName: "Rhonda",
        LastName: "Honda",
        email: "example@aol.com",
        date: "2009/06/02",
      },

      {
        firstName: "Collen",
        LastName: "Hertz",
        email: "example@aol.com",
        date: "2000/12/09",
      },
      {
        firstName: "Sonya",
        LastName: "Frost",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Gina",
        LastName: "Gaines",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Quin",
        LastName: "Flynn",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Sandra",
        LastName: "Soto",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Hailey",
        LastName: "Kennedy",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Tina",
        LastName: "Herold",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Michelle",
        LastName: "Silva",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Paul",
        LastName: "Bryd",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Nick",
        LastName: "Rivera",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Bradley",
        LastName: "Gary",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Jason",
        LastName: "Caldwell",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Amanda",
        LastName: "Nicole",
        email: "example@aol.com",
        date: "2009/06/02",
      },
      {
        firstName: "Joy",
        LastName: "Vance",
        email: "example@aol.com",
        date: "2009/06/02",
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
    />
  );
}
