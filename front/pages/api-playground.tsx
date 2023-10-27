import createApolloClient from '@/apollo.client';
import { gql } from '@apollo/client';

export default function ApiPlayground() {

  const testHandle = async () => {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query Users {
          user(id: "1") {
            id,
            creationDate
          }
        }
      `,
    });

    console.log('test - user id', data.user.id);
    
  }

  return <>
    <button onClick={testHandle}>Test api</button>
  </>
}