import Base from 'templates/Base';
import { Container } from 'components/Container';
import GameCard, { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import { HighlightProps } from 'components/Highlight';
import { Grid } from 'components/Grid';

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
  <Base>
    <Container>
      <Heading lineLeft>wishlist</Heading>
      <Grid>
        {!!games &&
          games.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
      </Grid>
    </Container>
    <Showcase
      title="you may like this games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
