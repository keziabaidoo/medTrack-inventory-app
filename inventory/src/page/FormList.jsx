import React from "react";
import Formlist from "../AllStyles/Formlist.module.css";
import { drugData } from "../db.js";
import { useDispatch } from "react-redux";
import { DELETE_DRUG} from "../store/action";


function FormList({drugs}) {
    console.log(drugs)

    const dispatch = useDispatch()

    const deleteDrug = (drugId) => {
        dispatch({type: DELETE_DRUG, payload:drugId})
    }
  return (
    <>
      <div className={Formlist.formContainer}>
        <h2 style={{}}>Drug List</h2>
        <div className="">
          <table className="">
            <tbody>
            <tr>
              <th>Drug Name</th>
              <th>Description</th>
              <th>Drug Code</th>
              <th>Unit of Pricing</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {drugData.map((drugs) => {
              return (
                <tr key={drugs.id} > 
                  <td>{drugs.DrugName}</td>
                  <td>{drugs.Description}</td>
                  <td>{drugs.DrugCode}</td>
                  <td>{drugs.UnitPricing}</td>
                  <td>{drugs.Price}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      textAlign: "center",
                    }}
                  >
                    <button onClick={()=> deleteDrug(drug.id)}>Delete</button>
                    <button>Update</button>
                    <button>View</button>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FormList;
