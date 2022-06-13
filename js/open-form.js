
openedForm.addEventListener('click', openForm);

closedForm.addEventListener('click', closeForm);

form.addEventListener('click', function (e) {
  if (!e.target.closest('.form_content')) {
    closeForm();
  }
})


window.addEventListener('scroll', headerScrolled);

window.addEventListener('resize', windowResize);

escClose();

/* FUNCTIONS */

function openForm() {
  form.classList.add('opened');
  bodyLockPadding();
}

function closeForm() {
  form.classList.remove('opened');
  bodyUnLockPadding();
}

function bodyLockPadding() {
  body.classList.add('locked');
  paddingNeeded.forEach((lock) => {
    lock.style.paddingRight = addPadding + "px";
  });
}

function bodyUnLockPadding() {
  setTimeout(() => {
    body.classList.remove('locked');
    paddingNeeded.forEach((lock) => {
      lock.style.paddingRight = 0 + "px";
    });
  }, timeout)
}

function escClose() {
  document.addEventListener('keyup', (e) => {
    const keyCode = e.keyCode;
    if (keyCode == 27) {
      if (form.classList.contains('opened')) {
        closeForm()
      }
    }
  })
}

function headerScrolled() {
  if (window.scrollY > 0) {
    if (!header.classList.contains('scrolled')) {
      header.classList.add('scrolled')
    }
  }
  else {
    if (header.classList.contains('scrolled')) {
      header.classList.remove('scrolled')
    }
  }
}

function windowResize(){
  if (window.innerWidth <= 770) {
    whyTarget.remove();
    mainImg.remove();
    mainLinksParent.insertBefore(mainImg, mainLinks);
  }
  else {
    aboutMe.parentNode.insertBefore(whyTarget, aboutMe);
    if (mainLinksParent.contains(mainImg)) {
      mainImg.remove();
      mainInfo.parentNode.insertBefore(mainImg, mainInfo);
    }
  }
}

windowResize();
