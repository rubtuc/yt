import axios from '@/helper/axios';

export function getValue(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
  return axios({
    url: '/value',
    method: 'get',
  });
}

export function getUserValue(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
  return axios({
    url: '/user',
    method: 'get',
  });
}

