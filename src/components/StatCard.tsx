// component
import { Card, CardContent, Typography } from '@mui/material';

interface StatCardProps {
  backgroundColor?: string;
  header: string;
  label: string;
  labelColor?: 'primary' | 'secondary' | 'error';
  sublabel: string;
  sublabelColor?: 'primary' | 'secondary' | 'error';
}

export const StatCard = ({ 
  header, 
  label, 
  labelColor = 'primary', 
  sublabel, 
  sublabelColor = 'secondary', 
  backgroundColor = "#fff", 
  ...props}: StatCardProps) => {

  return (
   <Card sx={{ minWidth: 275, backgroundColor: backgroundColor }}  {...props}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color={labelColor} gutterBottom>
            {header}
        </Typography>
        <Typography variant="h5" component="div">
            {label}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color={sublabelColor}>
          {sublabel}
        </Typography>
        </CardContent>
   </Card>
  )
}
