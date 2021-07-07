import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.findForm}>
      <h2 className={styles.title}>Find contacts:</h2>
      <label className={styles.label}>
        <span className={styles.labelTitle}>Find:</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="input name"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;