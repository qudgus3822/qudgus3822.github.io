import { useEffect, useState } from "react";
import { setFirebaseData, getFirebaseData, pushFirebaseData, deleteFirebaseData } from "../../../db/firebase"
import { commonIsAdmin } from "../../../cookies/handler";
export default function TraceBasic({ Name, Contents, Date, key }) {

    const deleteTrace = () => {
        deleteFirebaseData("/traces/" + key);
    }

    const [isAdmin, setIsAdmin] = useState('');
    useEffect(() => {
        setIsAdmin(commonIsAdmin());
    }, [])

    return (<>
        <div className="alert alert-primary alert-dismissible fade show border-0 b-round" role="alert">
            <strong>{Name ? Name : "unknown"}</strong> : {Contents} | {Date}
            {isAdmin && <button type="button" className="btn-close" aria-label="Close" onClick={(e) => {
                deleteTrace();
            }}></button>}
        </div>
    </>)
}