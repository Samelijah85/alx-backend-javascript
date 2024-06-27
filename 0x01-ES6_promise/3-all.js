import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();

  return Promise.all([upload, create]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}

export default handleProfileSignup;
