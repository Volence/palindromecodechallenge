// JQuery event handler for the submission of the palindrome

$( "#palindrome" ).submit(function() {
    // Getting the string
    var x = $( "input:first" ).val();
    // removing all of the junk besides letters
    x = x.replace(/\s|[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+"]/g, '').toLowerCase();
    // Trimming (although unecessary), splitting the string, reversing, then bringing it back as a string in reverse
    var y = x.trim().split('').reverse().join('');
    // final logical statement to determine if the string is a palindrome
    if (x === y) {
    window.alert("Yes it is a Palindrome!");
    } else {
        window.alert("Sorry, it is not a Palindrome!");
    };
  });