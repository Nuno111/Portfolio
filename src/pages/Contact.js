import { ReactComponent as EmailSvg } from "../assets/email.svg";
import { ReactComponent as PhoneSvg } from "../assets/phone.svg";
import { ReactComponent as InstagramSvg } from "../assets/instagram.svg";
import { ReactComponent as FacebookSvg } from "../assets/facebook.svg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { ReactComponent as LinkedinSvg } from "../assets/linkedin.svg";
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

	const instagramSvg = (
		<InstagramSvg
			className="dark:group-hover:text-darkTxtPrimary w-20 h-20
			grou-hover:text-lightTxtPrimary fill-current"
		/>
	);

	const facebookSvg = (
		<FacebookSvg
			className="dark:group-hover:text-darkTxtPrimary w-20 h-20
			grou-hover:text-lightTxtPrimary fill-current"
		/>
	);

	const linkedinSvg = (
		<LinkedinSvg
			className="dark:group-hover:text-darkTxtPrimary w-20 h-20
			grou-hover:text-lightTxtPrimary fill-current"
		/>
	);

	const githubSvg = (
		<GithubSvg
			className="dark:group-hover:text-darkTxtPrimary w-20 h-20
			grou-hover:text-lightTxtPrimary fill-current"
		/>
	);

	return (
		<section className="container flex flex-col gap-4 items-center justify-center py-12 md:gap-12">
			{/*https://rossellafer.github.io/fcc-portfolio/#portfolio has  greadt idea on contact page*/}
			{/*Gradiant buttons!*/}
			<h2 className="dark:text-darkTxtPrimary text-lightTxtPrimary text-5xl">
				Contact Me
			</h2>
			<p className="text-3xl">
				Lorem rem officia fuga sequi voluptatum
				Officiis maxime quaerat similique minima
				tenetur aspernatur Quae animi in quasi sint
				architecto quod.
			</p>
			<ul className="grid gap-4 grid-cols-2 text-xl lg:gap-8 lg:grid-cols-3 xl:grid-cols-6">
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
				<ContactCard
					href="tel:+351912950619"
					svg={phoneSvg}
					title="Mobile"
					content="+351 91 295 061 9"
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
