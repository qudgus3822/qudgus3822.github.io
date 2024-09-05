import { useEffect, useState } from "react";
import {
  setFirebaseData,
  getFirebaseData,
  pushFirebaseData,
  deleteFirebaseData,
} from "../../../utils/firebase";
import { commonIsAdmin } from "../../../utils/common";
import React from "react";
export default function TraceBasic({ Name, Contents, Date, key }: any) {
  const deleteTrace = () => {
    deleteFirebaseData("/traces/" + key);
  };

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(commonIsAdmin());
  }, []);

  return (
    <>
      <div
        className="alert alert-primary alert-dismissible fade show border-0 b-round"
        role="alert"
      >
        <strong>{Name ? Name : "unknown"}</strong> : {Contents} | {Date}
        {isAdmin && (
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => {
              deleteTrace();
            }}
          ></button>
        )}
      </div>
    </>
  );
}
