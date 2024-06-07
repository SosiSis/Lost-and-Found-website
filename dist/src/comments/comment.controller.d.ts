import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schema/comment.schema';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(postId?: string): Promise<Comment[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<Comment>;
    deleteItem(id: string): Promise<Comment>;
}
