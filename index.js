function toggleHide() {
      let btn = document.getElementById('info-btn');
      let para = document.getElementById('para');
      if (para.style.display != 'none') {
            para.style.display = 'none';
            btn.innerHTML = 'Read More';
      }
      else {
            btn.innerHTML = 'Read Less';
            para.style.display = 'block';
      }
}

function alertpop(){
      alert("Passwords are not matching");
}