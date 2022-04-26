import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Piratas = () => {
  const [piratas, setPiratas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPiratas();
  }, []);

  const getPiratas = () => {
    axios
      .get("http://localhost:8080/api/piratas")
      .then((res) => {
        setPiratas(res.data.piratas);
        console.log(res.data);
      })
      .catch((err) => console.log("Error:", err));
  };

  const deletePirata = (idPirata) => {
    fetch("http://localhost:8080/api/piratas/delete/" + idPirata, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => {
        console.log("eliminada: ", res);
        getPiratas();
      });
  };

  return (
    <div>
       {/*  <Link to={"/"}> <p>VOLVER AL HOME</p></Link> */}
        <button className="btn6" onClick={()=>navigate("/")}>VOLVER AL HOME</button>
    <div className="btn_piratas">
        <h2>
            Tripulacion Pirata
        </h2>
    <button className="btn5" onClick={()=>navigate("/piratas/new")}>AGREGAR PIRATA</button>
    
    </div>
      <table class="table">
        {/* <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Posicion</th>
            <th scope="col">Accioness</th>
          </tr>
        </thead> */}
        <tbody className="trip1">
          {piratas.map((pirata, i) => (
            <div className="tripulacion">
                <div className="foto">
                <img className="foto2" src="https://img.freepik.com/vector-gratis/craneo-pirata-barbudo-bigote-vintage_225004-106.jpg?w=2000" alt="Pirata pic"/>
                   
                </div>
                <div className="trip22">
                    <div className="trip221">
                        <th scope="row"><h1>{pirata.name}</h1></th>
                    </div>
                    <div className="trip222">
                        <div className="btna"><button className="btnc" onClick={() => navigate("/piratas/" + pirata._id)}><p className="btntxt">VER DETALLE</p></button></div>
                        <div className="btnb"><button className="btnd" onClick={() => deletePirata(pirata._id)}><p className="btntxt">CAMINA POR LA BORDA</p></button></div>
                    </div>
                </div>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Piratas;