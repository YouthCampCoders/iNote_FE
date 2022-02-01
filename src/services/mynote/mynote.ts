import request from 'services'

export const test = async (phoneNumber: number) => {
  const res = await request.get({
    url: `user/sendMessage?phoneNumber=${phoneNumber}`
  })

  console.log(res)
}
