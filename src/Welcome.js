
import './App.css';
// import App from './App';
// function Welcome(props) {
//     console.log(props)
//   return (
//     <div className="Welcome">
//         welcome: {props.name}, <br />
//         sdt: {props.phone}
//     </div>
//   );
// }

function Welcome (props){
    return <h1>hi, {props.name}</h1>
}
function App (props){
    return (
        <div>
            <Welcome name ="giang1" />
            <Welcome name ="giang2" />
            <Welcome name ="giang3" />
        </div>
    );
}


export default Welcome;
