type RatingType = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export const formatRating = (rating: RatingType) =>
  `${rating.replace('BR', '')}+`;

export const formatGenres = (genres: string[]) => genres.join(' / ');
