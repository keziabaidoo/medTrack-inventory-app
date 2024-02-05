import React, { useEffect, useState } from "react";
// import { v4 as uuid } from "uuid";
import Header from "../components/Header";
import HomeStyles from "../AllStyles/Home.module.css";
import FormList from "./FormList";
import { useSelector, useDispatch } from "react-redux";
import { ADD_DRUG, FETCH_DRUG, addDrug } from "../store/action";
import { addDrugRequest, fetchDrugRequest } from "../store/thunk";

// import { drugReducer } from "../redux-store/redux-reducers/drugReducer.js";

function Home() {
  const [DrugName, setDrugName] = useState("");
  const [Description, setDescription] = useState("");
  const [UnitPrice, setUnitPrice] = useState("");
  const [DrugCode, setDrugCode] = useState("");
  const [Price, setPrice] = useState("");

  const drugs = useSelector((state) => state.drugs.drugs);
  console.log(drugs);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const drug = {
      // id:uuid(),
      DrugName,
      Description,
      DrugCode,
      UnitPrice,
      Price,
    };

    dispatch(addDrugRequest(drug));
    setDrugName(""),
      setDescription(""),
      setDrugCode(""),
      setUnitPrice(""),
      setPrice("");
  }

  useEffect(() => {
    dispatch(fetchDrugRequest());
  }, []);
  return (
    <>
      <Header />

      <section className={HomeStyles.formContent}>
        <div className={HomeStyles.formdetails}>
          <form onSubmit={handleSubmit} className={HomeStyles.pharmform}>
            <div className={HomeStyles.formgroup}>
              <label htmlFor="drugname">Drug Name</label>
              <input
                type="text"
                placeholder="Type Drug Name"
                id="drugname"
                name="drugname"
                value={DrugName}
                onChange={(e) => setDrugName(e.target.value)}
              />
            </div>

            <div className={HomeStyles.formgroup}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Drug description"
                value={Description}
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className={HomeStyles.formgroup}>
              <label htmlFor="unitprice">Unit of Pricing</label>
              <input
                type="text"
                placeholder="Tablet"
                id="unitPrice"
                value={UnitPrice}
                name="unitPrice"
                onChange={(e) => setUnitPrice(e.target.value)}
              />
            </div>

            <div className={HomeStyles.formgroup}>
              <label htmlFor="drugcode">Drug Code</label>
              <input
                type="text"
                placeholder="A0c123FH"
                id="drugCode"
                value={DrugCode}
                name="drugCode"
                onChange={(e) => setDrugCode(e.target.value)}
              />
            </div>

            <div className={HomeStyles.formgroup}>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                placeholder="2.02"
                id="price"
                className={HomeStyles.labelInput}
                value={Price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />

              <div className={HomeStyles.btn}>
                <button>Add</button>
              </div>
            </div>
          </form>

          <div className={HomeStyles.graphContent}></div>
        </div>
      </section>

      <FormList drugs={drugs} />
    </>
  );
}

export default Home;
