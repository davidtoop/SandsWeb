/*  Build the fixture page based on the current month
 *  If month is earlier than April, then defaults to April
 *  If month is greater than September then defaults to September
 */
function fixtures()
{
  var today = new Date();
  var month = 1 + today.getMonth();
  var year = today.getFullYear();
  //alert(month);
  month = Math.min(9, Math.max(4, month));
  var page = './fixture' + year + '0' + month + '.html';
  window.open(page, '_self', false);
}
