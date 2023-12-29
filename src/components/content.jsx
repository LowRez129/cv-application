import '../styles/content.css'

export default function Content ({contacts={}, education={}, experience={}}) {
    return (
        <section className="content">
            <section className='contacts'>
                <div className='name'>{contacts.name}</div> 
                <div className='contact-container'>
                    <div>{contacts.email}</div>
                    <div>{contacts.number}</div>
                </div>
            </section>
            <section className='education'>
                {education.name}
            </section>
            <section className='experience'>

            </section>
        </section>
    );
}