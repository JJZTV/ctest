import React,{Component}from "react"

export default class manage extends React.Component {
    render(){
        return(
            <div>
                <div className="container" style={{marginTop:10}}>
                    <div className="card text-center">
                        <div className="card-header">
                            <h4>ข้อมูลส่วนตัว</h4>
                        </div>

                        <div className="card-body">
                            <div className="form-group row col-md-12">
                                <div className="col-md-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected >ประเภทของลูกค้า</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>สาขา</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-control" aria-label="Default select example">
                                    <option selected>ค้นหาคิวบาร์โค้ด</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>ทั้งหมด</option>
                                    </select>
                                </div>
                            </div>
                        
                            <div className="form-group row" style={{marginTop:10}}>
                                <div className="col-md-6">
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>ค้นหาเลขบัตรประชาชน</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>ค้นหาจากเบอร์โทร</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row" >
                                <div className="col-md-5">
                                    <label>ตั้งแต่วันที่เปิดบิล</label>
                                </div>
                                <div className="col-md-6">
                                    <label>ถึงวันที่เปิดบิล</label>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginTop:10}}>
                                <div className="form-check col-md-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                    <label>
                                        วันที่ปัจจุบัน
                                    </label>
                                </div>
                            
                                <div className="col-md-1">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>วัน</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>เดือน</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>ปี</option>
                                    </select>
                                </div>
                                <div className="col-md-1">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>วัน</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>เดือน</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>ปี</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{marginTop:20}}>
                                <button type="button" className="btn btn-primary btn-rounded">ค้นหา</button>{"  "}
                                <button type="button" className="btn btn-primary btn-rounded" disabled>ล้าง</button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:15}}>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-primary btn-rounded">จัดการสถานะหลายรายการ</button>
                        </div>
                        <div className="col-md-10"style={{textAlign: 'right'}}>
                            <button type="button" className="btn btn-primary btn-rounded" disabled>รวม : 4</button>
                        </div>
                    </div>
                    <div className="card container" style={{marginTop:15}}>
                        <div className="card-body ">
                            <table className="table col-mx-12">
                                <thead className="p-3 mb-2 bg-primary text-white">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">พนักงานโอนเงินเข้าแล้ว</th>
                                        <th scope="col">หมายเลขโทรศัพท์</th>
                                        <th scope="col">ข้อมูลผู้ส่ง</th>
                                        <th scope="col">เลขพัสดุฯ</th>
                                        <th scope="col">จำนวนเงิน COD</th>
                                        <th scope="col">สถานะ COD</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                        </td>
                                        <td>0123456789</td>
                                        <td>ชื่อ เลขบัญชี</td>
                                        <td>15466498461615</td>
                                        <td>500 บาท</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">สถานะ</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">จัดการ</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                        </td>
                                        <td>0123456789</td>
                                        <td>ชื่อ เลขบัญชี</td>
                                        <td>15466498461615</td>
                                        <td>500 บาท</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">สถานะ</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">จัดการ</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                        </td>
                                        <td>0123456789</td>
                                        <td>ชื่อ เลขบัญชี</td>
                                        <td>15466498461615</td>
                                        <td>500 บาท</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">สถานะ</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">จัดการ</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                        </td>
                                        <td>0123456789</td>
                                        <td>ชื่อ เลขบัญชี</td>
                                        <td>15466498461615</td>
                                        <td>500 บาท</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">สถานะ</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-rounded">จัดการ</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}