import { useState } from "react"
import Image from "next/image";
export default function BlogBox(props) {

    // const [blogImage, setBlogImage] = useState();
    // const [category, setCategory] = useState();
    // const [subject, setSubject] = useState();
    // const [content, setContent] = useState();

    let imagePath = "";
    if (props.blogImage == 1) {
        imagePath = "/assets/images/small/img-1.jpg";
    }
    if (props.blogImage == 2) {
        imagePath = "/assets/images/small/img-2.jpg";
    }
    if (props.blogImage == 3) {
        imagePath = "/assets/images/small/img-3.jpg";
    }
    if (props.blogImage == 4) {
        imagePath = "/assets/images/small/img-4.jpg";
    }
    if (props.blogImage == 5) {
        imagePath = "/assets/images/small/img-5.jpg";
    }
    if (props.blogImage == 6) {
        imagePath = "/assets/images/small/img-6.jpg";
    }

    return (<>
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="blog-card">

                        <img src={imagePath} alt="" className="img-fluid rounded" layout="fill"></img>
                        <span className="badge badge-purple px-3 py-2 bg-soft-primary fw-semibold mt-3">{props.category}</span>
                        <h4 className="my-3">
                            <a href="" className="">{props.subject}</a>
                        </h4>
                        <p className="text-muted">{props.content}</p>
                        <hr className="hr-dashed"></hr>
                        <div className="d-flex justify-content-between">
                            <div className="meta-box">
                                <div className="media">
                                    <img src="/assets/images/users/user-5.jpg" alt="" className="thumb-sm rounded-circle me-2" layout="fill"></img>
                                    <div className="media-body align-self-center text-truncate">
                                        <h6 className="m-0 text-dark">김병현</h6>
                                        <ul className="p-0 list-inline mb-0">
                                            <li className="list-inline-item">26 mars 2020</li>
                                            <li className="list-inline-item">by <a href="">admin</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="align-self-center">
                                <a href="#" className="text-dark">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
}