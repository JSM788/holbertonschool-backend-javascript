import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  try {
    return Promise.resolve({ photo, user });
  } catch (e) {
    return Promise.resolve({ photo: null, user: null });
  }
}
