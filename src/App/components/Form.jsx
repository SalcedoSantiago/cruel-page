import React from 'react'
import { Container, Stack, Box, Image, Flex, Text, Heading, FormControl, FormLabel, Input, Button, Select, SimpleGrid, chakra, GridItem, Divider } from '@chakra-ui/react'

function Form() {
    return (
        <Box pt={'60px'} pb={'30px'}>
            <Flex
                justifyContent={'center'}
                align={'center'}
                flexWrap='wrap'
            >
                <Divider w="160px" />
                <Heading
                    textAlign={'center'}
                    color={'#ffffff'}
                    py={3}
                    w="100%"
                    fontSize="22px"
                    fontWeight={300}
                >¿Querés hacer una reserva?</Heading>
            </Flex>

            <chakra.form
                method="POST"
                overflow={"hidden"}
            >
                <Stack
                    px={4}
                    py={5}
                    bg="#232427"
                    spacing={6}
                >
                    <SimpleGrid columns={6} spacing={6}>
                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="first_name"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                A nombre de
                            </FormLabel>
                            <Input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={4}>
                            <FormLabel
                                htmlFor="email_address"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Dia
                            </FormLabel>
                            <Input
                                type="date"
                                min="2022-07-31"
                                name="email_address"
                                id="email_address"
                                autoComplete="email"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={8}>
                            <FormLabel
                                htmlFor="hora"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Hora
                            </FormLabel>
                            <Input
                                type="time"
                                name="hora"
                                id="hora"
                                autoComplete="email"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="cant_person"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                ¿Para cuantas personas?
                            </FormLabel>
                            <Select
                                id="cant_person"
                                name="cant_person"
                                autoComplete="1"
                                placeholder="Select option"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Select>
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="telephone"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Telefono
                            </FormLabel>
                            <Input
                                type="tel"
                                name="telephone"
                                id="telephone"
                                autoComplete="street-address"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="email"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Email de contacto
                            </FormLabel>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                            />
                        </FormControl>
                    </SimpleGrid>
                </Stack>
                <Box
                    px={3}
                    py={3}
                    textAlign="center"
                >
                    <Button
                        type="submit"
                        colorScheme="brand"
                        variant='outline'
                        w="100%"
                        color="#ffffff"
                    >
                        Enviar
                    </Button>
                </Box>
            </chakra.form>
        </Box>
    )
}

export default Form
