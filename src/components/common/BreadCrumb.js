import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function BreadCrumb(props) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href={props.homeLink} >
      {props.name}
    </Link>,
    <Typography key="3" color="text.primary">
      {props.comp}
    </Typography>,
  ];

  return (
    <Stack spacing={2} padding={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}