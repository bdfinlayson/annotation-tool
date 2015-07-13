var timeout = 500;
var closetimer  = 0;
var dropDownMenuItem  = 0;

function openMenu(id) {
  cancelCloseDelay();
  if(dropDownMenuItem) dropDownMenuItem.style.visibility = 'hidden';
  dropDownMenuItem = document.getElementById(id);
  dropDownMenuItem.style.visibility = 'visible';
}

function closeMenu() {
  if(dropDownMenuItem) dropDownMenuItem.style.visibility = 'hidden';
}
function closeMenuDelay() {
  closetimer = window.setTimeout(closeMenu, timeout);
}
function cancelCloseDelay() {
  if(closetimer) {
    window.clearTimeout(closetimer);
    closetimer = null;
  }
}
document.onclick = closeMenu;


