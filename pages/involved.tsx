import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, CardGroup, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Involved: NextPage = () => {


    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className={styles.involvedContainer}>
                <CardGroup className={styles.involvePage}>
                    <Card className={styles.involvedtitle}>
                        <Card.Title className={styles.titlesize}>Get Involved</Card.Title>
                    </Card>
                    <div className={styles.mainBody}>
                    <CardGroup className={styles.stepGroup}>
                        <Card className={styles.step1}>
                            <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_LOGO.JPG?alt=media&token=446266ac-fc19-4481-8feb-5b62d531be5d'} 
                                    alt='' width={50} height={100}
                                    className={styles.stepImg}/>
                            <Card.Title>Prepare a sealed bag</Card.Title>
                            <Card.Text>To begin, you will need to prepare a sealed bag like Ziploc containing sanitary napkins or tampons. We recommend a 1pt Ziploc for more than fourteen menstrual supplies. You can also add a personal note to encourage and uplift the women receiving the package. Write whatever you want on the note, but remember to keep it positive and supportive.</Card.Text>
                        </Card>
                        <Card className={styles.step2}>
                            <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_LOGO.JPG?alt=media&token=446266ac-fc19-4481-8feb-5b62d531be5d'} 
                                    alt='' width={50} height={100}
                                    className={styles.stepImg}/>
                            <Card.Title>Look for a public restroom where homeless women might be present</Card.Title>
                            <Card.Text>The second step is to look for a public restroom where homeless women might be present. You can check with your local community center or homeless shelter to find out where these restrooms are located. Alternatively, you can simply look for areas where homeless individuals are known to gather, such as parks or other public spaces. </Card.Text>
                        </Card>
                        <Card className={styles.step3}>
                        <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_LOGO.JPG?alt=media&token=446266ac-fc19-4481-8feb-5b62d531be5d'} 
                                    alt='' width={50} height={100}
                                    className={styles.stepImg}/>
                            <Card.Title>Put it in a relatively clean place in the public toilet that will not disturb others</Card.Title>
                            <Card.Text>Once you have found a suitable public restroom, you can place the sealed bag in a relatively clean place that will not disturb others. You can put it in the corner or on a shelf so that it is easy to find but not in the way. Remember to be respectful of the other individuals using the restroom and to maintain their privacy.</Card.Text>
                        </Card>
                        <Card className={styles.step4}>
                        <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_LOGO.JPG?alt=media&token=446266ac-fc19-4481-8feb-5b62d531be5d'} 
                                    alt='' width={50} height={100}
                                    className={styles.stepImg}/>
                            <Card.Title>Contact us and share your story</Card.Title>
                            <Card.Text>If you want to share your experience and story of packing and donating feminine hygiene products, you can contact us. Please click on the story in the navbar. After entering the page and scrolling down to the end, we provide a form where you can leave your story to us. We would love to hear from you and share your story on our website. Your story may inspire others to take action and make a positive difference in the lives of homeless women in their communities.</Card.Text>
                            <Card.Text>By following these steps, you can help homeless women access the feminine hygiene products they need to maintain their dignity and health. Together, we can make a difference in the lives of these women and ensure that they have the necessities they need to live with dignity and respect.</Card.Text>
                        </Card>
                    </CardGroup>
                    <CardGroup className={styles.donateDescriptionGroup}>
                        <Card className={styles.donateDescription}>
                            <Card.Title>Donate to charities</Card.Title>
                            <Card.Text>We have collected a set of the related organizations’ information. If you want to donate to organizations committed to improving the menstrual poverty of homeless women, please click the button to find them.</Card.Text>
                            <Button>Charity List</Button>
                        </Card>
                    </CardGroup>
                    </div>
                    
                </CardGroup>
                </Container>
        </>
    )
}

export default Involved;