// cookie 
function checkCookie() {
    var join_option = getCookie("join_option");
    if (join_option == "" || join_option == 'radio_credit_default' ) {
        // check default - 12 month 
        $("#radio_credit_default").attr('checked',true);
        $("#radio_credit_default").prop('checked',true);
        $('.monthly:nth-child(2)').addClass( "greenbestdeals" );

    }else  {

        $('.monthly:nth-child(2)').removeClass( "greenbestdeals" );
        
        // checked the join option radiobox
        $("#"+join_option).attr('checked',true);
        $("#box-"+join_option).addClass('greenbestdeals');
      
    }
}

function setCookie( cvalue, exdays = 1) {
   
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "join_option=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
