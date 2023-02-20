import { Link } from "react-router-dom"

function Menuleft2 (){
    return (
        <div className="left-sidebar">
                          <h2>Account</h2>
                              <div className="panel-group category-products" id="accordian">
                                  <div className="panel panel-default">
                                      <div className="panel-heading">
                                          <h4 className="panel-title">
                                          <Link to="/account" data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                              <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                              Account
                                          </Link>
                                          </h4>
                                      </div>
                                      <div className="panel-heading">
                                          <h4 className="panel-title">
                                          <Link to="/myproduct" data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                              <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                              My Product
                                          </Link>
                                          </h4>
                                      </div>
                                  
                                  </div>
                              
                              
                              </div>
        </div>
      )
}

export default Menuleft2