const input = document.getElementById("inputno");
let numofwords;
const container = document.querySelector(".container");

const generateWord = (n) =>{
    const letter = "abcdefghijklmnopqrstuvwxyz";
    let text = ""

    for( let i=0; i<n; i++){
        text += letter[((Math.random())*25).toFixed(0)];
    }
    return text;
}


const generatepara = () => {
    numofwords= Number(input.value)
const para = document.createElement("h4");

let data ="" ;
for(let i=0; i<numofwords; i++){
data += generateWord((Math.random()*10).toFixed(0))
data += " "
}

para.innerText=data
para.setAttribute("class", "paras");

container.append(para)
};


