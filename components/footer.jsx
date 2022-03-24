import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

 const Footer = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      width: '100%',
      pt: 5,
      pb: 2,
      px: 2,
      mt: 5,
      mb: 0,
      mx: 0,
      background: "linear-gradient(217deg, rgba(57,81,133, 1), rgba(41,41,41, .8) 50.71%)",
    }}>
      <Grid 
        spacing={2}
        container 
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs>
          <Box sx={{
            px: 2,
            py: 2,
          }}>
            <Link href='/' passHref>
              <a>
                <Image 
                  src="/logo/footer-logo.svg" 
                  width={192} height={63} 
                  alt='setsuna-logo'
                  layout='intrinsic'
                />
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{
            textAlign: 'center'
          }}>
            <Link href='https://twitter.com/siino_webdev' passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image 
                src="/icons/twitter-logo.svg" 
                width={35} height={35}f
                alt="twitter-logo"
                layout='intrinsic'
              />
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs>
          <Box>
            <Grid 
              spacing={1}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Image
                src='/icons/nextjs-logo.svg'
                width={60}
                height={36}
                alt='nextjs-logo'
                layout='intrinsic'
                />
              </Grid>
              <Grid item>
                <Image
                src='/icons/materialui-logo.svg'
                width={26}
                height={26}
                alt='materialui-logo'
                layout='intrinsic'
                />
              </Grid>
              <Grid item>
              <Image
                src='/icons/microcms-logo.svg'
                width={110}
                height={22}
                alt='microcms-logo'
                layout='intrinsic'
                />
              </Grid>
              <Grid item>
              <Image
                src='/icons/vercel-logo.svg'
                width={89}
                height={20}
                alt='vercel-logo'
                layout='intrinsic'
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


export default Footer