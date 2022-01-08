import React from 'react';

interface EndUserInfoProps  {
    title: string;
}

const EndUserInfoStep: React.FC<EndUserInfoProps> = ({title}) => {

    return <h1>{ title }</h1>;
};

export default EndUserInfoStep;
