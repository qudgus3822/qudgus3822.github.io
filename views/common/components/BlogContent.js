export default function BlogContent() {

    
    return (<>
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="blog-card">
                        <img src="assets/images/small/img-1.jpg" alt="" className="img-fluid rounded"></img>
                        <span className="badge badge-purple px-3 py-2 bg-soft-primary fw-semibold mt-3">Photography</span>
                        <h4 className="my-3">
                            <a href="" className="">There are many variations of passages of Lorem</a>
                        </h4>
                        <p className="text-muted">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Cum sociis natoque penatibus et magnis.</p>
                        <hr className="hr-dashed"></hr>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}