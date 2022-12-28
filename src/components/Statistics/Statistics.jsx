import PropTypes from 'prop-types';

import { Title } from 'components/Statistics/Title';
import { Card } from 'components/Statistics/Card';
import { StatisticsStyle, StatisticsList } from './Statistics.styled';


export const Statistics = ({ stats, title } ) => {
    return (
      <StatisticsStyle>
            {title && <Title title={title}/>}
            <StatisticsList>
                {stats.map(stat => (<Card
                    key={stat.id} label={stat.label}
                    percentage={stat.percentage}></Card>))}
            </StatisticsList>
      </StatisticsStyle>
  );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
    
}