import { CommentContainer, CommentText } from './CommentStyles';

interface Props {
	comment: string;
}

const Comment = ({ comment }: Props) => (
	<CommentContainer>
		<CommentText>{'<!--'}</CommentText>
		<CommentText>{comment}</CommentText>
		<CommentText>{'-->'}</CommentText>
	</CommentContainer>
);

export default Comment;
