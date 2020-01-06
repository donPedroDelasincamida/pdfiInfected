const { spawn } = require('child_process');
const exec = require('child_process').exec;


// Event Listener on the connect button 
document.getElementById("connect").addEventListener("click", function () {
    const ls = exec('sh test.sh');
    var resDiv = document.getElementById("result");
    var final="ls : ";
    ls.stdout.on('data', (data) => {
        console.log(data);
        if (data.indexOf("ls :") != -1)
        {
            resDiv.innerHTML="Loading";
        }
        else{
            final += data
            resDiv.innerHTML = final;
            changeToSuccess(this,"Connected");
        }
    });  
})

function changeToSuccess(node, text){
    node.removeAttribute("class");
    node.className += "btn btn-success";
    node.innerHTML = text;
}