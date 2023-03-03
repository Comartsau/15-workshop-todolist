import { BiEdit,BiTrash } from "react-icons/bi";

function List({id,title,removeItem,editItem}) {



  return (
    <div className="list-item">
        <p className="title">{title}</p>
        <div className="btn-container">
            <button onClick={(() => editItem(id))}><BiEdit/></button>
            <button onClick={(() => removeItem(id))}><BiTrash/></button>
        </div>
    </div>
    )
}

export default List