import React from "react";
import { useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import Loader from "../layouts/Loader/Loader";
import Navbar from "../Navbar/navbar";
import "./DiseaseDetail.css";

function DiseaseDetail() {
  const { error, loading, disease } = useSelector((state) => state.diseases);
  if (error) {
    alert.info("No such Disease Found");
    console.log(error);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Disease - " + disease.Disease_Name} />
          <Navbar />
          <div className="disease-detail">
            <div className="Dname">{disease.Disease_Name}</div>
            <div className="discription">
              <h3 className="intro">
                Here are some ayurvedic materials to cure {disease.Disease_Name}
              </h3>
              <div className="info">
                {disease.Remidies &&
                  disease.Remidies.map((remedy) => (
                    <div className="remedies_container">
                      <div>
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
                      {remedy.Image && (<div className="imageBox">
                        <img src={remedy.Image} alt="image" />
                      </div>)}
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
