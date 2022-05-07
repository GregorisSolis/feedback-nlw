import { useState } from 'react' 
import { FeedbackTypeStep } from './steps/FeedbackTypeStep'
import { FeedbackContentStep } from './steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep'

import bugImg from '../../assests/bug.png'
import ideaImg from '../../assests/idea.png'
import thoughtImg from '../../assests/thought.png'

//NO SE TE OLVIDE IMPORTAR LAS IMAGENES

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImg,
			alt: 'imagen de um unseto'
		}
	},
	IDEA: {
		title: 'Idea',
		image: {
			source: ideaImg,
			//alt: 'Imagen de uma lampada'
		}
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: thoughtImg,
			//alt: 'Imagen de um balão de pensamento'
		}
	},
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){

	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
	const [FeedbackSent, setFeedbackSent] = useState(false)

	function handleRestarFeedback(){
		setFeedbackSent(false)
		setFeedbackType(null)
	}

	return(
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

			{ FeedbackSent ? (
				<FeedbackSuccessStep onFeedbackRestartRequested={handleRestarFeedback}/>
			) : (
				<>
				{!feedbackType ? (
					<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
				) : (
					<FeedbackContentStep 
						feedbackType={feedbackType}
						onFeedbackRestartRequested={handleRestarFeedback}
						onFeedbackSent={() => setFeedbackSent(true)}
					/>
				)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				Feito pelo <a className="underline underline-offset-2" href="https://gregorisdev.web.app">Gregorisdev</a>
			</footer>

		</div>
	)
}