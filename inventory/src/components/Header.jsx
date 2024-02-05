import React from "react";
import HeadStyles from "../AllStyles/Header.module.css";

function Header() {
  return (
    <>
      <section className={HeadStyles.header}>
        <div className={HeadStyles.topnav}>
          <a className={""} href="https://medtrack.io">
            MedTrack
          </a>
          <div className={HeadStyles.searchContainer}>
            <form action="">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
