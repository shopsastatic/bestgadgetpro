'use client'

import { FC } from 'react'
import PageContainer from '../Layouts/PageContainer';
export interface SingleContentProps {
    post: any
}

const SingleContent: FC<SingleContentProps> = ({ post }) => {

    // Get post data
    const {
        content,
        status,
        date,
        contentEggData,
        numberOfToplist
    } = post as any

    const amzData = JSON.parse(contentEggData) as any

    let NoT = numberOfToplist?.numberOfToplist as any
    if (!NoT) {
        NoT = 10
    }

    return (
        <PageContainer>
            s
        </PageContainer>
    );
};

export default SingleContent;
