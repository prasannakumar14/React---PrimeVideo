import MoviesSlider from '../MoviesSlider'

import {
  PrimeVideoContainer,
  PrimeVideoHeading,
  PrimeVideoImage,
  PrimeVideoSlides,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  return (
    <PrimeVideoContainer>
      <PrimeVideoImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <PrimeVideoSlides>
        <PrimeVideoHeading>Action Movies</PrimeVideoHeading>
        <MoviesSlider movies={actionMovies} />
        <PrimeVideoHeading>Comedy Movies</PrimeVideoHeading>
        <MoviesSlider movies={comedyMovies} />
      </PrimeVideoSlides>
    </PrimeVideoContainer>
  )
}

export default PrimeVideo
