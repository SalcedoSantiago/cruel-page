import React from 'react'
import { Container, Stack, Box, Image, Flex, Text, Heading, FormControl, FormLabel, Input, Button, Select, SimpleGrid, chakra, GridItem } from '@chakra-ui/react'

function Form() {
    return (
        <Box pt={'120px'} pb={'30px'}>
            <Heading
                textAlign={'center'}
            >Queres hacer una reserva?</Heading>
            <chakra.form
                method="POST"
                shadow="base"
                overflow={"hidden"}
            >
                <Stack
                    px={4}
                    py={5}
                    bg="#141517"
                    spacing={6}
                >
                    <SimpleGrid columns={6} spacing={6}>
                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="first_name"
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
                            >
                                A nombre de:
                            </FormLabel>
                            <Input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                mt={1}
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={6}>
                            <FormLabel
                                htmlFor="email_address"
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
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
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={6}>
                            <FormLabel
                                htmlFor="hora"
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
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
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="cant_person"
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
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
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
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
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
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
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="email"
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                    color: "gray.50",
                                }}
                            >
                                Email de contacto
                            </FormLabel>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                mt={1}
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                            />
                        </FormControl>
                    </SimpleGrid>
                </Stack>
                <Box
                    px={{
                        base: 4,
                        sm: 6,
                    }}
                    py={3}
                    bg="121212"
                    textAlign="center"
                >
                    <Button
                        type="submit"
                        colorScheme="brand"
                        _focus={{
                            shadow: "",
                        }}
                        fontWeight="md"
                    >
                        Enviar
                    </Button>
                </Box>
            </chakra.form>
        </Box>
    )
}

export default Form
