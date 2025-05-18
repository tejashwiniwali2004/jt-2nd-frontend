import React,{ Childern } from 'react';

const User = ({name,email,children}) => {
  
  return (

    <div>
      <p>name:{name}</p>
      <p>age:23</p>
      <p>email:{email}</p>
      <p>mobile:{9786543567}</p>
      {children}
    </div>

    
  );
};

export default User