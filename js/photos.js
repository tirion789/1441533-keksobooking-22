const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const DEFOLT_AVATAR = 'img/muffin-grey.svg'


fileChooserAvatar.addEventListener('change', () => {
  const fileAvatar = fileChooserAvatar.files[0];
  const fileNameAvatar =  fileAvatar.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileNameAvatar.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewAvatar.src = reader.result;
    });

    reader.readAsDataURL(fileAvatar);
  }
});

const resetAvatar = () => {
  previewAvatar.src = DEFOLT_AVATAR;
};


const fileChooserPhotos = document.querySelector('.ad-form__input');
const previewPhotos = document.querySelector('.ad-form__photo');


const newCastomImgPhotos = (downloadableСustomFiledPhotos, customPreviewFieldPhotos) => {
  const filePhotos = downloadableСustomFiledPhotos.files[0];
  const fileNamePhotos = filePhotos.name.toLowerCase();

  const matchesPhoto = FILE_TYPES.some((it) => {
    return fileNamePhotos.endsWith(it);
  });

  if (matchesPhoto) {
    const readerPhoto = new FileReader();

    readerPhoto.addEventListener('load', () => {
      customPreviewFieldPhotos.src = readerPhoto.result;
    });

    readerPhoto.readAsDataURL(filePhotos);
  }
}

const customPreviewPhotos = () => {
  const createImageElement = document.createElement('img');
  createImageElement.width = previewPhotos.offsetWidth;
  createImageElement.height = previewPhotos.offsetHeight;
  createImageElement.alt = 'Фото жилья';
  previewPhotos.append(createImageElement);
  newCastomImgPhotos(fileChooserPhotos,  createImageElement)
};


fileChooserPhotos.addEventListener('change', customPreviewPhotos);

const resetPhotos = () => {
  previewPhotos.innerHTML = '';
}


export {resetAvatar, resetPhotos}


