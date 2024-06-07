import clsx from "clsx";
import cn from "./style.module.scss";

export default function Typography(props) {

    const { tag, children, classname } = props;

    let Tag = tag;
    return (
        <Tag className = {clsx(cn[classname])}>{ children }</Tag>
    )
    
}