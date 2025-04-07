import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import Calendar from "../../commons/Calendar/Calendar";
import { zones } from "../../../data/data";

const Dashboard = () => {
  const [spaces, setEspaces] = useState([]);
  useEffect(() => {
    setEspaces(zones)
  }, [zones]);

  return (
    <div>
      {
        spaces.map((space)=> <Calendar zoneId={space.id} zoneName={space.nombre} />)
      }
    </div>
  );
};

export default Dashboard;