// import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import { Data } from "./data";
import Jk from "./jk";
import "./index.css";
// import Welcome from "./new";
// import Bus from './bus'
// import Welcome from "./new";

// const Greeting = () => {
//     return <h2>jai P.Bhanu teja</h2>
// }

// const Greeting = () => {
//     return React.createElement("div",
//     {},
//     React.createElement("h2",{},"Ma bava Manchodu"));
// };

// const Main = (props) => {
//     return (
//         <>
//             <h1>{props.data}</h1>
//         </>
//     )
// }

// const Car = () => {
//     return(
//         <div>
//             <h1>Ma bava gadi caru..</h1>
//         </div>
//     )
// }

// const But = () => {
//     const click = () => {
//         setCount(count+1);
//     }
//     const click1 = () => {
//         setCount1(count1+1);
//     }
//     const click2 = () => {
//         setCount2(count2+1);
//     }
//     const [count,setCount] = useState(0);
//     const [count1,setCount1] = useState(0);
//     const [count2,setCount2] = useState(0);
//     return (
//         <>
//             <h1>Counter that update together</h1><br/>
//             <center>
//                 <button onClick={click}>Clicked {count} times...</button><br/>
//                 <button onClick={click}>Clicked {count} times...</button>
//             </center>
                

//             <br/><br/>
//             <h1>Counter that update Seperatly</h1><br/>
//             <center>
//                 <button onClick={click1}>Clicked {count1} times...</button><br/>
//                 <button onClick={click2}>Clicked {count2} times...</button>
//             </center>
//         </>
//     )
// }

const DisplayStudents = () => {
    return (
        <>
            <h1>Students list</h1>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            <section>
                <table className="table table-dark table-hover"> 
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Marks</th>
                        </tr>
                    </thead>
                    {Data.map((data) => {
                        return <Jk {...data} key={data.id} />
                    })}
                </table>
            </section>
        </>    
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DisplayStudents />);


