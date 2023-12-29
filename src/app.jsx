import './app.css'
import Sidebar from './components/sidebar.jsx'
import Content from './components/content.jsx';
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
            <Sidebar conctacts={conctacts} setContacts={setContacts} placeholder_contacts={placeholder_contacts}/>
            <Content contacts={conctacts} />
        </main>
    );
}