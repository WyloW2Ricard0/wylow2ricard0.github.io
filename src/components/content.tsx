import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

interface ContentProps {
    items: Array<{
        icon: React.ReactNode;
        title: string;
        description: string;
    }>;
    component?: React.ElementType;
    columns?: number;
    layout?: 'icon-top' | 'icon-left';
}

export default function Content({ 
    items, 
    component = Box,
    columns = 3,
    layout = 'icon-left'
}: ContentProps) {
    const gridBreakpoints = {
        xs: 12,
        sm: columns === 1 ? 12 : columns === 2 ? 6 : 6,
        md: 12 / columns,
    };
    
    return (
    <Grid container spacing={2}>
        {items.map((item, index) => (
            <Grid item key={index} {...gridBreakpoints}>
                <Stack
                    component={component}
                    p={2}
                    sx={{ height: '100%' }}
                >
                    {layout === 'icon-left' ? ( <>
                        <Box
                            flexDirection="row"
                            alignItems="center"
                            display="flex"
                            m={1} 
                            color="primary.main"
                        >
                            {item.icon}
                            <Typography variant="h6" mx={1}>
                                {item.title}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </> ) : ( <>
                        {item.icon}
                        <div>
                            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2">
                                {item.description}
                            </Typography>
                        </div>
                    </> )}
                </Stack>
            </Grid>
        ))}
    </Grid>
    );
}