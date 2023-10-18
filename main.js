function sendMessage() {
    var username = document.getElementById("username").value;
    var gmail = document.getElementById("gmail").value;
    var comment = document.getElementById("comment").value;

    // Check username
    //  Ko nhap gi
    if (username == "") {
        alert("Vui lòng nhập họ tên !");
        return false;
    } else { //  Co nhap
        // So ky tu nhap < 8
        if (username.length < 8 ) {
            alert("Họ tên cần tối thiểu 8 kí tự !");
            return false;
        }
        
    }

    // Check gmail
    if (gmail == "") {
        // Canh bao ko nhap gi
        alert("Vui lòng nhập địa chỉ email !");
        return false;
    } else {
        if (!gmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            // Canh bao ko phai dinh dang dia chi email
            alert("Địa chỉ email phải đúng định dạng !");
            return false;
        }
    }
    
    //Check comment
    if(comment == ""){
        // Canh bao ko nhap gi
        alert("Vui lòng nhập thông tin !");
        return false;
    }
    // Neu khong co loi, thong bao tin da duoc gui 
    alert("Phản hồi đã được gửi!")
    return true;      
}