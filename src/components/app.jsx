import '../styles/app.css'
import Sidebar from './sidebar.jsx'
import Content from './content.jsx';
import { useState } from 'react';

export default function App () {
    const placeholder_contacts = {
        name: 'Testing',
        email: 'testing@gmail.com',
        number: '0932132',
    }

    const placeholder_education = {
        name: 'Testing',
        email: 'testing@gmail.com',
        number: '0932132',
    }

    const [conctacts, setContacts] = useState(placeholder_contacts);
    const [education, setEducation] = useState(placeholder_education);


    return (
        <main>
            <Sidebar 
                getter={[conctacts, education]} 
                setter={[setContacts, setEducation]} 
                placeholder={[placeholder_contacts, placeholder_education]}
            />
            <Content contacts={conctacts} education={education}/>
        </main>
    );
}