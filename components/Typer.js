import React, { useRef } from "react";
import "../styles/Typer.module.css";
import Typed from "typed.js";
import classes from "../styles/Typer.module.css";

const Typer = (props) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [props.text],
      typeSpeed: 150,
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={classes.wrap}>
      <div className="type-wrap">
        <span className={classes.text} ref={el} />
      </div>
    </div>
  );
};

export default Typer;
