import { useRouter } from "next/router"
import Link from "next/link";

export default function CommonHeader({ }) {
    const router = useRouter();
    return (
        <>
            <button onClick={() => {
                router.back();
            }}>뒤로가기</button>
        </>
        // <div className="topbar">
        //     <nav className="navbar-custom" id="navbar-custom">
        //         <ul className="list-unstyled topbar-nav float-end mb-0">
        //             <li className="dropdown">
        //                 <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
        //                     aria-haspopup="false" aria-expanded="false">
        //                     <img src="assets/images/flags/us_flag.jpg" alt="" className="thumb-xxs rounded-circle"></img>
        //                 </a>
        //                 <div className="dropdown-menu">
        //                     <a className="dropdown-item" href="#"><img src="assets/images/flags/us_flag.jpg" alt="" height="15" className="me-2"></img>English</a>
        //                     <a className="dropdown-item" href="#"><img src="assets/images/flags/spain_flag.jpg" alt="" height="15" className="me-2"></img>Spanish</a>
        //                     <a className="dropdown-item" href="#"><img src="assets/images/flags/germany_flag.jpg" alt="" height="15" className="me-2"></img>German</a>
        //                     <a className="dropdown-item" href="#"><img src="assets/images/flags/french_flag.jpg" alt="" height="15" className="me-2"></img>French</a>
        //                 </div>
        //             </li>

        //             <li className="dropdown notification-list">
        //                 <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
        //                     aria-haspopup="false" aria-expanded="false">
        //                     <i className="ti ti-mail"></i>
        //                 </a>
        //                 <div className="dropdown-menu dropdown-menu-end dropdown-lg pt-0">

        //                     <h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
        //                         Emails <span className="badge bg-soft-primary badge-pill">3</span>
        //                     </h6>
        //                     <div className="notification-menu" data-simplebar>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">2 min ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <img src="assets/images/users/user-1.jpg" alt="" className="thumb-sm rounded-circle"></img>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
        //                                     <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">10 min ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <img src="assets/images/users/user-4.jpg" alt="" className="thumb-sm rounded-circle"></img>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Meeting with designers</h6>
        //                                     <small className="text-muted mb-0">It is a long established fact that a reader.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">40 min ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <img src="assets/images/users/user-2.jpg" alt="" className="thumb-sm rounded-circle"></img>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
        //                                     <small className="text-muted mb-0">Dummy text of the printing.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">1 hr ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <img src="assets/images/users/user-5.jpg" alt="" className="thumb-sm rounded-circle"></img>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
        //                                     <small className="text-muted mb-0">It is a long established fact that a reader.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">2 hrs ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <img src="assets/images/users/user-3.jpg" alt="" className="thumb-sm rounded-circle"></img>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Payment Successfull</h6>
        //                                     <small className="text-muted mb-0">Dummy text of the printing.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                     </div>
        //                     <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
        //                         View all <i className="fi-arrow-right"></i>
        //                     </a>
        //                 </div>
        //             </li>

        //             <li className="dropdown notification-list">
        //                 <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
        //                     aria-haspopup="false" aria-expanded="false">
        //                     <i className="ti ti-bell"></i>
        //                     <span className="alert-badge"></span>
        //                 </a>
        //                 <div className="dropdown-menu dropdown-menu-end dropdown-lg pt-0">

        //                     <h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
        //                         Notifications <span className="badge bg-soft-primary badge-pill">2</span>
        //                     </h6>
        //                     <div className="notification-menu" data-simplebar>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">2 min ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <i className="ti ti-chart-arcs"></i>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
        //                                     <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">10 min ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <i className="ti ti-device-computer-camera"></i>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Meeting with designers</h6>
        //                                     <small className="text-muted mb-0">It is a long established fact that a reader.</small>
        //                                 </div>
        //                             </div>
        //                         </a>

        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">40 min ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <i className="ti ti-diamond"></i>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
        //                                     <small className="text-muted mb-0">Dummy text of the printing.</small>
        //                                 </div>
        //                             </div>
        //                         </a>

        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">1 hr ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <i className="ti ti-drone"></i>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
        //                                     <small className="text-muted mb-0">It is a long established fact that a reader.</small>
        //                                 </div>
        //                             </div>
        //                         </a>

        //                         <a href="#" className="dropdown-item py-3">
        //                             <small className="float-end text-muted ps-2">2 hrs ago</small>
        //                             <div className="media">
        //                                 <div className="avatar-md bg-soft-primary">
        //                                     <i className="ti ti-users"></i>
        //                                 </div>
        //                                 <div className="media-body align-self-center ms-2 text-truncate">
        //                                     <h6 className="my-0 fw-normal text-dark">Payment Successfull</h6>
        //                                     <small className="text-muted mb-0">Dummy text of the printing.</small>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
        //                         View all <i className="fi-arrow-right"></i>
        //                     </a>
        //                 </div>
        //             </li>

        //             <li className="dropdown">
        //                 <a className="nav-link dropdown-toggle nav-user" data-bs-toggle="dropdown" href="#" role="button"
        //                     aria-haspopup="false" aria-expanded="false">
        //                     <div className="d-flex align-items-center">
        //                         <img src="assets/images/users/user-4.jpg" alt="profile-user" className="rounded-circle me-2 thumb-sm" />
        //                         <div>
        //                             <small className="d-none d-md-block font-11">Admin</small>
        //                             <span className="d-none d-md-block fw-semibold font-12">Maria Gibson <i
        //                                 className="mdi mdi-chevron-down"></i></span>
        //                         </div>
        //                     </div>
        //                 </a>
        //                 <div className="dropdown-menu dropdown-menu-end">
        //                     <a className="dropdown-item" href="#"><i className="ti ti-user font-16 me-1 align-text-bottom"></i> Profile</a>
        //                     <a className="dropdown-item" href="#"><i className="ti ti-settings font-16 me-1 align-text-bottom"></i> Settings</a>
        //                     <div className="dropdown-divider mb-0"></div>
        //                     <a className="dropdown-item" href="#"><i className="ti ti-power font-16 me-1 align-text-bottom"></i> Logout</a>
        //                 </div>
        //             </li>
        //             <li className="notification-list">
        //                 <a className="nav-link arrow-none nav-icon offcanvas-btn" href="#" data-bs-toggle="offcanvas" data-bs-target="#Appearance" role="button" aria-controls="Rightbar">
        //                     <i className="ti ti-settings ti-spin"></i>
        //                 </a>
        //             </li>
        //         </ul>

        //         <ul className="list-unstyled topbar-nav mb-0">
        //             <li>
        //                 <button className="nav-link button-menu-mobile nav-icon" id="togglemenu">
        //                     <i className="ti ti-menu-2"></i>
        //                 </button>
        //             </li>
        //             <li className="hide-phone app-search">
        //                 <form role="search" action="#" method="get">
        //                     <input type="search" name="search" className="form-control top-search mb-0" placeholder="Type text..."></input>
        //                     <button type="submit"><i className="ti ti-search"></i></button>
        //                 </form>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    )
}