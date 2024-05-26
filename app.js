let result = document.getElementById("result");
let screen_result = document.getElementById("screen_result");
function git_value(value){
    screen_result.innerHTML +=  value;
}
function cal(){
    try {
        let res = eval(screen_result.innerHTML)
        screen_result.innerHTML += " = " + res;
    } catch (error) {
        alert("error")
    }
}
function remove(){
    screen_result.innerHTML = '';
}