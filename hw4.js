//random array
function randomarray(){
    return Math.floor(Math.random() * 50 )+ 1
    }
    const array = [];
    
    for (i = 0; i <= 100 ; i++){
        array.push(randomarray())
    }
    
    
    //ganjil genap
    const genap = []
    const ganjil= []
    
    for (i = 0; i < array.length; i ++){
        array[i] % 2 == 0 ? genap.push(array[i]) :  ganjil.push(array[i])
    }
    
    //min ganjil
    let l = ganjil.length
    let mingan = Infinity
    for (i = 0 ; l > i ; i ++){
       if(ganjil[i] < mingan){
        mingan = ganjil[i]
       }
    }
    
    //max ganjil
    
    let maxgan = -Infinity
    
    for(i = 0 ; l > i; i ++){
        if(ganjil[i] > maxgan){
            maxgan = ganjil[i]
        }
    }
    
    //total ganjil
    let total = 0 ;
    for(i = 0  ; i < ganjil.length ; i ++){
        total += ganjil[i]
    }
    //rata2 ganjil
    let avgga = total/ganjil.length
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    //min genap
    let lge = genap.length
    let mingen = Infinity
    for (i = 0 ; lge > i ; i ++){
       if(genap[i] < mingen){
        mingen = genap[i]
       }
    }
    
    //max genap
    
    let maxgen = -Infinity
    
    for(i = 0 ; lge > i; i ++){
        if(genap[i] > maxgen){
            maxgen = genap[i]
        }
    }
    
    //total genap
    let totalge = 0 ;
    for(i = 0  ; i < genap.length ; i ++){
        totalge += genap[i]
    }
    //rata2 genap
    let avgge = totalge/genap.length
    
    // Compare
    
    let c1 = maxgan < maxgen ? "Nilai Maximal Array ganjil lebih kecil" : "Nilai Maksimal Array ganjil lebih besar"
    let c2 = mingen < mingan ? "Nilai Minimal Array Genap lebih kecil" : "Nilai Minimal array genap lebih besar"
    let c3 = total == totalge ? "Hasil Total Ganjil Genap sama" : "Hasil total tidak sama "
    let c4 = total < totalge ? "Hasil ganjil lebih kecil" : "Hasil Ganjil lebih besar"
    let c5 = avgga < avgge ? "Rata-rata Ganjil lebih kecil" : "Rata-rata ganjil lebih besar"
    console.log(array)
    console.log("nilai genap : ", genap)
    console.log("nilai ganjil : ", ganjil)
    console.log("nilai Minimal, Maximal, Total & Rata-rata  Ganjil : ", mingan, maxgan, total, avgga)
    console.log("nilai Minimal, Maximal, Total & Rata-rata  Genap : ", mingen, maxgen, totalge, avgge)
    
    console.log(c1)
    console.log(c2)
    console.log(c3)
    console.log(c4)
    console.log(c5)