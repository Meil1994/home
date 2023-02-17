function btn(){
    document.getElementById("drp-down").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.fa-user')) {
      var dropdowns = document.getElementsByClassName("drp-down");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }