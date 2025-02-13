function Validation(value) {
    let error = {}
    const user_pattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (value.username === "") {
        error.username = "กรุณาใส่ชื่อผู้ใช้งาน";
    }
    else {
        error.username = "";
    }

    if (value.password === "") {
        error.password = "กรุณาใส่พาสเวิสเข้าใช้งาน";
    }
    else if(!password_pattern.test(value.password)){
        error.password = "รูปแบบพาสเวิสไม่ถูกต้อง";
    }else {
        error.password = "";
    }

    return error;
}
export default Validation;