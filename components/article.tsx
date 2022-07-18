import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Author from '../types/author';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const Article = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <section>
            <div className="mb-8 rounded-md border-2 md:flex md:h-60 md:max-h-60 h-100 max-h-100">
                <img
                    src={coverImage}
                    alt={`Cover Image for ${title}`}
                    className="object-cover h-96 md:w-80 md:h-full"
                />
                <div className="flex-row p-4">
                    <h3 className="mb-4 text-xl leading-tight lg:text-3xl">
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 text-lg md:mb-2">
                        <DateFormatter dateString={date} />
                    </div>
                    <div>
                        <p className="overflow-hidden text-lg leading-relaxed text-justify text-ellipsis line-clamp-3 md:h-22">
                            好友的母親出門倒垃圾，一輛急駛摩托車猛然撞擊，就此倒地不起。這位伯母原本有心臟宿疾，家裡隨時準備著氧氣筒。然而萬萬沒有料到，她是用這種方式離開。

                            子女完全不能接受，哭著說：「媽媽一句交代都沒就走了！」他們以為，媽媽即使心臟病發作，也總還有時間跟他們說說話，交代幾句，怎麼可以一聲不響就走呢？

                            其實，他們忘了，媽媽每天都在交代。

                            就跟天下的母親一樣，無非是「注意身體，小心著涼」、「不要太累，少熬夜，少喝酒」、「好好念書，別整天貪玩」......

                            只不過我們聽得太多，聽得我們煩膩、麻木。

                            直到母親閉口的那刻，我們才發現，還有很多話來不及聽、來不及問、來不及跟媽媽說。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Article;

// overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
