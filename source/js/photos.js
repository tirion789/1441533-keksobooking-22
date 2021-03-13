const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg'

const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhotos = document.querySelector('.ad-form__input');
const previewPhotos = document.querySelector('.ad-form__photo');


const onImageShowNewCustomPicture = (downloadableCustomFiledPhotos, customPreviewFieldPhotos) => {
  const file = downloadableCustomFiledPhotos.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      customPreviewFieldPhotos.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}

const onImageCreatePreview = () => {
  const createImageElement = document.createElement('img');
  createImageElement.width = previewPhotos.offsetWidth;
  createImageElement.height = previewPhotos.offsetHeight;
  createImageElement.alt = 'Фото жилья';
  previewPhotos.append(createImageElement);
  onImageShowNewCustomPicture(fileChooserPhotos,  createImageElement)
};


fileChooserPhotos.addEventListener('change', onImageCreatePreview);

fileChooserAvatar.addEventListener('change', () => onImageShowNewCustomPicture(fileChooserAvatar, previewAvatar))

const resetPhotos = () => {
  previewPhotos.innerHTML = '';
}

const resetAvatar = () => {
  previewAvatar.src = DEFAULT_AVATAR;
};


export {resetAvatar, resetPhotos}


