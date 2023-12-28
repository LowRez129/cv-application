import '../styles/sidebar.css'
import Input from './input.jsx'
import Content from './content.jsx';
import { useState } from 'react';

export default function Sidebar () {
    const placeholder = {
        name: 'Testing',
        email: 'testing@gmail.com',
        number: '0932132',
    }
    const [conctacts, setContacts] = useState(placeholder)

    return (
        <>
            <section className='sidebar'>
                <form>
                    <fieldset style={{display: 'flex', flexDirection: 'column'}}>
                        <legend>Contact Details</legend>
                        <Input name={"Full Name: "} type={'text'} onchange={
                            (e) => {setContacts({...conctacts, name: e.target.value})}
                        }/>
                        <Input name={"Email: "} type={'email'} onchange={
                            (e) => {setContacts({...conctacts, email: e.target.value})}
                        }/>
                        <Input name={"Number: "} type={'tel'} onchange={
                            (e) => {setContacts({...conctacts, number: e.target.value})}
                        }/>
                    </fieldset>
                    <div>
                        <button type='button' onClick={() => {setContacts(placeholder)}}>Example</button>
                        <button type='button'>Edit</button>
                        <button type='button' onClick={() => {console.log(conctacts)}}>Submit</button>
                    </div>
                </form>   
            </section>
            <Content contacts={conctacts}/>
        </>
    );
}