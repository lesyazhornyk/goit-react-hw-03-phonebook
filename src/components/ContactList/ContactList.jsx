import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDeleteItem}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
