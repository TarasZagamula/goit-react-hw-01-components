import {StatBox, StatLabel, StatList, StatListItem, StatPercentage, StatTitle} from './statistics.styled';
import {randomColor} from '../randomColor/random-color';
import PropTypes from "prop-types";

export const Statistic = ({title, stats}) => {
    return (
        <StatBox>
            <StatTitle>{title}</StatTitle>
            <StatList>
               {stats.map(data => (
                <StatListItem key={data.id} randomColor={randomColor}>
                  <StatLabel>{data.label}</StatLabel>
                  <StatPercentage>{data.percentage}%</StatPercentage>  
                </StatListItem>
               ))}
            </StatList>
        </StatBox>
    )
};

 Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
 }