import axios from 'axios';

// as it's a test project, we can keep token here. Else, we can shift it to .env
const token = "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"
const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchUserData = async (username) => {
  try {
    const userResponse = await instance.get(`/users/${username}`);
    return userResponse.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserRepositories = async (username) => {
  try {
    const repoResponse = await instance.get(`/users/${username}/repos`);
    return repoResponse.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserOrganizations = async (username) => {
  try {
    const orgResponse = await instance.get(`/users/${username}/orgs`);
    return orgResponse.data;
  } catch (error) {
    throw error;
  }
};
