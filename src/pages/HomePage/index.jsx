import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import cn from './style.module.scss'
import Card from "../../components/Card";
import Typography from "../../components/Typography";



export default function HomePage() {
    // localStorage.clear();
    let todos = JSON.parse(localStorage.getItem("todos"));
    if(todos == null){
        todos = [];
        console.log("bo'sh");
    }
    const [arr, setArr] = useState(todos);
    const [num, setNum] = useState(1);
    const [editF, setEditF] = useState(true);
    const [editNumber, setEditNumber] = useState(0);

    let input = useRef();
    useEffect(()=>{
        console.log('Ozgardi');

        return ()=>{
            console.log('cleanup');
        }
    },[num, arr])

    function doit(index) {
        // a.do = 'true';
        console.log(index);
    }
    function doitagain(index) {
        // a.do = 'false';
        console.log(index);
    }
    function del(index) {
        console.log("del");
        console.log(index);
        let aaa = arr.filter((e)=>{
            if(e.id !== index) return e;
        })
        console.log(aaa);
          setArr(aaa);
        console.log(aaa);
        localStorage.setItem('todos', JSON.stringify(aaa));
    }
    function edit(index) {
        console.log("edit");
        console.log(index);
        let a = arr.filter((e)=>{
            if(e.id == index) return e;
        })
        input.current.value = a[0].text;
        setEditF(false);
        setEditNumber(index);
    }
    return (
        <>
        <div className={clsx(cn['DOM'])}>



            <h1>To-Do-List</h1>
            {/* <Typography tag='h1' classname='main'>To-Do-List</Typography> */}
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                console.log(editF);
                if( editF == false){
                    console.log(true);
                    let soat = new Date().getHours();
                    let minut = new Date().getMinutes();
                    let obj = {
                        id: editNumber,
                        text : input.current.value,
                        time: `${soat}:${minut}`,
                        do: false
                    };
                    console.log(obj);
                    console.log(editNumber);
                    let ab = arr.filter((e)=>{
                        if(e.id == editNumber){
                            e=obj;
                            console.log(e);
                            return obj;
                        }
                            return e;
                    })
                    console.log(ab);
                    localStorage.setItem("todos", JSON.stringify(ab));
                    setArr(ab);
                    console.log(arr);
                    
                }
                else{
                    console.log(false);
                    let soat = new Date().getHours();
                    let minut = new Date().getMinutes();
                    let obj = {
                        id: todos[todos.length-1].id+1,
                        text : input.current.value,
                        time: `${soat}:${minut}`,
                        do: false
                    };
                    console.log(obj);
                    todos.push(obj);
                    localStorage.setItem("todos", JSON.stringify(todos));
                    setArr(todos);
                    console.log(arr);
                }
            }}>
                <input type="text" placeholder="Enter todo" ref={input} />
                <button>Submit</button>
            </form>

            <div className={clsx(cn['cards'])}>
                {
                    arr.map((e)=>{
                       return <Card e= {e} del = {del} edit={edit} doit={doit} doitagain={doitagain}></Card>
                    })
                }
                
            </div>
        </div>  
        </>
    )
    
}