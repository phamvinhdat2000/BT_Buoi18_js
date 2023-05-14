const btnAddNumber = domId("addNumber");
const addNumberField = domId("number");
const showMangField = domId("showMang");
const btnTinhTong = domId("TinhTong");
const showTinhTong = domId("showTongSoDuong");
const btnDemSo = domId("DemSo");
const showDemSo = domId("showDemSo");
const btnSoNhoNhat = domId("timSoNhoNhat");
const showSoNhoNhat = domId("showSoNhoNhat");
const btnSoDuongNhoNhat = domId("timSoDuongNhoNhat");
const showSoDuongNhoNhat = domId("showSoDuongNhoNhat");
const btnSoChan = domId("timSoChan");
const showSoChan = domId("showSoChan");
const btnDoiCho = domId("DoiCho");
const showDoiCho = domId("showDoiCho");
const btnSapXep = domId("SapXep");
const showSapXep = domId("showSapXep");
const btnSoNguyenTo = domId("SoNguyenTo");
const showSoNguyenTo = domId("showSoNguyenTo");
const btnDemSoNguyen = domId("demSoNguyen");
const showDemSoNguyen = domId("showDemSoNguyen");
const btnSoSanh = domId("SoSanh");
const showSoSanh = domId("showSoSanh");


let arrNum = [];
btnAddNumber.onclick = function () {
    let number = addNumberField.value;
    arrNum.push(number);

    showMangField.innerHTML = arrNum;

}
btnTinhTong.onclick = function () {
    TinhTongSoDuong(arrNum);
};
btnDemSo.onclick = function () {
    DemSoDuong(arrNum);
}
btnSoNhoNhat.onclick = function () {
    timSoNhoNhat(arrNum);
}
btnSoDuongNhoNhat.onclick = function () {
    timSoDuongNhoNhat(arrNum);
}
btnSoChan.onclick = function () {
    timSoChan(arrNum);
}
btnDoiCho.onclick = function () {
    doiCho(arrNum);
}
btnSapXep.onclick = function () {
    sapXep(arrNum);
}
btnSoNguyenTo.onclick = function () {
    timSoNguyenTo(arrNum);
}
btnDemSoNguyen.onclick = function () {
    demSoNguyen(arrNum);
}
btnSoSanh.onclick = function () {
    soSanhAmDuong(arrNum);
}


// TÍNH TỔNG DƯƠNG 
function TinhTongSoDuong(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += Number(arr[i]);
        }
    }
    showTinhTong.innerHTML = "Tổng số dương: " + result;
}

//ĐẾM SỐ DƯƠNG
function DemSoDuong(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    showDemSo.innerHTML = "Số dương: " + count;

}

//TÌM SỐ NHỎ NHẤT
function timSoNhoNhat(arr) {
    let soMin = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (Number(arr[i]) < soMin) {
            soMin = arr[i];
        }
    }
    showSoNhoNhat.innerHTML = "Số nhỏ nhất: " + soMin;
}

// TÌM SỐ DƯƠNG NHỎ NHẤT 
function timSoDuongNhoNhat(arr) {
    let arrSoDuong = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrSoDuong.push(arr[i]);
        }
    }
    let min = arrSoDuong[0];
    for (let i = 1; i < arrSoDuong.length; i++) {
        if (Number(arrSoDuong[i]) < min) {
            min = arrSoDuong[i];
        }
    }
    showSoDuongNhoNhat.innerHTML = "Số dương nhỏ nhất: " + min;
}

// TÌM SỐ CHẴN CUỐI CÙNG 
function timSoChan(arr) {
    let soChan = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            soChan = arr[i];
        }
    }
    showSoChan.innerHTML = "Số chẵn cuối cùng: " + soChan;
}
// ĐỔI CHỖ
function doiCho(arr) {
    let numpos1 = Number(domId("numpos1").value);
    let numpos2 = Number(domId("numpos2").value);
    let value1 = arr[numpos1];
    let value2 = arr[numpos2];
    for (let i = 0; i < arr.length; i++) {
        if (i == numpos1) {
            arr[i] = value2;
        }
        if (i == numpos2) {
            arr[i] = value1;
        }
    }
    showDoiCho.innerHTML = arr;


}

//SẮP XẾP THỨ TỰ TĂNG DẦN
function sapXep(arr) {
    let tam;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Number(arr[j]) < arr[i]) {
                tam = arr[i];
                arr[i] = arr[j];
                arr[j] = tam;
            }
        }
        showSapXep.innerHTML = arr;
    }
}

//TÌM SỐ NGUYÊN TỐ
function timSoNguyenTo(arr) {
    let soNguyenTo = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (arr[i] == 1 || arr[i] == 2 || arr[i] == 3) {
                soNguyenTo = arr[i];
                break;
            } else {
                for (let j = 2; j <= Math.sqrt(Number(arr[i])); j++) {
                    if (arr[i] % j !== 0) {
                        soNguyenTo = arr[i];
                        break;
                    } else {
                        continue;
                    }
                }
                break;
            }
        }
        else {
            continue;
        }

    }
    showSoNguyenTo.innerHTML = soNguyenTo;
}

//ĐẾM SỐ NGUYÊN
function demSoNguyen(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(Number(arr[i]))) {
            count++;
        }
    }
    showDemSoNguyen.innerHTML = "Số nguyên: " + count;
}

//SO SÁNH SỐ LƯỢNG ÂM VÀ DƯƠNG
function soSanhAmDuong(arr) {
    let countDuong = 0;
    let countAm = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countDuong++;
        }
        else if (arr[i] < 0) {
            countAm++;
        }
    }
    if (countDuong > countAm) {
        showSoSanh.innerHTML = "Số dương > Số âm"
    } else if (countDuong < countAm) {
        showSoSanh.innerHTML = "Số âm > Số dương"
    }
    else {
        showSoSanh.innerHTML = "Số dương = Số âm"
    }

}







// LẤY ID
function domId(id) {
    return document.getElementById(id);
}
