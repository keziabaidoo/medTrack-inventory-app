import React from "react";
// import LabForm from "./LabForm";

function Laboratory() {
  return (
    <>
      {/* <LabForm /> */}
      <section>
        <form action="" className="labform">
          <div>
            <label htmlFor="lab item">Lab item Name</label>
            <input type="text" placeholder="Type lab Name here" id="lab item" />
          </div>

          <div>
            <label htmlFor="lab type">Lab Type</label>
            <div className="select">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="main category">Main Category</label>
            <div className="select">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="sub category">Sub Category</label>
            <input type="text" placeholder="Head and Skull" id="sub category" />
          </div>

          <div>
            <label htmlFor="lab code">Lab Item Code</label>
            <input type="text" placeholder="Aoc12FH" id="lab code" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="2.02" id="price" />
          </div>
          <button>Add</button>
        </form>
      </section>
      <section>
        <h3 className="lablist">List</h3>
      </section>
    </>
  );
}

export default Laboratory;
