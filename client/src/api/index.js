import axios from "axios";

const baseURL = "http://localhost:4000/";

export const validateUser = async (token) => {
  try {
    const res = await axios.get(`${baseURL}api/users/login`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllArtist = async () => {
  try {
    const res = await axios.get(`${baseURL}api/artists/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllFeedbacks = async () => {
  try {
    const res = await axios.get(`${baseURL}api/feedback/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};


export const deleteFeedbackById = async (id) => {
  try {
    const res = await axios.delete(`${baseURL}api/feedback/delete/${id}`);
    return res.data; // Return success message or result from the server
  } catch (error) {
    console.error("Error deleting feedback:", error);
    return null; // Return null in case of error
  }
};



export const deleteAlbumById = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/api/albums/delete/${id}`); // Ensure this URL matches your backend route
    return response.data; // You may not need this if you don't use the response
  } catch (error) {
    console.error("Error deleting album:", error);
    throw error; // Propagate the error for handling in DashboardAlbums
  }
};




export const deleteArtistById = async (deleteId) => {
  try {
    const response = await axios.delete(`${baseURL}/api/artists/delete/${deleteId}`); // Ensure this URL matches your backend route
    return response.data; // You may not need this if you don't use the response
  } catch (error) {
    console.error("Error deleting album:", error);
    throw error; // Propagate the error for handling in DashboardAlbums
  }
};










export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}api/users/getUsers`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const removeUser = async (userId) => {
  try {
    const res = axios.delete(`${baseURL}api/users/delete/${userId}`);
    return res;
  } catch (error) {
    return null;
  }
};

export const getAllSongs = async () => {
  try {
    const res = await axios.get(`${baseURL}api/songs/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllAlbums = async () => {
  try {
    const res = await axios.get(`${baseURL}api/albums/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const changingUserRole = async (userId, role) => {
  try {
    const res = axios.put(`${baseURL}api/users/updateRole/${userId}`, {
      data: { role: role },
    });
    return res;
  } catch (error) {
    return null;
  }
};

export const saveNewArtist = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/artists/save`, { ...data });
    return (await res).data.artist;
  } catch (error) {
    return null;
  }
};

export const saveNewAlbum = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/albums/save`, { ...data });
    return (await res).data.album;
  } catch (error) {
    return null;
  }
};

export const saveNewSong = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/songs/save`, { ...data });
    return (await res).data.song;
  } catch (error) {
    return null;
  }
};

export const deleteSongById = async (id) => {
  try {
    const res = axios.delete(`${baseURL}api/songs/delete/${id}`);
    return res;
  } catch (error) {
    return null;
  }
};
