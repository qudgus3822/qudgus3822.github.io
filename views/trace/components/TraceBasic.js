export default function TraceBasic({ Name, Contents, Date }) {

    return (<>
        <div className="alert alert-primary border-0" role="alert">
            <strong>{Name ? Name : "unknown"}</strong> : {Contents} | {Date}
        </div>
    </>)
}