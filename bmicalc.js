function calc(){
    let height1 = document.getElementById("height").value;
    let height = height1 * 0.01;

    let weight = document.getElementById("weight").value;

    let ans = weight / height**2;
    
    document.getElementById("ans").innerHTML = ans.toFixed(2);

    if(ans < 18.6){
        document.getElementById("final").innerHTML = ("Under weight");
    }else if(ans >= 18.6 && ans <= 24.9){
        document.getElementById("final").innerHTML = ("Normal Range");
    }else{
        document.getElementById("final").innerHTML = ("Over weight");
    }
}