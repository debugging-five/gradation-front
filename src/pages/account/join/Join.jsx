import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SocialJoin from './SocialJoin';
import NormalJoin from './NormalJoin';

const Join = () => {
  
  const [searchParams] = useSearchParams()
  const provider = searchParams.get("provider");
  const email = searchParams.get("email");

  // 소셜 로그인 한 사용자
  if(provider && email){
    return <SocialJoin provider={provider} email={email} />
  }else {
    return <NormalJoin />
  }
};

export default Join;