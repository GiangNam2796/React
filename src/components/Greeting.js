import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function Greeting(props){
    const isLoggedIn = true;
    if(isLoggedIn){
        return <UserGreeting />
    }
        return <GuestGreeting />
}


export default Greeting;