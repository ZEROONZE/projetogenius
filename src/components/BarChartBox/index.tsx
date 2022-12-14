import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
   
} from 'recharts';


import { 
    Container,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend,
}  from './styles';

interface IBarChartProps {
    title: string;
    data: {
        name: string;
      
        percent: number;
        color: string
    }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => (
        <Container>
            <SideLeft>
                <h2>{title}</h2>

                <LegendContainer>
                    {
                        data.map((indicator) => (
                            <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                            </Legend>  
                        ))              
                    }
                </LegendContainer>
            </SideLeft>
            

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>                    
                        <Bar dataKey="percent" >
                            {
                                data.map((indicator) => (
                                    <Cell 
                                        key={indicator.name}
                                        fill={indicator.color}
                                        cursor="pointer"    
                                    />
                                ))
                            }
                        </Bar>   
                        
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>    
            
               
        </Container>
    );

export default BarChartBox;