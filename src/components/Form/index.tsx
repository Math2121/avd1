import { useEffect, useState } from "react";
import {
  Button,
  ButtonDel,
  Container,
  FormContainer,
  FormGroup,
  TableContainer,
} from "./style";
import * as yup from "yup";
interface ICadastro {
  id: string;
  codigo: string;
  estado: string;
  municipio: string;
}
function Form() {
  const [codigo, setCodigo] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cadastros, setCadastros] = useState<ICadastro[]>([]);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cadastroSchema = yup.object().shape({
      codigo: yup.string().required("Código obrigatório"),
      municipio: yup.string().required("Município obrigatório"),
      estado: yup.string().required("Estado obrigatório"),
    });

    const data = {
      id: new Date().getTime().toString(),
      codigo,
      municipio,
      estado,
    };

    cadastroSchema
      .validate(data)
      .then(() => {
        setCadastros([...cadastros, data]);
        setCodigo("");
        setEstado("");
        setMunicipio("");
      })
      .catch((err) => {
        alert(err.errors);
      });
  }

  useEffect(() => {
    const cadastrosGet: any = localStorage.getItem("cadastros");
    setCadastros(JSON.parse(cadastrosGet));
  }, []);

  useEffect(() => {
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
  }, [cadastros]);
  function handleDelete(id: string) {
    setCadastros(cadastros.filter((item) => item.id !== id));
  }
  return (
    <>
      <Container>
        <div className="ibge-back">
          <div className="blu">
            <h2>Cadastro do IBGE</h2>
          </div>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="codigo">Código</label>
            <input
              name="codigo"
              id="codigo"
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="municipio">Município</label>
            <input
              type="text"
              name="municipio"
              value={municipio}
              onChange={(e) => {
                setMunicipio(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="estado">Estados</label>
            <input
              name="estado"
              id="estado"
              value={estado}
              onChange={(e) => {
                setEstado(e.target.value);
              }}
            />
          </FormGroup>
          <Button>Enviar</Button>
        </FormContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Município</th>
                <th>Estado</th>
                <th colSpan={1}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cadastros?.map((item, ind) => (
                <tr key={ind}>
                  <td>{item.codigo}</td>
                  <td>{item.municipio}</td>
                  <td>{item.estado}</td>
                  <td colSpan={1}>
                    <ButtonDel
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Deletar
                    </ButtonDel>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Form;
