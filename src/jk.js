// import { useState } from "react";

// const Jk = (props) => {
//     const Clickme = () => {
//         setCount(count+1);
//     }
//     const [count,setCount] = useState(0);
//     return(
//             <article className="book">
//                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
//                 <img src={props.img} alt="img"/>
//                 <h2>{props.name}</h2>
//                 <h4>{props.job}</h4>
//                 <h4>{props.text}</h4>
//                 <button type="button" onClick={Clickme} className="btn btn-info">Clicked {count} times</button>
//             </article>
//     )
// }

const Jk = (props) => {
    return(
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.marks}</td>
            </tr>
        </>
    )
}

export default Jk;