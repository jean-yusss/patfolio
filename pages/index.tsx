import Link from 'next/link';
import { GetStaticProps } from 'next';

import * as S from '../styles/HomeStyles';

const Home = () => (
	<S.HomeContainer>
		<S.FlexContainer>
			<S.LineNumber>1</S.LineNumber>
			<S.IndentedStatement>
				<S.ImportStatement>import</S.ImportStatement>
				<S.ImportName>React</S.ImportName>
				<S.ImportFrom>from</S.ImportFrom>
				<S.FlexContainer>
					<S.Quotations>{"'"}</S.Quotations>
					<S.ImportPackage>react</S.ImportPackage>
					<S.Quotations>{"'"}</S.Quotations>
				</S.FlexContainer>
			</S.IndentedStatement>
		</S.FlexContainer>

		<S.LineNumber>2</S.LineNumber>

		<S.FlexContainer>
			<S.LineNumber>3</S.LineNumber>
			<S.IndentedStatement>
				<S.ConstKeyword>const</S.ConstKeyword>
				<S.VariableName>Home</S.VariableName>
				<S.EqualSign>=</S.EqualSign>
				<S.Parenthesis>(</S.Parenthesis>
				<S.Parenthesis>)</S.Parenthesis>
				<S.ArrowFunction>{'=>'}</S.ArrowFunction>
				<S.Parenthesis>(</S.Parenthesis>
			</S.IndentedStatement>
		</S.FlexContainer>

		<S.LineNumber>4</S.LineNumber>

		<S.FlexContainer>
			<S.LineNumber>5</S.LineNumber>
			<S.SmallText>Hi, my name is</S.SmallText>
		</S.FlexContainer>

		<S.LineNumber>6</S.LineNumber>

		<S.FlexContainer>
			<S.LineNumber>7</S.LineNumber>
			<S.BigText>Patrick Nguyen.</S.BigText>
		</S.FlexContainer>

		<S.LineNumber>8</S.LineNumber>

		<S.FlexContainer>
			<S.LineNumber>9</S.LineNumber>
			<S.BigText>I build things on the web.</S.BigText>
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
			<S.IndentedStatement>
				<S.Parenthesis>{')'}</S.Parenthesis>
			</S.IndentedStatement>
		</S.FlexContainer>

		<S.LineNumber>13</S.LineNumber>

		<S.FlexContainer>
			<S.LineNumber>14</S.LineNumber>

			<S.IndentedStatement>
				<S.ExportStatement>export</S.ExportStatement>
				<S.ExportDefault>default</S.ExportDefault>
				<S.ExportedVariable>Home</S.ExportedVariable>
			</S.IndentedStatement>
		</S.FlexContainer>

		<S.LineNumber>15</S.LineNumber>
	</S.HomeContainer>
);

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { title: 'Home' }
	};
};

export default Home;
