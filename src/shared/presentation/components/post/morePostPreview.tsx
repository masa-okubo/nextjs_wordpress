import { Post } from '@/domain';
import { truncate } from '@/extension';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: Post;
};

export const ModePostPreview: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <Link as={`/posts/${post.slug}`} href={`/posts/${post.slug}`}>
      <div className='grid grid-cols-5 gap-4 lg:my-1 my-3'>
        <div className='col-span-3 m-auto'>
          <div
            className='text-left text-gray-600 text-xl font-bold break-all my-auto'
            dangerouslySetInnerHTML={{ __html: truncate(post.title, 80) }}
          />
        </div>
        <div className='col-span-2 m-auto'>
          <Image
            className='rounded object-contain'
            src={post.featuredImageUrl.url}
            alt={post.featuredImageUrl.alt}
            loading='lazy'
            width={100}
            height={120}
          />
        </div>
      </div>
    </Link>
  );
};
