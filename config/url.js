const root = 'https://science-popularization.herokuapp.com/';
export const urls = {
  root: () => root,
  login: () => `${root}auth/login`,
  register: () => `${root}auth/register`,
  getUser: () => `${root}user`,
  getAnnouncements: () => `${root}announcements/`,
  getEvents: () => `${root}events/`,
};
