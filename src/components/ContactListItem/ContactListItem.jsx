const ContactListItem = ({ name, number, onDelete, id }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
