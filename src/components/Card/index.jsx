import { useState } from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

export default function Card(props) {
    const { e } =props;
    const { del } =props;
    const { edit } =props;
    const { doit } =props;
    const { doitagain } =props;

    const [state, SetState] = useState('true');
    const [state2, SetState2] = useState('false1');
    const [state3, SetState3] = useState('card');

    if( e.do == 'true' ){
        console.log('true');
        // SetState('false');
        // SetState2('true2');
        // SetState3('card2');
    }
    
    let matn = `${e.matn}`;
    if (matn.length > 100) {
            matn = matn.substring(0, 100);
    }

    return (
        <div className={clsx(cn[state3])}>
            <div className={clsx(cn['in'])}>
                <button onClick={()=>{
                    edit(e.id);
                }}><i class="fa-regular fa-pen-to-square"></i></button>
                <button onClick={()=>{
                    del(e.id);
                }}><i class="fa-regular fa-trash-can"></i></button>
                <button onClick={()=>{
                    doit(e.id);
                    SetState('false');
                    SetState2('true2');
                    SetState3('card2');
                }} className={clsx(cn[state])}><i class="fa-regular fa-square"></i></button>
                <button onClick={()=>{
                    doitagain(e.id);
                    SetState('true');
                    SetState2('false1');
                    SetState3('card');
                }} className={clsx(cn[state2])}><i class="fa-regular fa-square-check"></i></button>
            </div>
            <p>{matn}</p>
            <div className={clsx(cn['soat'])}>
                <p>{e.time}</p>
            </div>
        </div>
    )
}