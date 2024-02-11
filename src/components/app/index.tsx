import { Box, Button, Center, ChakraProvider, Circle, Input, Stack, theme } from "@chakra-ui/react";
import { useState } from "react";
import { getEightBallAnswer } from "../../utils/getEightBallAnswer";
import styles from './styles.module.scss'

function App() {
  const [question, setQuestion] = useState<string>(``)
  const [answer, setAnswer] = useState<string>(``)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => 
    setQuestion(e.currentTarget.value)


  const onClickHandler = () => {

    setAnswer(``)
    
    setIsLoading(true)

    setTimeout(() => {

      setIsLoading(false)

      setAnswer(getEightBallAnswer())

    }, 3000)

  }

  return (
    <ChakraProvider theme={theme}>
      <Center className={styles.container}>
        <Box>
          <Stack spacing={5}>
            <Circle className={styles.eightBall}>
              <Center>
                <Circle className={styles.eightBallWindow}>
                  <span className={styles.eightBallAnswer}>{answer}</span>
                </Circle>
              </Center>
            </Circle>
            <Input
              onChange={onChangeHandler}
              placeholder='Ask the eight ball a question'
              size='md'/>
            <Button
              onClick={onClickHandler}
              isLoading={isLoading}
              isDisabled={question === ``}
              loadingText='Asking eight ball...'
              colorScheme='teal'
              size={`md`}
              variant={isLoading || question === `` ? `outline` : `solid`}>
                Ask the eight ball
              </Button>
          </Stack>
        </Box>
      </Center>
    </ChakraProvider>
  )
}

export default App
