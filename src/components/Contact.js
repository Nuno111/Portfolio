import { ReactComponent as EmailSvg } from "../assets/email.svg";
import { ReactComponent as PhoneSvg } from "../assets/phone.svg";
import ContactCard from "../components/ContactCard";

const Contact = () => {
	const emailSvg = (
		<EmailSvg
			className="dark:group-hover:text-darkTxtPrimary w-20 h-20
			grou-hover:text-lightTxtPrimary fill-current"
		/>
	);

	const phoneSvg = (
		<PhoneSvg
			className="dark:group-hover:text-darkTxtPrimary w-20 h-20
			grou-hover:text-lightTxtPrimary fill-current"
		/>
	);

	return (
		<section
			id="contact"
			className="container flex flex-col items-center justify-center "
		>
			{/*https://rossellafer.github.io/fcc-portfolio/#portfolio has  greadt idea on contact page*/}
			{/*Gradiant buttons!*/}
			<h3 className="py-12 font-bold text-center text-2xl md:text-3xl md:text-4xl lg:py-20">
				Get In Touch
			</h3>
			<p className="text-xl sm:text-2xl lg:text-3xl">
				Lorem rem officia fuga sequi voluptatum
				Officiis maxime quaerat similique minima
				tenetur aspernatur Quae animi in quasi sint
				architecto quod.
			</p>
			<ul
				className="justify-center
				flex flex-col sm:flex-row gap-20 py-20 items-center"
			>
				<ContactCard
					href="mailto:nuno_c11@hotmail.com"
					svg={emailSvg}
					title="Email"
					content="Nuno_c11@hotmail.com"
				/>
				<ContactCard
					href="tel:+351912950619"
					svg={phoneSvg}
					title="Mobile"
					content="+351 91 295 061 9"
				/>
			</ul>
		</section>
	);
};

export default Contact;
