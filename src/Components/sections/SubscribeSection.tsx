import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Get } from 'type-fest';

import { ViewportSizes } from '../../../styles/theme';
import { FooterQueryQuery } from '../../graphql/footer.generated';
import { subscribeUser } from '../../helpers/API';
import { H2 } from '../core/Typography';

interface Props {
	page: Get<FooterQueryQuery, 'page.subscribeBlock'>;
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1440px;

	> h2 {
		padding: 48px 0px;
		font-size: 32px;
		line-height: 58px;
	}

	@media (min-width: ${ViewportSizes.Phone}px) {
		width: 50%;
		justify-content: flex-start;
	}
`;

const Form = styled.form`
	height: 80px;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	position: relative;
	z-index: 1;
	overflow: hidden;
	border-style: solid;
	border-left-color: transparent;
	border-right-color: transparent;
	border-top-color: transparent;
	border-bottom-color: ${({ theme }) => theme.colors.jsconfYellow};
`;

const Fieldset = styled.fieldset(
	({ theme }) => `
  height: 90%;
  position: relative;
`,
);

const ErrorMessage = styled.p(
	({ theme }) => `
  margin: 12px 0;
  min-height: 20px;
  color: ${theme.colors.jsconfRed}
`,
);

const buttonWidth = 150;
const SubmitButton = styled(motion.input)(
	({ theme }) => `
  position: absolute;
  background: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  top: 0;
  right: 0;
  height: 100%;
  width: ${buttonWidth}px;
  text-align:center;
  vertical-align: middle;	
  cursor: pointer;
  font-weight: bold;
  border-radius: 0 24px 0 0;

  @media (min-width: ${ViewportSizes.Phone}px) {
    min-width: ${buttonWidth}px;
  }
`,
);
const EmailInput = styled.input(
	({ theme }) => `
  background: transparent;
  height: 100%;
  width: calc(100% - ${buttonWidth}px);
  padding-left: 10px;
  text-align: left;
  line-height: 50px;
  vertical-align: middle;
  background: ${theme.colors.black};
  color: ${theme.colors.white}
`,
);

const titleAnimation = {
	scale: 1.01,
	transition: {
		duration: 0.1,
		type: 'tween',
	},
};

const messages = {
	default: 'Suscríbete',
	loading: 'Enviando ⌛️',
	success: 'Estás suscrito! 😊',
	error: 'Algo salió mal 😢',
};

type FormValuesType = { email: 'string' };
const SubscribeSection = (props: Props) => {
	const controls = useAnimation();
	const [message, setMessage] = useState<keyof typeof messages>('default');
	const { mutateAsync } = useMutation(['me'], subscribeUser);
	const { register, handleSubmit, formState, reset } =
		useForm<FormValuesType>();

	const wait = async (seconds: number) =>
		await new Promise((resolve) => setTimeout(resolve, seconds * 1000));

	const onSubmit = async (data: FormValuesType) => {
		try {
			setMessage('loading');
			await controls.start({
				width: '100%',
				transition: { duration: 0.5, ease: 'backInOut' },
			});
			await mutateAsync(data);
			await wait(1.5);
			setMessage('success');
			await wait(2);
			reset();
		} catch (e) {
			console.error(e);
			setMessage('error');
			await wait(2);
		} finally {
			await controls.start({
				width: buttonWidth,
				transition: { duration: 0.5, ease: 'backInOut' },
			});
			setMessage('default');
		}
	};
	const emailValidation = {
		required: true,
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: 'Escribe un email válido',
		},
	};
	const { errors } = formState;

	return (
		<Container>
			<H2 whileHover={titleAnimation}>{props?.page?.title}</H2>
			<Suspense fallback={null}>
				<AnimatePresence mode="wait">
					<Form
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
						onSubmit={handleSubmit(onSubmit)}
					>
						<Fieldset>
							<EmailInput
								placeholder="Ingresa tu email"
								{...register('email', emailValidation)}
							/>

							<SubmitButton
								animate={controls}
								type="submit"
								value={messages[message]}
							/>
						</Fieldset>
					</Form>
				</AnimatePresence>
			</Suspense>

			<ErrorMessage>{errors.email?.message}</ErrorMessage>
		</Container>
	);
};

export default SubscribeSection;
