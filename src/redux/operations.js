/*
Використовуй функцію createAsyncThunk для оголошення асинхронних
генераторів екшенів та виконання HTTP-запитів.
Обробку екшенів та зміну даних у стані Redux зроби за допомогою createSlice.
*/ /*
одержання масиву контактів (метод GET) запитом.
Базовий тип екшену "contacts/fetchAll" */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64862089a795d24810b7bb69.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  //=payloadCreator(arg, thunkAPI)
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

/*
додавання контакту (метод POST).
Базовий тип екшену "contacts/addContact" */
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name:contact.name, number: contact.number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

/*
  видалення контакту (метод DELETE).
  Базовий тип екшену "contacts/deleteContact". */
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
