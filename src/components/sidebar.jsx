import '../styles/sidebar.css'
import Input from './input.jsx'

export default function Sidebar ({getter=[], setter=[], placeholder=[]}) {
    const contacts = getter[0];
    const setContacts = setter[0];
    const placeholder_contacts = placeholder[0];

    const education = getter[1];
    const setEducation = setter[1];
    const placeholder_education = placeholder[1];

    return (
        <section className='sidebar'>
            <form>
                <fieldset style={{display: 'flex', flexDirection: 'column'}}>
                    <legend>Contact Details</legend>
                    <Input name={"Full Name: "} type={'text'} onchange={
                        (e) => {setContacts({...contacts, name: e.target.value})}
                    }/>
                     <Input name={"Email: "} type={'email'} onchange={
                        (e) => {setContacts({...contacts, email: e.target.value})}
                    }/>
                     <Input name={"Number: "} type={'tel'} onchange={
                        (e) => {setContacts({...contacts, number: e.target.value})}
                    }/>
                </fieldset>
                <fieldset style={{display: 'flex', flexDirection: 'column'}}>
                    <legend>Education</legend>
                    <Input name={"Full Name: "} type={'text'} onchange={
                        (e) => {setEducation({...education, name: e.target.value})}
                    }/>
                </fieldset>
                <div>
                    <button type='button' onClick={() => {
                        setContacts(placeholder_contacts);
                        setEducation(placeholder_education);
                    }}>Example</button>
                    <button type='button'>Edit</button>
                    <button type='button' onClick={() => {console.log(contacts)}}>Submit</button>
                </div>
            </form>   
        </section>
    );
}