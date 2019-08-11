import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

function FormTest(props) {
  let btn = (
    <button className={`${styles.ButtonStyle} ${styles.nema}`}>Send</button>
  );
  if (props.name && props.email && props.message) {
    btn = <button className={styles.ButtonStyle}>Send</button>;
  }

  return (
    <div className={styles.Form}>
      <div className={styles.FormBox}>
        <input
          type="text"
          className={styles.Input}
          name="email"
          onChange={props.change}
          value={props.email}
        />
        <label
          className={props.email ? styles.LabelValue : styles.LabelNoValue}
        >
          Email
        </label>
      </div>
      <div className={styles.FormBox}>
        <input
          type="text"
          className={styles.Input}
          name="name"
          onChange={props.change}
          value={props.name}
        />
        <label className={props.name ? styles.LabelValue : styles.LabelNoValue}>
          Name
        </label>
      </div>
      <div className={styles.FormBox}>
        <input
          type="text"
          className={styles.Input}
          name="message"
          onChange={props.change}
          value={props.message}
        />
        <label
          className={props.message ? styles.LabelValue : styles.LabelNoValue}
        >
          Enter Message
        </label>
      </div>

      {btn}
    </div>
  );
}

FormTest.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default FormTest;
