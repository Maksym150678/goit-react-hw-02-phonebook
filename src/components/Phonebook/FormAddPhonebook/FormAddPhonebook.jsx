import { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './form-add-phonebook.module.css';

import { nanoid } from 'nanoid';
module.id = nanoid(5);




class FormAddPhonebook extends Component {

    static defaultProps = {
        onSubmit: () => {}
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {
        name: '',
        number: ''
      }

      nameId = nanoid();
      numberId = nanoid();

      handleChange = ({target}) => {
        const {value, name} = target;
        this.setState({
            [name]: value,
        });
      }

      handleSubmit = (e) => {
         e.preventDefault();
         const {onSubmit} = this.props;
         onSubmit({...this.state});
         this.reset()
      }

      reset() {
        this.setState({
            name: '',
            number: ''
         })
      }

    render() {
        const{handleSubmit, handleChange} = this;

        const {name, number} = this.state; 
        
        return (
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input id={this.nameId} value={name} onChange={handleChange} className={styles.field} placeholder='Enter name'
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                     />
                </div>
                <div className={styles.formGroup}>
                    <label>Number</label>
                    <input id={this.numberId} value={number} onChange={handleChange} className={styles.field} placeholder='Enter the phone number'
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                     /> 
                </div>
                <button className={styles.btn}>Add contact</button>

            </form>

        )
    }
}

export default FormAddPhonebook;

// FormAddPhonebook.defaultProps = {
//     onsubmit: () => {}
//   }

//   FormAddPhonebook.PropTypes = {
//     onSubmit: PropTypes.func,
//   }
