import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Col, Row, Form, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lobby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          Log In
        </div>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="User"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Password"/>
              </Form.Group>
              <Button variant="primary" className={styles.loginButton}>Login</Button>
            </Form>
          </Col>
        </Row>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;
