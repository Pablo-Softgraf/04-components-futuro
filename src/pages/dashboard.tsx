import { Flex, Input, Button, Stack } from "@chakra-ui/react";

export default function dashboard() {
    return (
        <Flex
            w="100vw"
            h="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                as="form"
                w="100%"
                maxWidth="360"
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column"
            >
                <Stack spacing='4'>
                    <Input
                        name="email"
                        type="email"
                        focusBorderColor="pink.500"
                        bgColor="gray.900"
                        variant="filled"
                        size="lg"
                        _hover={{
                            bgColor: 'gray.900'
                        }}
                    />
                    <Input name="password" type="password" />

                    <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}
