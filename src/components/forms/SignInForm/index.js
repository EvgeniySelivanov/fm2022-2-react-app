import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';
const initialValues = {
  email: '',
  password: '',
  isemailValid: true,
  ispasswordValid: true

}
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }
  formHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    event.target.reset();
    this.setState = ({ ...initialValues });
  }
  // emailHandler=({target:{value}})=>this.setState({email:value});
  inputHandler = ({ target: { name, value } }) => this.setState({ [name]: value,[`is${name}Valid`]:!value.includes(" ")});
  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;
    const emailClasses=cx(styles.fields,{
      [styles.invalid]:!isemailValid
    });
    const passClasses=cx(styles.fields,{
      [styles.invalid]:!ispasswordValid
    });
    return (
      <section>
        <h1>My form</h1>
        <form className={styles.form} onSubmit={this.formHandler}>
          <input
            value={email}
            onChange={this.inputHandler}
            className={emailClasses}
            type='email' name='email'
            placeholder="email" />
          <input
            value={password}
            onChange={this.inputHandler}
            className={passClasses}
            type='password' name='password'
            placeholder="password" />
          <input
            className={styles.btn}
            type='submit'
            value='send' />
        </form>
      </section>
    );
  }
}

export default SignInForm;
