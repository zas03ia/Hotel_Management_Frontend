import axios from 'axios';
import {Hotel} from '@interfaces/hotel'


const apiBaseUrl = process.env.API_BASE_URL;


export async function fetchHotel(hotelId: string): Promise<Hotel | null> {
  const apiUrl = `${apiBaseUrl}/hotel/${hotelId}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch hotel: ${response.statusText}`);
  }

  return response.json();
}


// export async function fetchImage(relative_path: string): Promise<string | null> {
//   const apiUrl = `http://localhost:3000/uploads${relative_path}`;
//   const response = await fetch(apiUrl);
//   console.log(apiUrl, "ghghjggff----------------", response)

//   if (!response.ok) {
//     throw new Error(`Failed to fetch image: ${response.statusText}`);
//   }
//   console.log(response.json(), "sfhdjksdfhjsd------------hfjkhsjk");
//   return response.url;
// }

// export const createHotel = async (hotelData: object) => {
//   const response = await axios.post(`${BASE_URL}/hotel`, hotelData);
//   return response.data;
// };

// export const updateHotel = async (hotelId: string, hotelData: object) => {
//   const response = await axios.put(`${BASE_URL}/hotel/${hotelId}`, hotelData);
//   return response.data;
// };

// export const uploadImage = async (imageFile: File) => {
//   const formData = new FormData();
//   formData.append('file', imageFile);
//   const response = await axios.post(`${BASE_URL}/images`, formData, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });
//   return response.data;
// };
