    function add(){

        var newTable= document.getElementById("TheTable")
    

        let input= document.getElementById("noteInput").value;
       
        if (input!= ""){
            let addRow = newTable.insertRow(newTable.rows.length);
        
            
            let inputCell = addRow.insertCell(0);
            
            inputCell.innerHTML=input;
            DONO()
        }
        document.getElementById("noteInput").value= "";
    }
    
    var newTable= document.getElementById("TheTable")
    var selectedRowIndex;
    function DONO(){
        var newTableRowsLength = newTable.rows.length;
        for(var i=1; i<newTableRowsLength; i++){
            newTable.rows[i].onclick= function(){
                selectedRowIndex=this.rowIndex;
            
                document.getElementById("noteInput").value=this.cells[0].innerHTML;}
            }
        }
        function ButDelete(){
  
            newTable.deleteRow(selectedRowIndex);
    }

  
  
  
  
   /*var notesContainer= document.getElementById('app');
    const addNotButton= notesContainer.querySelector('.add-note')

function add(){

    var li = document.createElement('li');
    let title = document.createElement('span');
    let messege = document.createElement('span');
    var noteInput = document.getElementById('noteInput')
    
    if(!app.noteInput.value) {
        return;
      } else {
        app.addButton.innerText = 'Create Note';
      }

      var note= new Object();

      note.noteInput = app.noteInput.value;

      app.addNote(note);

      li.appendChild(title);
      li.appendChild(messege);

      app.messege.value = "";

}*/
