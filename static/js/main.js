password = "abba";
password = password.toUpperCase();
password_length = 0
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var buttons = [];
hashed_password = "";
var lives = 6

let url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand';

fetch(url)
.then(res => res.json())
.then((out) => {
  password = out[0].title;
  password = password.toUpperCase();
  password_length = password.length;
  alert(password);
})
.catch(err => { throw err });


  $('#lives').html('Lives left: '+lives);

  for(i=0; i<password_length; i++)
  {
    if(password.charAt(i)==" ")hashed_password += " ";
    else hashed_password += "-";
  }
  $("#password").html(hashed_password);

  //generate keyboard
  if ($(".keyboard").empty) {
      for (var i = 0; i < letters.length; i++) {
          buttons.push('<button type="button" onclick="check('+i+')" id="letter' + i +'" class="btn btn-info">' + letters[i] + '</button>');
      }
      $(".keyboard").html(buttons.join(""));
    }


function show_password()
{
    document.getElementById("password").innerHTML = hashed_password;
}

String.prototype.setChar = function(position, char)
{
  if(position > this.length - 1) return this.toString();
  else return this.substr(0, position) + char + this.substr(position + 1);
}

function check(nr)
{
  var scored = false;

  for(i=0; i<password_length; i++)
  {
    if(password.charAt(i) == letters[nr])
    {
      hashed_password = hashed_password.setChar(i,letters[nr]);
      scored = true;
    }
  }
  if(scored == true)
  {
    $('#letter'+ nr).css('background-color', 'green')
    $('#letter'+ nr).prop("disabled",true);
    show_password();
  }
  else
  {
    $('#letter'+ nr).css('background-color', 'red')
    lives = lives - 1;
    $('#lives').html('Lives left: '+lives);
    $('#letter'+ nr).prop("disabled",true);
    if(lives == 0)
    {
      $('#lives').html('You Lost, maybe next time you will have more luck');
      $('.keyboard').html('');
      $('#password').html(password);
    }

  }

  if (password == hashed_password)
  {
  $('.keyboard').html('');
  $('#lives').html('You Won, Congratulations!');
  $('#reset').html('Again');

  }
}

// url for fetching API
// url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand'
