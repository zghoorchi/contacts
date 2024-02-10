import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, deletHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              deletHandler={deletHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No contact yet</p>
      )}
    </div>
  );
}

export default ContactsList;
