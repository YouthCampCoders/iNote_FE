import '../assets/css/commonl.css'
interface Props{
    value:string
}

export const CpnCrumb:React.FC<Props>=({value})=>{
    return (
        <div className="crumb">
            <span className="crumbcur">
                当前位置:
            </span>
            <span className="crumbfront">
                首页
            </span>
            <img className="crumbpic"/>
            <span className="crumbpos">
                {value}
            </span>
        </div>
    )
}