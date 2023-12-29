import '../styles/sidebar.css'
import Input from './input.jsx'

export default function Sidebar ({conctacts, setContacts, placeholder_contacts}) {
    return (
        <section className='sidebar'>
            <form>
                <fieldset style={{display: 'flex', flexDirection: 'column'}}>
                    <legend>Contact Details</legend>
                    <Input name={"Full Name: "} type={'text'} onchange={
                        (e) => setContacts({...conctacts, name: e.target.value})
                    }/>
                    <Input name={"Email: "} type={'email'} onchange={
                        (e) => setContacts({...conctacts, email: e.target.value})
                    }/>
                    <Input name={"Number: "} type={'tel'} onchange={
                        (e) => setContacts({...conctacts, number: e.target.value})
                    }/>
                </fieldset>
                <fieldset style={{display: 'flex', flexDirection: 'column'}}>
                    <legend>Education</legend>
                    <Input name={"School: "} type={'text'}/> 
                </fieldset>
                <div>
                    <button type='button' onClick={() => {setContacts(placeholder_contacts)}}>Example</button>
                    <button type='button'>Edit</button>
                    <button type='button' onClick={() => {console.log(conctacts)}}>Submit</button>
                </div>
            </form>   
        </section>
    );
}