import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h6 className="text-center fw-bold">Show/Hide Password</h6>
        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            className="form-control"
            placeholder="Enter Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
          />
          <span
            className="input-group-text"
            id="basic-addon2"
            onClick={() => setShow(!show)}
          >
            {show ? <BiSolidHide /> : <BiSolidShow />}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
