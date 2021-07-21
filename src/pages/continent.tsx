import { Flex, Image, Text, Box, SimpleGrid, Spinner } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { useQuery } from "react-query"
import { useRouter } from 'next/router'


export default function Continent() {
    const router = useRouter()
    const { continente } = router.query

    const { data, isLoading } = useQuery('continents', async () => {
        const response = await fetch("http://localhost:3000/api/continents?continente=" + continente);
        const data = await response.json();
        /*
        const continents = data.continents.map(continent => {
            return {
                id: continent.id,
                country: continent.country,
                cities: continent.cities,
                
            };
        });
        */
        return data;
    });


    return (
        <Flex
            w="100vw"
            h="100vh"
            maxWidth={1440}
            display="flex"
            direction="column"
        >
            <Header />
            <Flex
                justify="center"
            >
                <Image src={'banner_europa.svg'} />
            </Flex>
            <Flex
                direction="column"
                p={8}
            >
                <SimpleGrid
                    columns={2}
                    spacing={6}
                    p={8}
                >
                    <Box>
                        <Text
                            align="justify"
                            fontSize="sm"
                        >
                            A Europa é, por convenção um dos seis continentes do mundo
                            Compreendendo a península ocidental da Eurásia, a Europa
                            geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                            o rio Urai, o mar Cáspio, o Caucáso, e o mar Negro a Sudeste.
                        </Text>
                    </Box>

                    <Box
                        justifyContent="center"
                        textAlign="center"
                    >
                        <Text
                            fontWeight="lg"
                            fontSize="4xl"
                            color="yellow.300"
                        >
                            27
                        </Text>
                        <Text
                        >
                            cidades +100
                        </Text>
                    </Box>
                </SimpleGrid>
                <Flex
                    direction="column"
                    p={8}
                >
                    <Text fontWeight="sm" fontSize="md">Cidades +100</Text>

                    <SimpleGrid
                        columns={4}
                        spacing={4}
                        pt={6}
                    >
                        {isLoading ?
                            (<Spinner />)
                            :
                            data.continents.map(continent => {
                                return (
                                    <Box
                                        key={continent.id}
                                        h={350}

                                    >
                                        <Image src={continent.foto} boxSize={300} />
                                        <Text fontSize="small" fontWeight="bold" mt={1}>
                                            {continent.cities}
                                        </Text>
                                        <Text
                                            fontSize="smaller"
                                            fontWeight="normal"
                                        >
                                            {continent.country}
                                        </Text>



                                    </Box>

                                )
                            })
                        }
                    </SimpleGrid>
                </Flex>
            </Flex>
        </Flex>

    );
}