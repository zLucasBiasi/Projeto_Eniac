import { Button } from "@/components";
import { Container } from "@/styles/global";

import { useState } from "react";
import { Form, Input, Select, Textarea, Title } from "./components";

import * as S from "./styles";

export const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [assunto, setAssunto] = useState("");
  const [cidadeEstado, setCidadeEstado] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSendWhatsapp = () => {
    const message = `Olá, meu nome é ${nome}. Meu email é ${email}. Meu whatsapp para contato é ${whatsapp}. 
      Gostaria de cadastrar um(a) ${selectedOption} com as seguintes informações:
      - Assunto: ${assunto}
      - Cidade/Estado: ${cidadeEstado}
      - Mensagem adicional: ${mensagem}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511959265463?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <Container>
        <Form>
          <Title>Contato</Title>
          <Input
            type="text"
            label="Nome"
            rule="nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="text"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="text"
            label="Whatsapp para contato"
            rule="com DDD"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <Select
            label="O que deseja cadastrar?"
            options={["CPF", "CNPJ"]}
            value={selectedOption}
            setValue={(option) => setSelectedOption(option)}
          />

          <Input
            type="text"
            label="Assunto"
            rule="Apenas texto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
          <Input
            type="text"
            label="Cidade / Estado"
            rule="não esqueça de informar os dois!"
            value={cidadeEstado}
            onChange={(e) => setCidadeEstado(e.target.value)}
          />

          <Textarea
            label="Mensagem adicional"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          <S.ContainerButton>
            <Button onClick={handleSendWhatsapp}>Enviar</Button>
          </S.ContainerButton>
        </Form>
      </Container>
    </>
  );
};
