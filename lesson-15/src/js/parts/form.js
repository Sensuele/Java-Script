let form = () => {
  let message = {
    loading: '<div style="text-align: center; margin-top: 10px"><img src="img/icons/loader.gif" alt=""> </div>',
    success: '<div style="text-align: center; margin-top: 10px"><img src="img/icons/checked.png" alt=""> </div>',
    failure: '<div style="filter: invert(1); text-align: center; margin-top: 10px"><img src="img/icons/fail-1.png" alt=""> </div>',
  };

  let form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      contactForm = document.getElementById('form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');

  let sendForm = (elem) => {
    elem.addEventListener('submit', (e) => {
      e.preventDefault();
      elem.appendChild(statusMessage);

      let formData = new FormData(elem);

      let postData = (data) => {

        return new Promise((resolve, reject) => {
          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');

          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.onreadystatechange = () => {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });
      }; // End postData
      setTimeout(() => { form.lastChild.remove(); }, 5000);
      setTimeout(() => { contactForm.lastChild.remove(); }, 5000);

      let clearInput = () => {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      };
      postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInput);
    });
    
  };    
  sendForm(form);
  sendForm(contactForm);
  
};

module.exports = form;