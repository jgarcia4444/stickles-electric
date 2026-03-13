import SectionHeader from "../Texts/SectionHeader";
import ContactForm from "../Contact/ContactForm";
export default function ContactSection() {
    return (
        <div id="contact" className='py-4'>
            <SectionHeader title="Contact Us" />
            <ContactForm />
        </div>
    );
}