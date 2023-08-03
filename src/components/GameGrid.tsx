import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  let { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      {
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          padding='10px'
          spacing={3}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data.map((game) => {
            return (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            );
          })}
        </SimpleGrid>
      }
    </>
  );
};

export default GameGrid;
