import '../styles/content.css'

export default function Content ({contacts}) {
    return (
        <section className="preview">
            {contacts.name} <br/>
            {contacts.email} <br/>
            {contacts.number}
        </section>
    );
}