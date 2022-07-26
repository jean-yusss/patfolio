import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';

import * as S from '../styles/HomeStyles';

const Home = () => {
	const { theme } = useTheme();

	return (
		<S.HomeContainer>
			<S.FlexContainer>
				<S.LineNumber>1</S.LineNumber>
				<S.IndentedStatement theme={theme}>
					<S.ImportStatement>import</S.ImportStatement>
					<S.ImportName theme={theme}>React</S.ImportName>
					<S.ImportFrom>from</S.ImportFrom>
					<S.FlexContainer>
						<S.Quotations theme={theme}>{"'"}</S.Quotations>
						<S.ImportPackage theme={theme}>react</S.ImportPackage>
						<S.Quotations theme={theme}>{"'"}</S.Quotations>
					</S.FlexContainer>
				</S.IndentedStatement>
			</S.FlexContainer>

			<S.LineNumber>2</S.LineNumber>

			<S.FlexContainer>
				<S.LineNumber>3</S.LineNumber>
				<S.IndentedStatement theme={theme}>
					<S.ConstKeyword>const</S.ConstKeyword>
					<S.VariableName theme={theme}>Home</S.VariableName>
					<S.EqualSign>=</S.EqualSign>
					<S.Parenthesis>(</S.Parenthesis>
					<S.Parenthesis>)</S.Parenthesis>
					<S.ArrowFunction theme={theme}>{'=>'}</S.ArrowFunction>
					<S.Parenthesis>(</S.Parenthesis>
				</S.IndentedStatement>
			</S.FlexContainer>

			<S.LineNumber>4</S.LineNumber>

			<S.FlexContainer>
				<S.LineNumber>5</S.LineNumber>
				<S.SmallText theme={theme}>Hi, my name is</S.SmallText>
			</S.FlexContainer>

			<S.LineNumber>6</S.LineNumber>

			<S.FlexContainer>
				<S.LineNumber>7</S.LineNumber>
				<S.BigText theme={theme}>Patrick Nguyen.</S.BigText>
			</S.FlexContainer>

			<S.LineNumber>8</S.LineNumber>

			<S.FlexContainer>
				<S.LineNumber>9</S.LineNumber>
				<S.BigText theme={theme}>I build things on the web.</S.BigText>
			</S.FlexContainer>

			<S.LineNumber>10</S.LineNumber>

			<S.FlexContainer>
				<S.LineNumber>11</S.LineNumber>
				<Link href='/contact'>
					<S.LinkButton>Contact Me</S.LinkButton>
				</Link>
			</S.FlexContainer>

			<S.FlexContainer>
				<S.LineNumber>12</S.LineNumber>
				<S.IndentedStatement theme={theme}>
					<S.Parenthesis>)</S.Parenthesis>
				</S.IndentedStatement>
			</S.FlexContainer>

			<S.LineNumber>13</S.LineNumber>

			<S.FlexContainer>
				<S.LineNumber>14</S.LineNumber>

				<S.IndentedStatement theme={theme}>
					<S.ExportStatement>export</S.ExportStatement>
					<S.ExportDefault>default</S.ExportDefault>
					<S.ExportedVariable theme={theme}>Home</S.ExportedVariable>
				</S.IndentedStatement>
			</S.FlexContainer>

			<S.LineNumber>15</S.LineNumber>
		</S.HomeContainer>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { title: 'Home' }
	};
};

export default Home;
