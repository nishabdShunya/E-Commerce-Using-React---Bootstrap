import React from "react";
import { Table, Button } from "react-bootstrap";

const DUMMY_TOURS = [
  {
    id: "t1",
    date: "July 16",
    location: "DTE Energy Music Theatre",
    state: "Detroit, MI",
  },
  {
    id: "t2",
    date: "July 19",
    location: "Budweiser Stage",
    state: "Toronto, ON",
  },
  {
    id: "t3",
    date: "July 22",
    location: "Jiggy Lube Live",
    state: "Bristow, VA",
  },
  {
    id: "t4",
    date: "July 29",
    location: "AK-Chin Pavilion",
    state: "Phoenix, AZ",
  },
  {
    id: "t5",
    date: "Aug 2",
    location: "T-Mobile Arena",
    state: "Las Vegas, NV",
  },
  {
    id: "t6",
    date: "Aug 7",
    location: "Concord Pavilion",
    state: "Concord, CA",
  },
];

const Tours = () => {
  return (
    <div className="m-5 d-flex flex-column align-items-center">
      <h2 className="text-center">TOURS</h2>
      <Table className="my-5 w-75">
        <tbody>
          {DUMMY_TOURS.map((tour) => {
            return (
              <tr key={tour.id}>
                <td>{tour.date}</td>
                <td>{tour.state}</td>
                <td>{tour.location}</td>
                <td className="text-end">
                  <Button variant="warning">Buy Tickets</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tours;
