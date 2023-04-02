import { Button } from "@/components";
import { Container } from "@/styles/global";

import { useState } from "react";
import { Form, Input, Select, Textarea, Title } from "./components";

import * as S from "./styles";

export const FormTemplate = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <Container>
        <Form>
          <Title>Contato</Title>
          <Input type="text" label="Nome" rule="nome completo" />
          <Input type="text" label="E-mail" />

          <Input type="text" label="Whatsapp para contato" rule="com DDD" />

          <Select
            label="O que deseja cadastrar?"
            options={["CPF", "CNPJ"]}
            value={selectedOption}
            setValue={(option) => setSelectedOption(option)}
          />

          <Input type="text" label="Assunto" rule="Apenas texto" />
          <Input
            type="text"
            label="Cidade / Estado"
            rule="não esqueça de informar os dois!"
          />

          <Textarea label="Mensagem adicional" />
          <S.ContainerButton>
            <Button type="submit">Enviar</Button>
          </S.ContainerButton>
        </Form>
      </Container>
    </>
  );
};
