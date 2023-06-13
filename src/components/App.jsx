// ************************************************************
/* 6 - Книга контактів
Виконайте рефакторинг коду програми «Книга контактів».
Видали код, що відповідає за зберігання/читання з локального сховища,
та додай взаємодію з бекендом для зберігання контактів.
Бекенд
-Створи свій бекенд для розробки за допомогою UI-сервісу mockapi.io.
-Зареєструйся з обліковим записом GitHub.
-Створи ресурс contacts щоб отримати ендпоінт /contacts.
-Використай конструктор ресурсу і опиши об'єкт контакту як на ілюстрації.

*/
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Header } from 'common/styledCommon';

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану //
  const {isLoading, error } = useSelector(selectContacts);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Рендерим розмітку в залежності від значень у стані
  return (
    <div style={{ marginLeft: 20 }}>
      <Header>Phonebook</Header>
      <ContactForm />
      <Header as="h2">Contacts</Header>
      <Filter />
      {!isLoading && !error && <ContactList />}
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
