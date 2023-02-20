import Register from "./Register";
import Login from "./Login";

function Index(){
    return(
        <section id="form">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <Login />

                    </div>

                    <div className="col-sm-12">
                        <h2 className="or">OR</h2>
                    </div>

                    <div className="col-sm-12">
                        <Register />
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index