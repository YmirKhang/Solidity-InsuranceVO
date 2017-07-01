function change(){
    
   var myNewTitle = document.getElementById('myTextField').value;
   if( myNewTitle.length==0 ){
       alert('Write Some real Text please.');
   return;
   }
   
   var title = document.getElementById('title');
   title.innerHTML = myNewTitle;
    
}