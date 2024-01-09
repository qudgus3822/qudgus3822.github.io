import { useRouter } from "next/router"

export default function CommonHeader() {
    const router = useRouter();
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                    <div className="float-end">
                        {/* <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Blogs</li>
                        </ol> */}
                        <button type="button" className="btn btn-de-dark" onClick={() => {
                            router.push("/blog/write");
                        }}>글쓰기</button>
                    </div>
                    <h4 className="page-title">Blogs</h4>
                </div>
            </div>
        </div>)
}