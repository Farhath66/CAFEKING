$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.button-collapse').sideNav({closeOnClick: true});
    $('.parallax').parallax();
    $('.myreviews').carousel({
      numVisible:7,
      shift: 55,
      padding: 55,
      });
});






/* modal functions*/
 function toggleModal()
 {
    var instance = M.Modal.getInstance($('#modal1'));
    instance.open();

 }
 function toggleModal4()
 {
    var instance = M.Modal.getInstance($('#modal2'));
    instance.open();
 }

 function toggleModal3()
 {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();

 }
 function toggleModal5()
 {
    var instance = M.Modal.getInstance($('#modal5'));
    instance.open();

 }

 function myFunction() {
   document.getElementById("description").innerHTML = "Home";
 }