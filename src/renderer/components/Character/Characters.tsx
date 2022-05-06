/* eslint-disable prettier/prettier */
import { gql, useQuery } from '@apollo/client';
import { Box } from '@mui/system';
import MiniDrawer from '../TestComp';

type Character = {
  name: string;
  id: number;
};

const PEOPLE = gql`
  query {
    characters {
      results {
        name
        id
      }
    }
  }
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(PEOPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
    <MiniDrawer>
      <div>{
        data &&
        data.characters.results.map((character: Character) => {
          return <h3 key={character.id}>{character.name}</h3>;
        })}
     </div>
     </MiniDrawer>
    </div>
  );
}
