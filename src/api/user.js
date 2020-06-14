import axios from '@/helper/axios';

export function getValue(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
  return axios({
    url: '/value',
    method: 'get',
  });
}

export function getValueById(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
  return axios({
    url: '/value/findOne?_where=(user_id,eq,'+userId+')',
    method: 'get',
  });
}

export function getUserById(userId) {
  return axios({
    url: '/user/findOne?_where=(user_id,eq,'+userId+')',
    method: 'get',
  });
}

export function getUser(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
  return axios({
    url: '/user',
    method: 'get',
  });
}
