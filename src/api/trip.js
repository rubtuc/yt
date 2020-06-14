import axios from '@/helper/axios';

export function Trip(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
  return axios({
    url: '/trip',
    method: 'get',
  });
}

export  function getStation() {
  return axios({
    url:'/station',
    method: 'get'
  })
}
//
// export function Trip(userId, mineType, mineAmount, vntAmount, vntErc20Amount) {
//   return axios({
//     url: '/trip',
//     method: 'get',
//     data: {
//       user_id: userId,
//       mine_type: mineType,
//       mine_amount: mineAmount,
//       vnt_amount: vntAmount,
//       vnt_erc20_amount: vntErc20Amount,
//     },
//   });
// }
