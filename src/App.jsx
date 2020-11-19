import "./App.css";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?results=20&nat=fr&gender=female&inc=name,dob,location,picture,id,login"
      )
      .then((res) => {
        setPersons(res.data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  console.log(persons);
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;
