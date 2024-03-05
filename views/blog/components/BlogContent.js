import { useEffect, useState } from "react";
import { setFirebaseData, getFirebaseData, pushFirebaseData, deleteFirebaseData } from "../../../db/firebase"
import { commonIsAdmin } from "../../../cookies/handler";
export default function BlogContent({ data }) {
    const [isAdmin, setIsAdmin] = useState('');
    useEffect(() => {
        setIsAdmin(commonIsAdmin());
    }, [])

    const deleteBlog = (key) => {
        deleteFirebaseData("/blogs/" + key);
    }
    return (<>
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="blog-card">
                        <img src={data.image ? data.image : "/images/profile.png"} alt="" className="img-fluid rounded" style={{ height: "250px", margin: "0 auto" }}></img>
                        <h4 className="my-3">
                            <a href="" className="">{data.subject}</a>
                        </h4>
                        <p className="text-muted">{data.description}</p>
                        {/* <hr className="hr-dashed"></hr>
                        <div className="d-flex justify-content-between">
                            <div className="meta-box">
                                <div className="media">
                                    <img src="assets/images/users/user-5.jpg" alt="" className="thumb-sm rounded-circle me-2"></img>
                                    <div className="media-body align-self-center text-truncate">
                                        <h6 className="m-0 text-dark">Donald Gardner</h6>
                                        <ul className="p-0 list-inline mb-0">
                                            <li className="list-inline-item">26 mars 2020</li>
                                            <li className="list-inline-item">by <a href="">admin</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="align-self-center">
                                <a href="#" className="text-dark">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div> */}
                        {isAdmin && <button type="button" className="btn-close" aria-label="Close" onClick={(e) => {
                            deleteBlog(data.key);
                        }}></button>}
                    </div>
                </div>
            </div>
        </div>
    </>)
}