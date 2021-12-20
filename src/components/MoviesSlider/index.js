import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {movies} = props
  return (
    <Slider {...settings}>
      {movies.map(each => (
        <MovieItem key={each.id} movies={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
