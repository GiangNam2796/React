import { useState } from "react";

function ListComment(props){
    const data = props.listComment;
    console.log(data)

    

    const handleClick = (e) => {
     
      const id = e.target.id;
      props.getId(id)
    
    }
    

    function renderData(){
        if(data.length>0){
          console.log(data)
            return data.map((value, key)=>{
              if(value.id_comment==0) {
                 return(
                   <>
                    <li key={key} className="media">
                        <a className="pull-left" href="#">
                        <img className="media-object" 
                          src={"http://localhost/laravel/laravel/public/upload/user/avatar/" + value.image_user} alt="" />
                        
                        </a>
                        <div className="media-body">
                        <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user" />{value.name_user}</li>
                            <li><i className="fa fa-clock-o" /> {value.updated_at}</li>
                            <li><i className="fa fa-calendar" /> {value.created_at}</li>
                        </ul>
                        <p> {value.comment} </p>
                        
                        <a className="btn btn-primary" id={value.id} onClick={handleClick} href="#cmt"><i className="fa fa-reply" />Reply</a>
                        </div>                       
                    </li>
                    {
                       data.map((value2, key2)=>{
                       
                        if(value2.id_comment == value.id ){
                          return(
                            <li key={key} className="media second-media">
                                <a className="pull-left" href="#">
                                  <img className="media-object" src={"http://localhost/laravel/laravel/public/upload/user/avatar/" + value2.image_user} alt="" />
                                </a>
                                <div className="media-body">
                                  <ul className="sinlge-post-meta">
                                    <li><i className="fa fa-user" />{value2.name_user}</li>
                                    <li><i className="fa fa-clock-o" />{value2.updated_at}</li>
                                    <li><i className="fa fa-calendar" />{value2.created_at}</li>
                                  </ul>
                                  <p>{value2.comment}</p>
                                  <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
                                </div>
                            </li> 
                          )
                        }
                      }) 

                    }
                 </>
                 )
                
                
                }
               
            })
        }
        
    }


    return(
        <ul className="media-list">
        {renderData()}
         
        
        </ul>
    )
}

export default ListComment;

{/* <ul className="media-list">
          <li className="media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-two.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-three.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-three.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-three.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-four.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-three.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-three.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src="images/blog/man-three.jpg" alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li><i className="fa fa-user" />Janis Gallagher</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
            </div>
          </li>
</ul> */}


    
  