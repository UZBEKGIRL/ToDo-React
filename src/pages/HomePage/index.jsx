import clsx from "clsx";
import cn from './style.module.scss'
import Card from "../../components/Card";



export default function HomePage() {
    let todos = JSON.parse(localStorage.getItem("todo"));
    if(todos == null){
        todos = [{}];
    }
    

    let a = {
        id: '1',
        matn: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, vero suscipit magnam autem commodi voluptatibus corporis quidem deserunt accusamus labore qui, obcaecati nesciunt ea placeat, odit fugit facere illum sit eius vitae reiciendis expedita eveniet architecto eum. Commodi, quod pariatur? Doloremque ipsa nulla, accusamus magni, est officiis illum vitae excepturi quibusdam quisquam consequatur distinctio ullam quas aliquid soluta quos accusantium unde pariatur laudantium. Sapiente possimus et ratione maxime dolorum quisquam pariatur architecto accusantium voluptatum voluptatibus dolores consectetur, voluptate magnam molestias eum deserunt nam corporis blanditiis. Quam culpa, nulla distinctio rem dignissimos eum, quos dolorum magni repudiandae velit a, ullam incidunt odio?",
        time: '12;40',
        do: true
    }

    function doit(index) {
        a.do = 'true';
        console.log(a.do);
    }
    function doitagain(index) {
        a.do = 'false';
        console.log(a.do);
    }

    function del(index) {
        console.log("del");
        console.log(index);
    }
    function edit(index) {
        console.log("edit");
        console.log(index);
    }
    return (
        <>
        <div className={clsx(cn['DOM'])}>
      
            <h1>To-Do-List</h1>

            <div className={clsx(cn['cards'])}>
                
                <Card e= {a} del = {del} edit={edit} doit={doit} doitagain={doitagain}></Card>
            </div>
        </div>  
        </>
    )
    
}