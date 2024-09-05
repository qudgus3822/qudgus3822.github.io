import { useEffect, useState } from "react";
import React from "react";
import {
  setFirebaseData,
  getFirebaseData,
  pushFirebaseData,
  deleteFirebaseData,
} from "../../../utils/firebase";
import { commonIsAdmin } from "../../../utils/common";
export default function BlogContent({ data }: any) {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(commonIsAdmin());
  }, []);

  const deleteBlog = (key: string) => {
    deleteFirebaseData("/blogs/" + key);
  };
  return (
    <>
      <div className="col-lg-4">
        <div className="card" style={{ height: 300 }}>
          <div className="card-body">
            <div className="blog-card" style={{ overflowX: "auto" }}>
              {data.image && (
                <img
                  src={data.image ? data.image : "/images/profile.png"}
                  alt=""
                  className="img-fluid rounded"
                  style={{ height: "150px", margin: "0 auto" }}
                ></img>
              )}

              <h4 className="my-3" style={{ height: 20 }}>
                {data.subject}
              </h4>
              <p style={{ height: 130 }} className="text-muted">
                {data.description}
              </p>
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
              {isAdmin && (
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={(e) => {
                    deleteBlog(data.key);
                  }}
                ></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
