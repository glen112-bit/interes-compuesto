import { Formik, Form } from 'formik'
import Input from './components/Input'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`
const Section = styled.section`
    background-color: #eee;
    border-top: solid 2px palevioletred;
    padding: 20px 25px;
    width: 500px;
    box-shadow: 0px 2px 5px rgb(0, 0, 0, 0.6);
`
function App() {
    const handleSubmit = () => {}
    return (
        <Container>
            <Section>
                <Formik
                    initialValues={{
                        deposit: '',
                        contribution: '',
                        years: '',
                        rate: '',
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Input name="deposit" label="Deposito Inicial" />
                        <Input name="contribution" label="Contribucion Anual" />
                        <Input name="years" label="Años" />
                        <Input name="Rate" label="Interes Estimado" />
                    </Form>
                </Formik>
            </Section>
        </Container>
    )
}

export default App
