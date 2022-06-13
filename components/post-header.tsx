import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Author from '../types/author';

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({
    title, coverImage, date, author,
}: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} picture={author.picture} />
            </div>
            <div className="mb-8 sm:mx-0 md:mb-16">
                <CoverImage title={title} src={coverImage} />
            </div>
            <div className="mx-auto max-w-2xl">
                <div className="block mb-6 md:hidden">
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    );
};

export default PostHeader;
