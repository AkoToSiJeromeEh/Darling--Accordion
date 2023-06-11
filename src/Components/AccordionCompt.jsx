import PropTypes from "prop-types";
import React from "react";
import "../style/Main.css";
function AccordionCompt(props) {
  const [isShow, setShow] = React.useState(false);

  function handleToggle() {
    setShow((preval) => !preval);
  }

  return (
    <div className="accord-cont">
      <div className="accord-navi">
        <h5 className="faq-question ">
          {isShow ? <b className="bold">{props.Question}</b> : props.Question}
        </h5>
        <button className="faq-btn" onClick={handleToggle}>
          {isShow ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      <div className={isShow && "faq-answer-cont"}>
        {isShow && <small className="faq-answer">{props.Answer}</small>}
      </div>
    </div>
  );
}
export default AccordionCompt;

AccordionCompt.propTypes = {
  Question: PropTypes.string.isRequired,
  Answer: PropTypes.string.isRequired,
};
