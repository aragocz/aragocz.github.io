const output = document.querySelector("#out");
document.querySelector("#submit").addEventListener("click", run)

function run(){
    output.innerHTML = "";
    const axis = document.querySelector("#data").value;
    let seq = [];
    let ran = [];

    for(let i=1;i<=axis;i++){
    seq.push(i)
    };
    for(let x=1;x<=axis;x++){
    const rani = randomint(axis)
    if(!ran.includes(rani)){
        ran.push(rani)
    }else {
        x--
    }
    }
    for(let y=0;y<ran.length;y++){
        output.innerHTML += `<span class="solenum">${ran[y]}</span><br>`
    }
}

function randomint(max){
  return Math.floor(Math.random()*max)+1;
};