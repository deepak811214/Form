import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    fname: "",
    gender: "",
    dob: "",
    freelance: false,
    level: ""
  });
  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === "checkbox" ? event.target.checked : value;
    setData((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  };
  return (
    <div className="App">
      Name
      <input
        type="text"
        name="fname"
        value={data.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="female" />
        Female
      </div>
      <div>
        <input
          type="checkbox"
          name="freelance"
          value="sleep"
          checked={data.freelance}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        I agree
      </div>
      <select
        onChange={(e) => {
          handleChange(e);
        }}
        name="level"
        value={data.level}
      >
        <option value="btech">btech</option>
        <option value="mtech">mtech</option>
      </select>
      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
}
