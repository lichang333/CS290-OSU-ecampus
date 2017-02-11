function Create_Table(){
  var body1 = document.body,
      table1 = document.createElement('table');
  // Assigning attributes to button
  table1.setAttribute("id", "myTable");
  table1.style.width = '100px';
  table1.style.border = '1px solid black';
  // Inserting header row
  var tr = table1.insertRow();
  for(var j=0;j<4;j++){
    // Inserting headercells
    var headercell=document.createElement("TH");
    headercell.appendChild(document.createTextNode("Header"+(j+1)))
    headercell.style.border = '1px solid black';
    tr.appendChild(headercell);
  }
  // Inserting other cells
  for(var i = 0; i < 3; i++){
    var tr = table1.insertRow();
    for(var j = 0; j < 4; j++){
      var td = tr.insertCell();
      td.appendChild(document.createTextNode((j+1)+','+(i+1)));
      td.style.border = '1px solid black';
    }
  }
  body1.appendChild(table1);
  // Selecting cell 1,1 and thickening border of cell
  var table = document.getElementById("myTable");
  var rowIndex = 1;
  var cellIndex = 0;
  table.rows[rowIndex].cells[cellIndex].style.border='2px solid black';
  // Creating button Up
  var element1 = document.createElement("input");
  // Assign attribute value to button.
  element1.type = "button";
  element1.value = "Up";
  // On clicking function up
  element1.onclick = function() {
    var current=table.rows[rowIndex].cells[cellIndex];
    if(rowIndex == 1){
      current=current;
    }
    else{
      table.rows[rowIndex].cells[cellIndex].style.border='1px solid black';
      rowIndex=rowIndex-1;
      current=table.rows[rowIndex].cells[cellIndex];
      current.style.border='2px solid black';
    }
  };
  body1.appendChild(element1);
  // Creating button Down
  var element1 = document.createElement("input");
  element1.type = "button";
  element1.value = "Down";
  element1.name = "Down";
  element1.onclick = function() {
    var current=table.rows[rowIndex].cells[cellIndex];
    if(rowIndex == 3){
      current=current;
    }
    else{
      table.rows[rowIndex].cells[cellIndex].style.border='1px solid black';
      rowIndex=rowIndex+1;
      current=table.rows[rowIndex].cells[cellIndex];
      current.style.border='2px solid black';
    }
  };
  body1.appendChild(element1);
  // Creating button Left
  var element1 = document.createElement("input");
  element1.type = "button";
  element1.value = "Left";
  element1.name = "Left";
  element1.onclick = function() {
    var current=table.rows[rowIndex].cells[cellIndex];
    if(cellIndex == 0){
      current=current;
    }
    else{
      table.rows[rowIndex].cells[cellIndex].style.border='1px solid black';
      cellIndex=cellIndex-1;
      current=table.rows[rowIndex].cells[cellIndex];
      current.style.border='2px solid black';
    }
  };
  body1.appendChild(element1);

  // Creating button Right
  var element1 = document.createElement("input");
  element1.type = "button";
  element1.value = "Right";
  element1.name = "Right";

  element1.onclick = function() {
    var current=table.rows[rowIndex].cells[cellIndex];
    if(cellIndex == 3){
      current=current;
    }
    else{
      table.rows[rowIndex].cells[cellIndex].style.border='1px solid black';
      cellIndex=cellIndex+1;
      current=table.rows[rowIndex].cells[cellIndex];
      current.style.border='2px solid black';
    }
  };
  body1.appendChild(element1);
  // Creating button Mark cell
  var element1 = document.createElement("input");
  element1.type = "button";
  element1.value = "Markcell";
  element1.name = "Markcell";
  // Changing background of cell
  element1.onclick = function() {
    table.rows[rowIndex].cells[cellIndex].style.backgroundColor= 'yellow';
  };
  body1.appendChild(element1);
}
// on loading call the function
window.onload=Create_Table();