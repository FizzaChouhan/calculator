var val = document.getElementById("inputData" )
function display(numbers){
   
     val.value += numbers
}
function clears(){
    val.value=""
}
function exe(){
    val.value=eval(val.value)
}
function cancel(){
   val .value = val.substr(0, val.length - 1);
}