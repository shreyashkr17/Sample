import React from "react";
import { useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import Loader from "../layouts/Loader/Loader";
import Navbar from "../Navbar/navbar";
import "./DiseaseDetail.css";

function DiseaseDetail() {
  const { loading, disease } = useSelector((state) => state.diseases);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={disease.Disease_Name} />
          <Navbar />
          <div className="disease-detail">
            <div className="Dname">{disease.Disease_Name}</div>
            <div className="discription">
              <h3 className="intro">
                Here are some ayurvedic materials to cure {disease.Disease_Name}
              </h3>
              <div>
                {disease.Remidies &&
                  disease.Remidies.map((remedy) => (
                    <div className="remedies_container">
                      <div className="material Rem_heading">
                        <h2>{remedy.material}</h2>
                      </div>
                      <div className="dirOfUse Rem_heading">
                        <h3>Direction of Use</h3>
                        <p>{remedy.dir_for_use}</p>
                      </div>
                      <div className="precautionSec Rem_heading">
                        <h3>Precautions</h3>
                        <ul>
                          {remedy.Precautions &&
                            remedy.Precautions.map((precaution) => (
                              <li>{precaution}</li>
                            ))}
                        </ul>
                      </div>
                      <div className="alternatives Rem_heading">
                        <h3>Ayurvedic Products available in market</h3>
                        <p>{remedy.Alternatives}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DiseaseDetail;
