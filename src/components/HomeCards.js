import Card from "./Card";

const HomeCards = () => {
	const performant = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className="w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current"
		>
			<path d="M19.965,8.521C19.988,8.347,20,8.173,20,8c0-2.379-2.143-4.288-4.521-3.965C14.786,2.802,13.466,2,12,2 S9.214,2.802,8.521,4.035C6.138,3.712,4,5.621,4,8c0,0.173,0.012,0.347,0.035,0.521C2.802,9.215,2,10.535,2,12 s0.802,2.785,2.035,3.479C4.012,15.653,4,15.827,4,16c0,2.379,2.138,4.283,4.521,3.965C9.214,21.198,10.534,22,12,22 s2.786-0.802,3.479-2.035C17.857,20.283,20,18.379,20,16c0-0.173-0.012-0.347-0.035-0.521C21.198,14.785,22,13.465,22,12 S21.198,9.215,19.965,8.521z M10.955,16.416l-3.667-3.714l1.424-1.404l2.257,2.286l4.327-4.294l1.408,1.42L10.955,16.416z"></path>
		</svg>
	);

	const responsive = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className="w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current"
		>
			<path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
		</svg>
	);

	const cleancode = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className="w-12 h-12 dark:text-darkTxtPrimary text-lightTxtPrimary fill-current"
		>
			<path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z"></path>
		</svg>
	);

	return (
		<div className="grid gap-4 grid-cols-1 lg:gap-6 lg:grid-cols-3">
			<Card
				title="Responsive"
				content="To achieve SPAs responsiveness I use CSS Flexbox, CSS Grid, Responsively app, Chrome dev tools and Tailwind responsive properties."
				icon={responsive}
			/>
			<Card
				title="Performant"
				content="To accomplish SPAs performance I use a different tool-set of React Hooks for each project based on its complexities and necessities. Custom hooks being my favorite."
				icon={performant}
			/>
			<Card
				title="Clean & "
				content="To ensure ease of SPAs maintenance I use a combination of modern best practices coupled with the breakdown of complex logic into smaller individual blocks, usually moving logic into a new Component."
				icon={cleancode}
				secondWord="Readable"
			/>
		</div>
	);
};

export default HomeCards;
