import emailjs from '@emailjs/browser';
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Container, Dialog, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { AlertTriangle, Check, ChevronLeft, ChevronRight, X } from 'react-feather';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { LinearGradient } from 'react-text-gradients';
import { Collapse } from '../components/common';
import './../styles/custom-css.css';

export const Home = () => {

    const form = useRef<HTMLFormElement>(null);
    const { enqueueSnackbar } = useSnackbar();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const properties = {
        prevArrow:
            <Button>
                <IconButton>
                    <ChevronLeft
                        size={48}
                        color='#FFFFFF'
                    />
                </IconButton>
            </Button>,
        nextArrow:
            <Button>
                <IconButton>
                    <ChevronRight
                        size={48}
                        color='#FFFFFF'
                    />
                </IconButton>
            </Button>
    };

    const reserve = (e: any) => {
        try {
            e.preventDefault();
            const currentForm = form.current;
            if (currentForm === null) {
                return;
            }

            emailjs.sendForm('service_svxs06j', 'template_quomcqb', currentForm, '1etwCJ1ekZtcuIevP');
            setName('');
            setPhone('');
            setType('');
            setAddress('');
            setMessage('');
            enqueueSnackbar("???????????????? ????????????????????. ?????? ?????????????? ???????????? ?????????????????? ??????????", { variant: "success" });
        } catch (error) {
            enqueueSnackbar("?????????? ????????????. ???? ?????????????????? ?????????????? ?????????? ???????????????? ????.", { variant: "error" });
        }
    };

    return (
        <Box
            sx={{
                marginTop: '60px',
                marginBottom: '100px'
            }}
        >
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <Typography
                        component='h1'
                        fontWeight={400}
                        textAlign='center'
                        maxWidth={{
                            xs: 300,
                            md: 500,
                            lg: 600
                        }}
                        sx={{
                            position: 'relative',
                            typography: {
                                xs: 'h5',
                                sx: 'h4',
                                md: 'h3',
                                lg: 'h2'
                            }
                        }}
                    >
                        <LinearGradient gradient={['to right', '#2AA2CE, #2AA2CE ,#002D70']}>
                            ?????????????? ???????????? ??????????????????
                        </LinearGradient>
                        <Box
                            component='img'
                            src='/images/leaves.png'
                            height={{
                                xs: '50px',
                                sm: '80px',
                                md: '100px',
                                lg: '125px'
                            }}
                            width='auto'
                            sx={{
                                position: 'absolute',
                                top: {
                                    xs: -20,
                                    sm: -40,
                                    md: -60,
                                },
                                right: {
                                    xs: -20,
                                    sm: -40,
                                    md: -50,
                                    lg: -100
                                },
                                rotate: '20deg'
                            }}
                        />
                    </Typography>
                </Stack>
                <Stack
                    alignItems='center'
                    marginTop={2}
                >
                    <a
                        className="play-btn"
                        onClick={() => setOpen(true)}
                    />
                    <Dialog onClose={() => setOpen(false)} open={open}>
                        <Box
                            component='video'
                            src='/images/product_introduction.mp4'
                            height='300px'
                            width='auto'
                            autoPlay
                        />
                    </Dialog>
                </Stack>
                <Grid
                    justifyContent='center'
                    spacing={5}
                    marginTop={12.5}
                    container
                >
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                    >
                        <Typography
                            variant='h6'
                            textAlign='center'
                        >
                            ???????????????? ???????? /4 ????????????/
                        </Typography>
                        <Card variant='outlined'>
                            <CardMedia
                                sx={{ height: 220 }}
                                image='/images/22.png'
                                title='???????????????? ???????? /4 ????????????/'
                            />
                            <CardContent>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ???????????? ????????:
                                                </Typography>
                                                <Typography>
                                                    95%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    PM2.5:
                                                </Typography>
                                                <Typography>
                                                    89%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????? ?????????? ????????:
                                                </Typography>
                                                <Typography>
                                                    61.7%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????? ????????????????????:
                                                </Typography>
                                                <Typography>
                                                    75%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????????? ??????????????:
                                                </Typography>
                                                <Typography>
                                                    3 ??????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ????????????:
                                                </Typography>
                                                <Typography>
                                                    4 ????????????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????????????? ??????????????:
                                                </Typography>
                                                <Typography>
                                                    2 ??????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                ?????????????? ??????????
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                ????????????????????
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Stack
                                    alignItems='center'
                                    marginTop={2}
                                >
                                    <Breadcrumbs>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ??????????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???90???000
                                            </Typography>
                                        </Stack>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ????????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???120???000
                                            </Typography>
                                        </Stack>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ??????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???150???000
                                            </Typography>
                                        </Stack>
                                    </Breadcrumbs>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                    >
                        <Typography
                            variant='h6'
                            textAlign='center'
                        >
                            PVC ????????????????
                        </Typography>
                        <Card variant='outlined'>
                            <CardMedia
                                sx={{ height: 220 }}
                                image='/images/11.png'
                                title='PVC ????????????????'
                            />
                            <CardContent>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ???????????? ????????:
                                                </Typography>
                                                <Typography>
                                                    95-99%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    PM2.5:
                                                </Typography>
                                                <Typography>
                                                    +90%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????? ?????????? ????????:
                                                </Typography>
                                                <Typography>
                                                    100%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????? ????????????????????:
                                                </Typography>
                                                <Typography>
                                                    50%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????????? ??????????????:
                                                </Typography>
                                                <Typography>
                                                    2-4 ??????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ????????????:
                                                </Typography>
                                                <Typography>
                                                    ????????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????????????? ??????????????:
                                                </Typography>
                                                <Typography>
                                                    2 ??????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <X color='#666666' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                ?????????????? ??????????
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <X color='#666666' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                ????????????????????
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Stack
                                    alignItems='center'
                                    marginTop={2}
                                >
                                    <Breadcrumbs>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ??????????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???40???000
                                            </Typography>
                                        </Stack>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ????????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???55???000
                                            </Typography>
                                        </Stack>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ??????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???70???000
                                            </Typography>
                                        </Stack>
                                    </Breadcrumbs>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                    >
                        <Typography
                            variant='h6'
                            textAlign='center'
                        >
                            ???????????? ???????? ????????????????
                        </Typography>
                        <Card variant='outlined'>
                            <CardMedia
                                sx={{ height: 220 }}
                                image='/images/33.png'
                                title='???????????? ???????? ????????????????'
                            />
                            <CardContent>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ???????????? ????????:
                                                </Typography>
                                                <Typography>
                                                    72-80%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    PM2.5:
                                                </Typography>
                                                <Typography>
                                                    70%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????? ?????????? ????????:
                                                </Typography>
                                                <Typography>
                                                    60%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????? ????????????????????:
                                                </Typography>
                                                <Typography>
                                                    70%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????????? ??????????????:
                                                </Typography>
                                                <Typography>
                                                    3-5 ??????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ????????????:
                                                </Typography>
                                                <Typography>
                                                    4 ????????????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    ?????????????????? ??????????????:
                                                </Typography>
                                                <Typography>
                                                    2 ??????
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                ?????????????? ??????????
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                ????????????????????
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Stack
                                    alignItems='center'
                                    marginTop={2}
                                >
                                    <Breadcrumbs>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ??????????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???55???000
                                            </Typography>
                                        </Stack>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ????????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???80???000
                                            </Typography>
                                        </Stack>
                                        <Stack textAlign='center'>
                                            <Typography variant='body2'>
                                                ??????
                                            </Typography>
                                            <Typography
                                                color='text.primary'
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500
                                                }}
                                            >
                                                ???100???000
                                            </Typography>
                                        </Stack>
                                    </Breadcrumbs>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Stack
                    alignItems='center'
                    marginTop={8}
                >
                    <Typography
                        textAlign='center'
                        fontStyle='italic'
                        width={{
                            xs: 400,
                            md: 500
                        }}
                    >
                        ???????????????? ?????????????? ???????????? <Typography
                            component={Link}
                            href='tel:77006822'
                            color='text.primary'
                            sx={{
                                textDecoration: 'none'
                            }}
                        >
                            77006822
                        </Typography>
                        , <Typography
                            component={Link}
                            href='tel:94016822'
                            color='text.primary'
                            sx={{
                                textDecoration: 'none'
                            }}
                        >
                            94016822
                        </Typography> ???????????? ?????? ????????????????????????.
                    </Typography>
                </Stack>
            </Container >
            <Box
                sx={{
                    marginTop: 12.5,
                    background: 'linear-gradient(30deg, #2AA2CE, #002D70)',
                    paddingY: 5
                }}
            >
                <Container maxWidth='lg'>
                    <Slide {...properties}>
                        <div className="each-slide-effect">
                            <div>
                                <Stack alignItems='center'>
                                    <Box
                                        component='img'
                                        src='/images/user2.jpg'
                                        height='64px'
                                        width='64px'
                                        sx={{
                                            borderRadius: '50%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    variant='subtitle1'
                                    textAlign='center'
                                    color='text.light'
                                    marginTop={4}
                                >
                                    ????????????????
                                </Typography>
                                <Stack alignItems='center'>
                                    <Typography
                                        variant='body2'
                                        textAlign='center'
                                        color='text.light'
                                        marginTop={1}
                                        maxWidth={{
                                            xs: 300,
                                            sm: 400,
                                            md: 500
                                        }}
                                    >
                                        ?????? ?????????????? ?????? ?????????????????? ???????????? ???????????????? ???? ???????? ???????????????? ???????????? ???????? ?????????????????????????????? ???? ???????? ?? ???????? ?????????? ???????????? ????????????. ???????????? ?????????? ???????????????? ????????????????????. ??????????????????.
                                    </Typography>
                                </Stack>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div>
                                <Stack alignItems='center'>
                                    <Box
                                        component='img'
                                        src='/images/user1.jpg'
                                        height='64px'
                                        width='64px'
                                        sx={{
                                            borderRadius: '50%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    variant='subtitle1'
                                    textAlign='center'
                                    color='text.light'
                                    marginTop={4}
                                >
                                    ??????-????????
                                </Typography>
                                <Stack alignItems='center'>
                                    <Typography
                                        variant='body2'
                                        textAlign='center'
                                        color='text.light'
                                        marginTop={1}
                                        maxWidth={{
                                            xs: 300,
                                            sm: 400,
                                            md: 500
                                        }}
                                    >
                                        ???????????? ?? ?????????????? ???????? ???????????????? ???????????????? ?????????? ?????????? ???????????? ???? ???????? ???????????????? ?????????? ???????????? ?? ?????????? ????. ??????????????????.
                                    </Typography>
                                </Stack>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div>
                                <Stack alignItems='center'>
                                    <Box
                                        component='img'
                                        src='/images/user3.jpg'
                                        height='64px'
                                        width='64px'
                                        sx={{
                                            borderRadius: '50%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    variant='subtitle1'
                                    textAlign='center'
                                    color='text.light'
                                    marginTop={4}
                                >
                                    ??????????????
                                </Typography>
                                <Stack alignItems='center'>
                                    <Typography
                                        variant='body2'
                                        textAlign='center'
                                        color='text.light'
                                        marginTop={1}
                                        maxWidth={{
                                            xs: 300,
                                            sm: 400,
                                            md: 500
                                        }}
                                    >
                                        ???????? ?????????????????? ???????????????? ?????????????? ???????????????????? ?????????????? ????????????????????. ?????? ?????????????????????? ?????????? ??????????????????. ???????? ???????????? ???????????? ????????????. ?????????? ?????? ?????????? ??????????????????.
                                    </Typography>
                                </Stack>
                            </div>
                        </div>
                    </Slide>
                </Container>
            </Box>
            <Container maxWidth='lg'>
                <Typography
                    variant='h4'
                    textAlign='center'
                    marginTop={12.5}
                    textTransform='uppercase'
                >
                    ???????????????? ??????????
                </Typography>
                <Grid
                    spacing={2}
                    marginTop={5}
                    container
                >
                    <Grid
                        xs={12}
                        md={6}
                        item
                    >
                        <Box
                            component='img'
                            src='/images/woman_air_01.png'
                            width='100%'
                            height='100%'
                            sx={{
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        item
                    >
                        <List disablePadding>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ???????? ???????????????? ???????????????? ?????????????????? ??????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ???????????? ?????????????? ???????????????????? ?????????? ?????????? ???????????????? ???????????? ???????????? ?????????? ???????????????? ??????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ?????????????????? ?????? ?????????????? ?????? ???????????? ????????, ???????????????????????? ????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ?????????????????????? ?????? ?????????? ?????????????????????? ?????????????????????? ?????????????????? ?????????? ????????????, ?????????? ???????????? ???? ???????????? ?????????????????? ???????????? ?????????? ???????????? ????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ?????? ?????????? ?????????????????? ?????????? ?????????? ???? ???????????? ?????????????????????? ?????????????? ??????????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ?????? ???????????? ?????????? ?????????? ???????????????? ????????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ???????????? ?????????? ?????????? ???? ?????????????? ?????????? ???????????????? ?????????????????????? ??????????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ?????????????????????? ?????????? ?????????????????????? ?????????? ???????????? ?????? ???????????? ??????????????????????
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    ???????????????????????? ?????????????? ?????? ???????????? ?????????????????? ???????? ??????????????????????
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Typography
                    variant='h4'
                    textAlign='center'
                    marginTop={12.5}
                    textTransform='uppercase'
                >
                    ???????????????? ????????????, ??????????????
                </Typography>
                <Stack
                    spacing={1}
                    marginTop={5}
                >
                    <Collapse
                        summary="?????????? ?????????????? ???????????? ?????????? ???????????? ?????"
                        details={
                            <Box>
                                <ul>
                                    <li>
                                        ?????????????????? /???????????? ?????????????? ??????????????????/.
                                    </li>
                                    <li>
                                        ???????????????????? /???????????? ?????????????? ??????????????????/.
                                    </li>
                                    <li>
                                        ???????????????? ???????????? ?????????? /???????????????? ???????????????? ?????????????? ?????????????????????? ??????????????????, ?????????????????? ?????????????? ????????????????/.
                                    </li>
                                </ul>
                                ???????????? ???????????????????????? ???????????? ?????????????? ?????? ???? ???????? ???????????????????????? ???????????????????????? ?????????????? ???????????? ???????????????????????? ??????????.
                            </Box>
                        }
                    />
                    <Collapse
                        summary="???????????????????????? ?????????? ???????????? ?????????????? ?????"
                        details={
                            <ul>
                                <li>
                                    ???????????????? ?????????? ???????????? ???????? 24 ???????????? ?????????? ???????????????????????????? ?????????????????? ?????????????????????? ???????????? ?????????????? ????????.
                                </li>
                                <li>
                                    ?????????????? ?????????? ???????????? ???????? 24-48 ???????????? ?????????? ???????????? ?????????????????????? ??????????????????????.
                                </li>
                            </ul>
                        }
                    />
                    <Collapse
                        summary="?????????? ???????? ???????????? ?????? ???????? ?????"
                        details={
                            <ul>
                                <li>
                                    ?????????????????? ???????? ???????????? ???????????? ???????????? ???????? ???????????? ???????????? ???????????? ???????????????????? ???? ???????? ????????.
                                </li>
                                <li>
                                    ?????????????????? ?????????? ???????????????????????? ?????????????????? ???????? ????????????.
                                </li>
                                <li>
                                    ?????????? ???????? ???????????? ???????????? ?????????? ????????.
                                </li>
                            </ul>
                        }
                    />
                    <Collapse
                        summary="?????????????????? ????????????"
                        details={
                            <ul>
                                <li>
                                    ???????????????????? 20% ???????????????? ???????????????? ??????????????????????.
                                </li>
                                <li>
                                    ?????????????? ???????? ???????????????????? 48 ???????????? ?????????? ???????????????? ???????????? ?????????????????? 20% ?????????????? ???????????????? ?????????????? ????????????????.
                                </li>
                            </ul>
                        }
                    />
                    <Collapse
                        summary="???????????? ??????????????????"
                        details="???????????? ?????????? ?????????????? ?????????????????????? ???????????? ???????????? ???????????????????? ?????????????????? ???????????? ???????????????????????? ?????????? ????????./??????????????????/"
                    />
                    <Collapse
                        summary="?????????????? ?????????????? ?????????????????? ?????????"
                        details="?????????????????????? ?????????? ???? ???????? ???????????????????? ?????????????? ????????????????. ???????????????????????? ?????????????? ?????????? ???????????? ?????????? ???????????? ?????????????? ???????????? ?????????????????? ?????????????? ????????????????."
                    />
                </Stack>
                <Typography
                    variant='h4'
                    textAlign='center'
                    marginTop={12.5}
                    textTransform='uppercase'
                >
                    ???????????????? ????????
                </Typography>
                <Grid
                    justifyContent='center'
                    container
                    marginTop={5}
                >
                    <Grid
                        xs={10}
                        md={8}
                        lg={6}
                        item
                    >
                        <form
                            ref={form}
                            onSubmit={reserve}
                        >
                            <Grid
                                spacing={2}
                                container
                            >
                                <Grid
                                    xs={6}
                                    item
                                >
                                    <TextField
                                        name='name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        label="??????"
                                        variant="standard"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={6}
                                    item
                                >
                                    <TextField
                                        name='phone'
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        label="???????????? ????????????"
                                        variant="standard"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={6}
                                    item
                                >
                                    <TextField
                                        name='email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        label="??-????????"
                                        variant="standard"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={6}
                                    item
                                >
                                    <TextField
                                        name='type'
                                        value={type}
                                        onChange={e => setType(e.target.value)}
                                        label="??????????"
                                        variant="standard"
                                        fullWidth
                                        required
                                        select
                                    >
                                        <MenuItem key='personal' value='personal'>
                                            ???????? ??????
                                        </MenuItem>
                                        <MenuItem key='business' value='organization'>
                                            ??????????????????????
                                        </MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                >
                                    <TextField
                                        name='address'
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        label="????????"
                                        variant="standard"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                >
                                    <TextField
                                        name='message'
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        label="?????????????????????? ?????????? ???????????? ??????"
                                        variant="standard"
                                        rows={4}
                                        multiline
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                        disableElevation
                                        fullWidth
                                    >
                                        ????????????
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};