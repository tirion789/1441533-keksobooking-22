const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg'

const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

fileChooserAvatar.addEventListener('change', () => {
  const fileAvatar = fileChooserAvatar.files[0];
  const fileNameAvatar =  fileAvatar.name.toLowerCase();

  const matchesAvatar = FILE_TYPES.some((it) => {
    return fileNameAvatar.endsWith(it);
  });

  if (matchesAvatar) {
    const readerAvatar = new FileReader();

    readerAvatar.addEventListener('load', () => {
      previewAvatar.src = readerAvatar.result;
    });

    readerAvatar.readAsDataURL(fileAvatar);
  }
});

const resetAvatar = () => {
  previewAvatar.src = DEFAULT_AVATAR;
};


const fileChooserPhotos = document.querySelector('.ad-form__input');
const previewPhotos = document.querySelector('.ad-form__photo');


const showNewCastomImgPhotos = (downloadableСustomFiledPhotos, customPreviewFieldPhotos) => {
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

const onCreateImagePreview = () => {
  const createImageElement = document.createElement('img');
  createImageElement.width = previewPhotos.offsetWidth;
  createImageElement.height = previewPhotos.offsetHeight;
  createImageElement.alt = 'Фото жилья';
  previewPhotos.append(createImageElement);
  showNewCastomImgPhotos(fileChooserPhotos,  createImageElement)
};


fileChooserPhotos.addEventListener('change', onCreateImagePreview);

const resetPhotos = () => {
  previewPhotos.innerHTML = '';
}


export {resetAvatar, resetPhotos}


