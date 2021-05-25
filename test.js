// bài 1
srt = prompt("nhập chuỗi 1: ");
let newString = "";
for (let i = srt.length-1 ;i >= 0 ; i--) {
    newString = newString + srt[i];
        
}
console.log(newString);


// bài 2

srt2 = prompt("nhập chuỗi 2: ");
console.log(srt2.charAt(0).toUpperCase() + srt2.slice(1));
let arr2 = srt2.split(',');

// bài 3

let  Arr =["one","two","three","one","one","four","five","four","five","five"];
let newArr = []
for (let i = 0; i < Arr.length; i++) {
    if (!newArr.includes(Arr[i])) {
        newArr.push(Arr[i])  
    }   
}
console.table(newArr);


// bai 4
let mindX  = [
    {
        id : 1,
        name : "cam" ,
        age : 20,
        luong : 1000,
        chucvu : "nhanvien"
    },
    {
        id : 2,
        name : "nam" ,
        age : 20,
        luong : 1000,
        chucvu : "nhanvien"
    },
    {
        id : 3,
        name : "nu" ,
        age : 20,
        luong : 1000,
        chucvu : "nhanvien"
    },
]
a = true;
while(a){
    let input = prompt("Enter your function : C/R/U/D/E");

    if (input === "C") { 
        let id = mindX.length
        let name = prompt("Nhap name: ");
        let age = prompt("Nhap age: ");
        let luong = prompt("Nhap lương: ");
        let chucvu = prompt("Nhập chức vụ: ")
        let obj = {
        name : name ,
        age : age,
        luong : luong,
        chucvu : chucvu
        }
        mindX.push(obj);
    
    }else if (input === "R"){
        for (let i = 0; i < mindX.length; i++) {
            console.log(`${mindX[i].name}`);
            console.log(`${mindX[i].age}`);
            console.log(`${mindX[i].luong}`);
            console.log(`${mindX[i].chucvu}`)
            console.log("---------------------");
        }
    }
    else if (input === "U") {
        let idInput = prompt("nhap id can update: ");
        if (idInput < 0 || idInput >= mindX.length) {
            alert("Not fourd");
        }else{
        let newname = prompt('nhap ten update');
        let newage = prompt('nhap age update');
        let newluong = prompt('nhap lương update');
        let newchucvu = prompt('nhap chức vụ update');
        mindX[idInput].name = newname;
        mindX[idInput].age = newage;
        mindX[idInput].luong = newluong;
        mindX[idInput].chucvu = newchucvu;
        }
    }
    else if (input === "D") {
        let idInput = prompt("nhap id cần Delete: ");
        if (idInput < 0 || idInput >= mindX.length) {
            alert("Not fourd");
        }else{
            mindX.splice(idInput, 1);
        }    
    }else if(input === "E"){
        alert("Exit the program");
        a = false;
    }else {
        alert("C/R/U/D/E ?");
    }
}


// bài 5

