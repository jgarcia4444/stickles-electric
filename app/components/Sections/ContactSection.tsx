import SectionHeader from "../Texts/SectionHeader";
import ContactForm from "../Contact/ContactForm";
import AnimateIn from "../Animations/AnimateIn";
import { PiEnvelopeFill, PiPhoneFill } from "react-icons/pi";
export default function ContactSection() {
    return (
        <div id="contact" className='py-4'>
            <AnimateIn>
                <SectionHeader title="Contact Us" />
            </AnimateIn>
            <AnimateIn delay={0.2}>
                <ContactForm />
            </AnimateIn>
            <AnimateIn className="flex justify-start items-center gap-6" delay={0.4}>
                <a href="tel:7608800778" className="flex items-center gap-1 hover:text-light-blue">
                    <PiPhoneFill size={16} />
                    <span>760-880-0778</span>
                </a>
                <a href="mailto:goelectric760@gmail.com" className="flex items-center gap-1 hover:text-light-blue">
                    <PiEnvelopeFill size={16} />
                    <span>goelectric760@gmail.com</span>
                </a>
            </AnimateIn>
        </div>
    );
}