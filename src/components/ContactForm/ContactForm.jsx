import React, { Component } from 'react';
import style from './ContactForm.module.css';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
    };
    
    reset = () => {
    this.setState({name: '', number: ''});
    };
    
  render() {
    const { name, number } = this.state;
     return (
         <form onSubmit={this.handleSubmit} className={style.form}>
             <label htmlFor={this.nameInputId} className={style.form_label}>Name
          <input
            type="text"
            className={style.form_input}
            name="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}       
          />
        </label>
             <label htmlFor={this.numberInputId} className={style.form_label}>Number
          <input
            type="tel"
            className={style.form_input}
             name="number"
             pattern="\+?[0-9\s\-\(\)]+"
            //pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
            //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}         
          />
        </label>
             <button type='submit' className={style.form_button}>Add contact</button>
    </form>
      );
  };
};