let input='';
function display(val)
{
    input+=val;
    document.getElementById("input-box").value=input;
}
let res=0;
function calculate()
{
    res=eval(input);
    document.getElementById("input-box").value=res;
}
function clearInput() {
    input = '';  // Reset the input variable
    document.getElementById("input-box").value = '';// Clear the value of the input box
}
