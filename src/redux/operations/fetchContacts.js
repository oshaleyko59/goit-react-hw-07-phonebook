/*
одержання масиву контактів (метод GET) запитом.
Базовий тип екшену "contacts/fetchAll"
[
  {
  "id": "1",
  "name": "Oleg Fedorov",
  "number": "4699113223"
  },
  {
  "id": "2",
  "name": "Olga",
  "number": "4699279127"
  },
  {
  "id": "3",
  "name": "Nata M",
  "number": "+380972173221"
  }
]
 */
import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "redux/contactsSlice";

axios.defaults.baseURL = 'https://64862089a795d24810b7bb69.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/contacts');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};
