let naikAngkot = (listPenumpang) => {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let output = [];
    let obj = {};

    for(let i = 0; i < listPenumpang.length; i++){
        //mencari posisi index dari dan tujuan penumpang
        let pointA = rute.indexOf(listPenumpang[i][1]);
        let pointB = rute.indexOf(listPenumpang[i][2]);

        //menghitung jumlah biaya angkot
        let jarak = 0;
        if(pointA < pointB){
            jarak = pointB - pointA;
        } else {
            jarak = pointA - pointB;
        }

        let bayar = jarak * 2000;

        obj = {
            penumpang: listPenumpang[i][0],
            naikDari: listPenumpang[i][1],
            tujuan: listPenumpang[i][2],
            bayar: bayar
        }

        output.push(obj);
    }

    return output;
}

console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'A', 'B']]));
