import PatientAdminGif  from "./PatientAdminGif.gif"
function BookAppointmentImg(){
    let imageStyle={
      paddingTop:"10px",
      paddingLeft:"100px",
    }
    let image1Style={
        paddingTop:"110px",
        paddingLeft:"100px",
      }
    return(
        <div class="container">
              <div class="row">
                  <div className="col-6">
<img src={PatientAdminGif} width="600px"  className="mt-5"/>
</div>
<div className="col-6">
    <h2  style={image1Style}> ＴＨＥ ＣＡＲＥ ＣＲＥＷ</h2>
<h2 style={imageStyle}>Book slots with experts at your own pace</h2>
</div>
</div>
</div>
    )
}
export default BookAppointmentImg;