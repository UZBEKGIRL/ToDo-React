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
    const [editF, setEditF] = useState(true);
    const [editNumber, setEditNumber] = useState(0);
    

    let input = useRef();
    useEffect(()=>{
        console.log('Ozgardi');

        return ()=>{
            console.log('cleanup');
        }
    },[ arr])

    function doit(index) {
        arr[index].do = true;
        console.log(arr[index].do);
        localStorage.setItem('todos', JSON.stringify(arr));
        console.log(arr);
    }
    function doitagain(index) {
        arr[index].do = false;
        console.log(arr[index].do);
        localStorage.setItem('todos', JSON.stringify(arr));
        console.log(arr);
    }
    function del(index) {
        console.log("del");
        console.log(index);
        let aaa = arr.filter((e)=>{
            if(e.id !== index) return e;
        })
          setArr(aaa);
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
                if( editF == false){
                    let soat = new Date().getHours();
                    let minut = new Date().getMinutes();
                    let obj = {
                        id: editNumber,
                        text : input.current.value,
                        time: `${soat}:${minut}`,
                        do: false
                    };
                    let newArr = arr.map((e)=>{
                        if(e.id == editNumber){
                            e=obj;
                            return obj;
                        }else{
                            return e;
                        }
                    });
                    localStorage.setItem("todos", JSON.stringify(newArr));
                    setArr(newArr);
                    
                }
                else{
                    console.log(false);
                    let soat = new Date().getHours();
                    let minut = new Date().getMinutes();
                    let obj = {};
                    if(todos.length == 0){
                        obj = {
                            id: 0,
                            text : input.current.value,
                            time: `${soat}:${minut}`,
                            do: false
                        };
                    }else{
                        obj = {
                            id: todos[todos.length-1].id+1,
                            text : input.current.value,
                            time: `${soat}:${minut}`,
                            do: false
                        };
                    }
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
                        console.log(e);
                        if (arr.length == 0) {
                            console.log(arr.length);
                            return <Typography tag='h1' classname='main'>ToDolar hali mavjud emas!</Typography>
                        }
                       return <Card e= {e} arr={arr} del = {del} edit={edit} doit={doit} doitagain={doitagain}></Card>
                    })
                
                }
                
                
            </div>
        </div>  
        </>
    )
    
}