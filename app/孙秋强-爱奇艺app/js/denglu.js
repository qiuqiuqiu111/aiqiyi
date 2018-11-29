 let oInput = document.getElementById('input');
 let oInfo = document.getElementById('info');
 oInput.onblur=function(){
     if(isNaN(oInput.value)){
         oInput.value="请输入正确的号码!";
     }else if(oInput.value.length==11){
         oInfo.className="on";
     }else{
         oInput.value="请输入正确的号码!"
     }
 }