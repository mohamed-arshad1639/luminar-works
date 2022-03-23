function ButtonClick(val)
{
document.getElementById("screen").value=document.getElementById("screen").value+val
}
function clearScreen()
{
    document.getElementById("screen").value=""
}
function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}