import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "reactstrap";

import axios from "axios";

function Body({ name, id, location }) {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?inc=female,name,location,id")
      .then((res) => {
        setPersons(res.data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Row>
      <Col className="mb-3">
        <h1>{persons[0].name.first}</h1>
        <p>{persons[0].location.city}</p>
      </Col>
    </Row>
  );
}

export default Body;
