import styled from 'styled-components';

export const HomeContainer = styled.div.attrs({ className: 'page-container' })`
	font-size: clamp(0.875rem, 5vw, 1.125rem);

	& > * + * {
		margin-top: 0.25rem;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
`;

export const IndentedStatement = styled.div`
	display: flex;
	margin-left: 1rem;

	& > * + * {
		margin-left: 0.375rem;
	}
`;

export const ImportStatement = styled.p`
	color: var(--importStatement);
`;

export const ImportName = styled.p`
	color: var(--importName);
`;

export const ImportFrom = styled.p`
	color: var(--importFrom);
`;

export const Quotations = styled.p`
	color: var(--quotations);
`;

export const ImportPackage = styled.p`
	color: var(--importPackage);
`;

export const ConstKeyword = styled.p`
	color: var(--constKeyword);
`;

export const VariableName = styled.p`
	color: var(--variableName);
`;

export const EqualSign = styled.p`
	color: var(--equalSign);
`;

export const Parenthesis = styled.p`
	color: var(--parenthesis);
`;

export const ArrowFunction = styled.p`
	color: var(--arrowFunction);
`;

export const SmallText = styled.p`
	font-size: clamp(1rem, 5vw, 1.5rem);
	margin-left: 2rem;
`;

export const BigText = styled.p`
	margin-left: 2rem;
	font-size: clamp(2rem, 8vw, 3rem);
	line-height: 1;
`;

export const ExportStatement = styled.p`
	color: var(--exportStatement);
`;

export const ExportDefault = styled.p`
	color: var(--exportDefault);
`;

export const ExportedVariable = styled.p`
	color: var(--exportedVariable);
`;

export const LineNumber = styled.p`
	color: var(--editorLineNumber-foreground);
`;

export const LinkButton = styled.button`
	color: var(--extensionButton-prominentForeground);
	background-color: var(--extensionButton-prominentBackground);
	padding: 0.75rem;
	border-radius: 0.25rem;
	margin-top: 0.5rem;
	margin-left: 2rem;

	&:hover {
		background-color: var(--extensionButton-prominentHoverBackground);
	}
`;
