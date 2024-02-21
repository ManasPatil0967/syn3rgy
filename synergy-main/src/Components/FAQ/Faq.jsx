import FaqQuestion from './FaqQuestion';
import './faq.css'

const FaqAccordion = () => {

	const qna = [
		{
			question: "What is Synergy?",
			answer: <>Synergy is a 24-hour hackathon presented by SIGAI X NSDC X ISACA where innovation meets collaboration! It's a platform for tech enthusiasts to join forces, innovate, and showcase their coding process</>,
		},

		{
			question: "How many members are allowed in one team for this hackathon?",
			answer: <>SYN3RGY 1.0 allows 2 to 4 members per team.</>,
		},

		{
			question: "Is there a fee for participation?",
			answer: <>SYN3RGY 1.0 is FREE for all participants if your team is selected.</>,
		},

		{
			question: "What will be the mode and location of the hackathon?",
			answer: <>SYN3RGY will be conducted in OFFLINE mode. Primarily held offline at SVKM's Dwarkadas J. Sanghvi College of Engineering campus, Vile Parle, Mumbai, India.</>,
		},
		
		{
			question: "What do I need to bring to Synergy",
			answer: <>Bring your enthusiasm, laptop, and any specific tools or software you prefer.</>,
		},
		
		{
			question: "When and in what manner will the Domains and Problem statements be assigned?",
			answer: <>A day before the hackathon, participants will be provided with a problem statement and a problem statement preference form. The problem statement will then be allotted on the day of hackathon based on FCFS (First Come First Serve)</>,
		},

		{
			question: "What are the prizes for winners?",
			answer: <>Winners will be rewarded with cash prizes, goodies, certificates and more!</>,
		},

		{
			question: "Will we be provided with an internet connection?",
			answer: <>Yes, we've got you covered with a robust internet connection throughout the event.</>,
		},
		
		{
			question: "Are meals provided?",
			answer: <>Fear not, brave coder! Meals will be provided to keep you fueled and ready to conquer the coding challenges.</>,
		},

		{
			question: "How can I stay updated with event announcements?",
			answer: <>Follow DJS ISACA on {<a className='underline' href='https://www.instagram.com/djs_isaca' target='_blank' rel="noopener noreferrer">djs_isaca</a>}, DJS NSDC on {<a className='underline' href='https://www.instagram.com/djs.nsdc' target='_blank' rel="noopener noreferrer">djs.nsdc</a>} and DJS ACM SIG-AI on {<a className='underline' href='https://www.instagram.com/djs.sigai' target='_blank' rel="noopener noreferrer">djs.sigai</a>} for real-time updates and exciting announcements.</>,
		},
		
		{
			question: "How can I get support during the hackathon?",
			answer: <>Mentors and support staff are available round the clock.</>,
		},		
	]

	return (
		<div className='flex flex-wrap gap-12 w-11/12 md:w-4/5 m-auto'>
			{
				qna.map(
					(elem, idx) => <FaqQuestion key={idx} idx={idx+1} question={elem.question} answer={elem.answer} />
				)
			}
		</div>

	);
};

export default FaqAccordion;
