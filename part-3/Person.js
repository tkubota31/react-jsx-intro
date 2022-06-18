const Person =(props) =>{
    let vote = props.age > 18 ? "please go vote!" : "you must be 18";
    <div>
        <p>Learn some information about this person</p>
        <h2>{props.name.slice(0,6)}</h2>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
        <h3>{vote}</h3>
    </div>
}
