import { useState, useContext } from "react";

import { MainContext } from "../context/MainContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Filter() {

  const { byRegion, updateRegion } = useContext(MainContext);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    updateRegion('')
  };

  const regionChange = (region) => {
    updateRegion(region)
    setToggle(!toggle);
  }

  return (
    <div className="filter-container">
      <div onClick={handleToggle} className="filter-header">
        {byRegion === "" ?  
          <div className="filter-header-title">
            Filter by <strong>Region</strong>
          </div>
          : 
          <div className="filter-header-title">
            Clear filter <strong>{byRegion}</strong>
          </div>
        }
        <div>
          <FontAwesomeIcon icon={faAngleDown} size="sm" />
        </div>
      </div>
      {toggle && (
        <div className="filter-list">
          <button onClick={() => regionChange('africa')} className="filter-list-item">Africa</button>
          <button onClick={() => regionChange('america')} className="filter-list-item">America</button>
          <button onClick={() => regionChange('asia')} className="filter-list-item">Asia</button>
          <button onClick={() => regionChange('europe')} className="filter-list-item">Europe</button>
          <button onClick={() => regionChange('oceania')} className="filter-list-item">Oceania</button>
        </div>
      )}
    </div>
  );
}

export default Filter;
