import { CommentContainer, CommentText } from './CommentStyles';

const Comment = ({ comment }: CommentProps) => (
	<CommentContainer>
		<CommentText>{'<!--'}</CommentText>
		<CommentText>{comment}</CommentText>
		<CommentText>{'-->'}</CommentText>
	</CommentContainer>
);

export default Comment;
