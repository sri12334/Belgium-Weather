import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types'
import Day from './Day';
import organizeWeather from '../utils/organizeWeather';

const Weather = ({weather}) => {
    const organiZedWeather = organizeWeather(weather) ;
    console.log(organiZedWeather);
  return (
    <Container>
        {Object.entries(organiZedWeather).map(([day, dayWeather], index) => (
            <Box key={index} mb={4}>
                <Day day={day} dayWeather={dayWeather} />
            </Box>
        ))}
        
        
    </Container>
  )
}

Weather.propTypes = {
    weather: PropTypes.object.isRequired
}

export default Weather