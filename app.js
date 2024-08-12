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
function cancel (){
    val .value = val.value.substring(0, val.value.length - 1);

}
function disableButton(){
    var button=document.getElementById("operator")
}