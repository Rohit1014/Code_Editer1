//-------------------------------------------------This is for copy a content---------------------------------------------------------------------
function copyTo(){
    let text =document.getElementById("editor");
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");
    text.setSelectionRange(0,0);
    
}
//-------------------------------------------------This is for lock the text area---------------------------------------------------------------------
function lock(){
  if(document.getElementById("editor").disabled==true){
    document.getElementById("editor").disabled=false;
   let v= document.getElementById("unlock");
   v.innerHTML="LOCK";
   v.id="lock"; 
   alert("Text area is unlocked");
}
else{
  document.getElementById("editor").disabled=true;
  let v1=document.getElementById("lock");
  v1.innerHTML="UNLOCK";
  v1.id="unlock";
  alert("Text area is locked")

}
} 

//-------------------------------------------------This is used for indentation---------------------------------------------------------------------
document.getElementById("editor").addEventListener('keydown',function(e){
  if(e.key=='Tab'){
    e.preventDefault();
    var start=this.selectionStart;
    var end=this.selectionEnd;
    this.value=this.value.substring(0,start)+"\t"+this.value.substring(end);
    this.selectionStart=this.selectionEnd=start+1;
  }
  var editer=document.getElementById("editor");
    if(e.key=='Enter'){
    
var text = editer.value;


var lines = text.split("\n");


var spaces = 4;


for (var i = 0; i < lines.length; i++) {
    lines[i] = " ".repeat(spaces) + lines[i];
}


var indentedText = lines.join("\n");

editer.value = indentedText;
}
});










  
    
   
  


