'use client';
import * as React from 'react';
import { SignInPage } from '@toolpad/core/SignInPage';
import type { Session } from '@toolpad/core/AppProvider';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../SessionContext';
import API from './api/Url.js';
import axios from 'axios';
import { c } from 'vite/dist/node/types.d-aGj9QkWt';

const fakeAsyncGetSession = async (formData: any): Promise<Session> => {


  
  return new Promise((resolve, reject) => {
  const UserLogin: { username: string, password: string, user_type_id: string,user_online
:boolean, token:string } = { username: '', password: '', user_type_id: '',user_online:false, token:'' };

    setTimeout(() => {

   
      if (formData.get('password') != '') {
        const data= {
          username:formData.get('email'),
                  password:formData.get('password')
        };
  
          
     axios.post('/users/login',data)

              .then(function (response) {
                console.log(response.data);


   if(response.data.status == true){

   UserLogin.token = response.data.token;


      }

    }
    )
      
             .catch(function (error) {
                console.log(error);
              });  


        resolve({
          
          user: {
            name:UserLogin.token,
            email: formData.get('email') || '',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },

        });


      }



      reject(new Error('Incorrect credentials.'));


    }, 1000);



  });
};

export default function SignIn() {

  const { setSession } = useSession();
  const navigate = useNavigate();
 


  return (


    <SignInPage

      providers={[{ id: 'credentials', name: 'Credentials' }]}
      

      signIn={async (provider, formData, callbackUrl) => {


        try {


          const session = await fakeAsyncGetSession(formData);
          console.log(session);

          if (session) {


            setSession(session);

            navigate(callbackUrl || '/', { replace: true });
          

            return {


            };

          }

        } catch (error) {

          return { error: error instanceof Error ? error.message : 'An error occurred' };

        }
        return {


        };
      }}

    />
  );
}
