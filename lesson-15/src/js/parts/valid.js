function valid() {
  let tels = document.querySelectorAll('input[type = "tel"]');

  for (let i = 0; i < tels.length; i++) {
    tels[i].addEventListener('input', function() {
      this.value = this.value.replace(/[^\d+]/g, '');
    });
  }
}

module.exports = valid;