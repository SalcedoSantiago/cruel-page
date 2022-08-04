import React, { useRef } from 'react'
import { Container, Stack, Box, Image, Flex, Text, Heading, FormControl, FormLabel, Input, Button, Select, SimpleGrid, chakra, GridItem, Divider } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';



function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const currentForm = e.target;
        const name = currentForm.querySelector('#name_reserva').value;
        const dia = currentForm.querySelector('#dia_reserva').value.split('-').slice(1); // sanitizar
        const hora = currentForm.querySelector('#hora_reserva').value;
        const cantPersonas = currentForm.querySelector('#cant_person').value;
        const email = currentForm.querySelector('#email_reserva').value;
        const numeroTel = currentForm.querySelector('#tel_reserva').value;

        window.open(`https://api.whatsapp.com/send/?phone=542216401592&text=Me+gustaria+hacer+una+reserva+para+el+${dia[1] + '/' + dia[0]}+a+las+${hora}+para+${cantPersonas}+personas.%0AA+nombre+de+${name}.%0Aemail%3A+${email}%0Atelefono%3A+${numeroTel}&type=phone_number&app_absent=0`, '_blank');

    };

    return (
        <Box pt={'60px'} pb={'30px'} id="reserva">
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
                                htmlFor="name_reserva"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                A nombre de
                            </FormLabel>
                            <Input
                                type="text"
                                name="name_reserva"
                                id="name_reserva"
                                autoComplete="given-name"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                w="full"
                                required
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={4}>
                            <FormLabel
                                htmlFor="dia_reserva"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Dia
                            </FormLabel>
                            <Input
                                type="date"
                                min="2022-07-31"
                                name="dia_reserva"
                                id="dia_reserva"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                required
                                w="full"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={8}>
                            <FormLabel
                                htmlFor="hora_reserva"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Hora
                            </FormLabel>
                            <Input
                                type="time"
                                name="hora_reserva"
                                id="hora_reserva"
                                mt={1}
                                focusBorderColor="blue"
                                size="md"
                                rounded="none"
                                required
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
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                color={'primary'}
                                required
                                w="full"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (id) =>
                                        <Box as='option'
                                            key={id}
                                            color={'black'}
                                        >
                                            {id}
                                        </Box>
                                )}
                            </Select>
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="tel_reserva"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Telefono
                            </FormLabel>
                            <Input
                                type="tel"
                                name="tel_reserva"
                                id="tel_reserva"
                                autoComplete="street-address"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                required
                                w="full"
                            />
                        </FormControl>

                        <FormControl as={GridItem} colSpan={12}>
                            <FormLabel
                                htmlFor="email_reserva"
                                fontSize="16px"
                                color="#ffffff"
                            >
                                Email de contacto
                            </FormLabel>
                            <Input
                                type="email"
                                name="email_reserva"
                                id="email_reserva"
                                mt={1}
                                focusBorderColor="brand.400"
                                size="md"
                                rounded="none"
                                required
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
