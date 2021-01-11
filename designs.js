var $colorPicker = document.getElementById( "colorPicker" );
var $submitBtn = document.getElementById( "submit-button" );
var $table = document.getElementById( "pixelCanvas" );

$submitBtn.addEventListener( "click", makeGrid );

function makeGrid( event ) { // creates table body then generates rows per height columns per width
  event.preventDefault();
  // Getting references to the input fields, button, and lists

  // When the submit button is clicked, call the handleSubmitClick function

  // When size is submitted by the user, call makeGrid()
  // Your code goes here!
  $table.firstChild.remove();
  let $tbody = document.createElement( "tbody" );
  $table.appendChild( $tbody )


  // Select color input
  // Select size input
  let height = document.getElementById( "inputHeight" ).value;
  let width = document.getElementById( "inputWidth" ).value;


  console.log( 'height :>> ', height );
  console.log( 'width :>> ', width );

  for ( let i = 0; i < height; i++ ) {

    let $row = document.createElement( "tr" );
    $tbody.appendChild( $row );
    console.log( 'table rows  :>> ', i );
    for ( let i = 0; i < width; i++ ) {
      let $td = document.createElement( "td" );
      $td.innerText = '';

      $td.addEventListener( 'click', function ( event ) {
        event.preventDefault();
        let $elementClicked = event.target; // obviously a <td>
        let colorUpdated = document.getElementById( "colorPicker" ).value;
        $elementClicked.style.backgroundColor = colorUpdated;
      } );

      $row.appendChild( $td );

    }
  }


}
