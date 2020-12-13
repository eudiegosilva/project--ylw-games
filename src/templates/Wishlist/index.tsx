import BaseTemplate from 'templates/Base';
import Empty from 'components/Empty';
import GameCard, { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { Grid } from 'components/Grid';
import { HighlightProps } from 'components/Highlight';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <BaseTemplate>
    <Container>
      <Heading lineLeft>wishlist</Heading>
      {games && games.length > 0 ? (
        <Grid>
          {!!games &&
            games.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
        </Grid>
      ) : (
        <Empty
          title="your wishlist is empty!"
          description="games added to your wishlist will apperar here"
          hasLink
        />
      )}

      <Divider />
    </Container>
    <Showcase
      title="you may like this games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </BaseTemplate>
);

export default Wishlist;
