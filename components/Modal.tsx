import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

function Modal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    phone: "",
    email: "",
  });

  function handleChange({ target: input }: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [input.id]: input.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));

    onClose();
  }

  return isOpen ? (
    <Container>
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <label htmlFor="name">Ditt namn</label>
          <input id="name" value={formData.name} onChange={handleChange} />
        </Fieldset>
        <Fieldset>
          <label htmlFor="phone">Telefon</label>
          <input id="phone" value={formData.phone} onChange={handleChange} />
        </Fieldset>
        <Fieldset>
          <label htmlFor="email">E-post</label>
          <input id="email" value={formData.email} onChange={handleChange} />
        </Fieldset>
        <button>Börja buda!</button>
      </form>
      <button onClick={onClose}>Avbryt</button>
    </Container>
  ) : (
    <></>
  );
}

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 280px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: none;
  margin: 24px 16px;
`;
