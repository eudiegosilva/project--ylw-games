import { DownloadIcon } from 'assets/icons';

import * as s from './styles';

export type PaymentInfoProps = {
  number: string;
  flag: string;
  image: string;
  purchaseDate: string;
};

export type GameItemProps = {
  image: string;
  title: string;
  price: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};

const GameItem = ({
  image,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
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

    {!!paymentInfo && (
      <s.PaymentContentWrapper>
        <p>{paymentInfo.purchaseDate}</p>
        <s.PaymentInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.image} alt={paymentInfo.flag} />
        </s.PaymentInfo>
      </s.PaymentContentWrapper>
    )}
  </s.Wrapper>
);

export default GameItem;
