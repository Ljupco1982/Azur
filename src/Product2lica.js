import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url:
      'https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/131816554_1305302023170822_7013123363992804051_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=lv2nfSl1p84AX_NhWFp&_nc_ht=scontent.fskp2-1.fna&oh=b0ac74cf47268012f6f899f777e0c93b&oe=601FAF9F',

    title: (
      <div className='product__text'>
        <Link className='linnk'>lesnik/belo</Link>
      </div>
    ),
    width: '100%',
  },
  {
    url:
      'https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/131920194_1306766196357738_2524701460796854276_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ZkYU8zwmA3QAX9Bq9eY&_nc_ht=scontent.fskp2-1.fna&oh=d19af4b3741940267bf097d79f1a5b2f&oe=601F2B29',
    title: (
      <div className='product__text'>
        <Link className='linnk'>kafe/belo</Link>
      </div>
    ),
    width: '100%',
  },
  {
    url:
      'https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/136961744_1319785358389155_5512403477233962853_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=G8AOznvNUl8AX9irjyx&_nc_ht=scontent.fskp2-1.fna&oh=6d7a3116dbb6c4b6085bea45de24f3bb&oe=601DA9E9',
    title: (
      <div className='product__text'>
        <Link className='linnk'>crno/belo</Link>
      </div>
    ),
    width: '100%',
  },

  {
    url:
      'https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/131892457_1305196369848054_7177486067058876322_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=wUwWiHyo9UwAX-SblW3&_nc_ht=scontent.fskp2-1.fna&oh=2d70e770c37d11fc4f33be125d1e6f77&oe=601F9F6B',
    title: (
      <div className='product__text'>
        <Link className='linnk'>sivo/belo</Link>
      </div>
    ),
    width: '100%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 283,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.05,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'orange',
  },
  imageSrc: {
    margin: '10px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component='span'
              variant='subtitle1'
              color='inherit'
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
