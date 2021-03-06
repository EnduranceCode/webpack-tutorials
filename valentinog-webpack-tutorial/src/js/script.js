import '../css/style.scss';

// eslint-disable-next-line no-unused-vars
import moment from 'moment';
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ '../common/usersAPI');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});
