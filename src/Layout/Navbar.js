import React from "react"

export default class Navbar extends React.Component {
    render(){
        return(
            <div>
                <ul className="nav justify-content-center"style={{marginTop:20}}>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">ประวัติ COD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">การจัดการ COD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ตั้งค่า</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">นางสาวทดลอง</a>
                    </li>
                    <button type="button" className="btn btn-primary btn-rounded">ออกจากระบบ</button>
                </ul>
            </div>
        )
    }
}