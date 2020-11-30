import { Download as DownloadIcon } from '@styled-icons/feather/Download';

import * as s from './styles';

export type GameItemProps = {
  image: string;
  title: string;
  price: string;
  downloadLink?: string;
};

const GameItem = ({ image, title, price, downloadLink }: GameItemProps) => (
  <s.Wrapper>
    <s.ContentWrapper>
      <s.ImageWrapper>
        <img src={image} alt={title} />
      </s.ImageWrapper>

      <s.InfoWrapper>
        <s.GameTitle>
          {title}
          {!!downloadLink && (
            <s.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`get ${title} here`}
            >
              <DownloadIcon />
            </s.DownloadLink>
          )}
        </s.GameTitle>
        <s.GamePrice>{price}</s.GamePrice>
      </s.InfoWrapper>
    </s.ContentWrapper>
  </s.Wrapper>
);

export default GameItem;
