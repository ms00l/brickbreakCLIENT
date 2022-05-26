import apiUrl from '../apiConfig'
import axios from 'axios'

export const createProfile = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create-profile/',
    data: {
      profile: {
        username: data.username,
        first: data.first,
        last: data.last
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateProfile = (data, id, user) => {
  return axios({
    url: apiUrl + '/profiles/' + id,
    method: 'PATCH',
    data: {
      profile: {
        username: data?.username,
        first: data?.first,
        last: data?.last,
        score: data?.score
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showProfile = (id, user) => {
  return axios({
    url: apiUrl + '/profiles/' + id,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteProfile = (id, user) => {
  return axios({
    url: apiUrl + '/profiles/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const indexProfiles = (user) => {
  return axios({
    url: apiUrl + '/profile/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
