import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { Grid, Box } from '@site/src/components/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const GuideItems = [
  {
    title: <>Windows Azure Only</>,
    href: '/integration-guides/azure-ad',
    category: 'desktop-login',
    description: (
      <>
        Windows Azure AD Join Machines
      </>
    )
  },
  {
    title: <>Windows Hybrid</>,
    href: '/integration-guides/azure-ad-hybrid',
    category: 'desktop-login',
    description: (
      <>
        Learn how ...
      </>
    )
  },
  {
    title: <>Windows Active Directory</>,
    href: '/integration-guides/active-directory-on-premises',
    category: 'desktop-login',
    description: (
      <>
        Learn how ...
      </>
    )
  },
]

const GuideCategories = [
  {
    label: 'mdm',
    title: 'Mobile Device Management',
    description: <>Learn about Beyond Identity's many features and capabilities in a guided experienced.</>
  },
  {
    label: 'sso',
    title: 'SSO',
    description: <>...</>
  },
  {
    label: 'scim',
    title: 'SCIM',
    description: <>..</>
  },
  {
    label: 'dev-ops',
    title: 'DevOps',
    description: <>...</>
  },
  {
    label: 'deskotp-login',
    title: 'Desktop Login',
    description: <>...</>
  },
  {
    label: 'edr',
    title: 'EDR',
    description: <>...</>
  },
  {
    label: 'siem',
    title: 'SIEM',
    description: <>...</>
  },
  {
    label: 'vpn',
    title: 'VPN',
    description: <>...</>
  },
  {
    label: 'wifi',
    title: 'WiFi',
    description: <>Explore...</>
  },
]

export default function Guides() {  
  let itemsFiltered = GuideItems;
  let categoriesFiltered = GuideCategories;

  const [searchTerm] = useState(null);

  if (searchTerm) {
    let searchTerms = searchTerm.split(" ");
    itemsFiltered = itemsFiltered.filter(item => {
      let content = `${item.title.props.children.toLowerCase()} ${item.category.toLowerCase()}`;
      return searchTerms.every(term => {
        return content.includes(term.toLowerCase())
      })
    })

    if (itemsFiltered.length) {
      categoriesFiltered = GuideCategories.filter(category => {
        let match = itemsFiltered.filter(item => {
          return category.label.includes(item.category)
        })

        if (match.length) {
          return true
        }
      })
    } else {
      categoriesFiltered = []
    }
  }

  return (


<main className="container relative">
          {categoriesFiltered.map((props, idx) => (
            <>
              <div key={idx}>
                <div>
                  <h3>{props.title}</h3>
                  <p>{props.description}</p>
                </div>
              </div>
              <main className="container">
              <Grid columns="3" className="mb-24" key={idx}>
              
              {itemsFiltered.filter(item => item.category.includes(props.label)).map((props, idx) => (
                 <Card sx={{ maxWidth: 345, fontFamily: 'Overpass', }} key={idx} raised='true'>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                      {props.title} 
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     {props.description}
                   </Typography>
                 </CardContent>
                 <CardActions>
                 <CardActionArea href={props.href}>
                   <Button size="small">Learn More</Button>
                   </CardActionArea>
                 </CardActions>
               </Card>
                   
                ))}
              
              </Grid>
              </main>
            </>
          ))}

        </main>


  );
}
