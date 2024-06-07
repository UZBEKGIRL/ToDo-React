import { useState } from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

export default function Card(props) {
  const { e, del, edit, doit, doitagain } = props;

  const [state, setState] = useState(true);
  const [state2, setState2] = useState("false1");
  const [state3, setState3] = useState("card");

  if (e.do === true) {
    console.log("true");
    // setState(false);
    // SetState2('true2');
    // SetState3('card2');
  }

  let matn = `${e.matn}`;
  if (matn.length > 100) {
    matn = matn.substring(0, 100);
  }

  return (
    <div className={clsx(cn[state3])}>
      <div className={clsx(cn["in"])}>
        <button
          onClick={() => {
            edit(e.id);
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            del(e.id);
          }}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
        <button
          onClick={() => {
            doit(e.id);
            setState(false);
            setState2("true2");
            setState3("card2");
          }}
          className={clsx(cn[state])}
        >
          <i class="fa-regular fa-square"></i>
        </button>
        <button
          onClick={() => {
            doitagain(e.id);
            setState(true);
            setState2("false1");
            setState3("card");
          }}
          className={clsx(cn[state2])}
        >
          <i class="fa-regular fa-square-check"></i>
        </button>
      </div>
      {/* <p>{matn}</p> */}
      <Typography tag='h1' classname='h1'>{matn}</Typography>
      <div className={clsx(cn["soat"])}>
        <Typography tag='p' classname='p'>{e.time}</Typography>
      </div>
    </div>
  );
}