import { Link } from "react-router-dom";

function BlogR(props){
    const {data} = props;

    function renderData(){
        if(data.length>0){
            return data.map((value, key)=>{
                return(
                    <div key={key} className="single-blog-post">
                        <h3>{value.title}</h3>
                        <div className="post-meta">
                            <ul>
                                <li><i className="fa fa-user" /> Mac Doe</li>
                                <li><i className="fa fa-clock-o" /> {value.created_at}</li>
                                <li><i className="fa fa-calendar" /> {value.updated_at}</li>
                            </ul>
                            <span>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-half-o" />
                            </span>
                        </div>
                        <a href>
                      
                            <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + value.image} alt="" />
                        </a>
                        <p>{value.description}</p>
                        <Link to = {"/blog/detail/" + value.id} className="btn btn-primary">Read More </Link>
                    </div>
                    
                )
            })            
        }
    }

    return(
        <ul>{renderData()} </ul>
    )
}
export default BlogR