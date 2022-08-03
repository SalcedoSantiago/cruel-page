import React, { useRef } from 'react'
import { Container, Stack, Box, Image, Flex, Text, Heading, FormControl, FormLabel, Input, Button, Select, SimpleGrid, chakra, GridItem, Divider } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';



function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('e', e);

        emailjs.sendForm('service_wkxe5se', 'template_5o4uhzv', form.current, 'QW5SbamjPVKKJE6xw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                ref={form}
                onSubmit={sendEmail}
            >
                <Stack
                    px={6}
                    py={5}
                    bg="#232427"
                    spacing={6}
                >
                    <SimpleGrid columns={6} spacing={6}>
                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="from_name"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                A nombre de
                            </FormLabel>
                            <Input
                                type="text"
                                name="from_name"
                                id="from_name"
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
                                focusBorderColor="blue"
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
                                value={1}
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                color={'primary'}
                                w="full"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (id) =>
                                        <Box as='option'
                                            color={'black'}
                                        >
                                            {id}
                                        </Box>
                                )}
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
