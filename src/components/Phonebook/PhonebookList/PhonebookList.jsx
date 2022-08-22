import PropTypes from 'prop-types';

import styles from './phonebook-list.module.css';


const PhonebookList = ({items, removeContact}) => {
    const elements = items.map (({id, name, number }) => (
        <li key={id} className={styles.item}>
            &bull;  {name}: {number}
            <button onClick={() => removeContact(id)} className={styles.btn}>Delete</button>
        </li>
    ));
    return (
        <>
        <h2 className={styles.title}>Contacts</h2>
        <h3 className={styles.filter}>Find contacts by name</h3>
        <ol>
            {elements}
        </ol>
        </>
    )
 
}

export default PhonebookList;

PhonebookList.defaultProps = {
    items: []
}

PhonebookList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,

    }))
}