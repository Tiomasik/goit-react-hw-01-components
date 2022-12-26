import PropTypes from 'prop-types';

import { Title } from 'components/Statistics/Title/Title';
import { Card } from 'components/Statistics/Card/Card';
import { StatisticsStyle, BorderStyle } from './Statistics.styled';


export const Statistics = ({stats}) => {  
    return (
      <StatisticsStyle>
            <Title title="Upload stats" />
            <BorderStyle>
                {stats.map(stat => (<Card
                    key={stat.id} label={stat.label}
                    percentage={stat.percentage}></Card>))}
            </BorderStyle>
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