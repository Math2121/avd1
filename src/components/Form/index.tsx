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
  id: Date;
  periodo: string;
  disciplina: string;
  cargaHora: string;
  professores: string;
}
function Form() {
  const [periodo, setPeriodo] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [professores, setProfessores] = useState("");
  const [cargaHora, setCargaHora] = useState("");
  const [cadastros, setCadastros] = useState<ICadastro[]>([]);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cadastroSchema = yup.object().shape({
      periodo: yup.string().required("Período obrigatório"),
      disciplina: yup.string().required("Diciplina obrigatório"),
      professores: yup.string().required("Necessário incluir professor"),
      cargaHora: yup.string().required("Campo carga horária obrigatório"),
    });

    const data = {
      id: new Date(),
      periodo,
      disciplina,
      professores,
      cargaHora,
    };
    cadastroSchema
      .validate(data)
      .then(() => {
        setCadastros([...cadastros, data]);
        setPeriodo("");
        setDisciplina("");
        setCargaHora("");
        setProfessores("");
      })
      .catch((err) => {
        alert(err.errors);
      });
    // const validation = await cadastroSchema.isValid(data);
    // if (!validation) {
    //   setPeriodo("");
    //   setDisciplina("");
    //   setCargaHora("");
    //   setProfessores("");
    //   alert("Dados dos formulários inválidos");
    // }
  }

  useEffect(() => {
    const cadastrosGet: any = localStorage.getItem("cadastros");
    setCadastros(JSON.parse(cadastrosGet));
  }, []);

  useEffect(() => {
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
  }, [cadastros]);
  function handleDelete(id: Date) {
    setCadastros(cadastros.filter((item) => item.id !== id));
  }
  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <h2>Cadastro de Horas</h2>
            <label htmlFor="periodo">Períodos</label>
            <select
              name="periodo"
              id="periodo"
              value={periodo}
              onChange={(e) => {
                setPeriodo(e.target.value);
              }}
            >
              <option value="1º periodo">1º periodo</option>
              <option value="2º periodo">2º periodo</option>
              <option value="3º periodo">3º periodo</option>
              <option value="4º periodo">4º periodo</option>
              <option value="5º periodo">5º periodo</option>
              <option value="6º periodo">6º periodo</option>
              <option value="7º periodo">7º periodo</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label htmlFor="disciplina">Disciplina</label>
            <input
              type="text"
              name="disciplina"
              value={disciplina}
              onChange={(e) => {
                setDisciplina(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="professor">Professores</label>
            <select
              name="professor"
              id="professor"
              value={professores}
              onChange={(e) => {
                setProfessores(e.target.value);
              }}
            >
              <option value="Débora">Débora</option>
              <option value="Thiaguinho">Thiaguinho</option>
              <option value="Samantha">Samantha</option>
              <option value="Rita de Cássia">Rita de Cássia</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label htmlFor="cargaHora">Carga horária</label>
            <input
              type="text"
              name="cargaHora"
              value={cargaHora}
              onChange={(e) => {
                setCargaHora(e.target.value);
              }}
            />
          </FormGroup>
          <Button>Enviar</Button>
        </FormContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Periodo</th>
                <th>Disciplinas</th>
                <th>Professor</th>
                <th>Carga Hora</th>
                <th colSpan={1}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cadastros.map((item, ind) => (
                <tr key={ind}>
                  <td>{item.periodo}</td>
                  <td>{item.disciplina}</td>
                  <td>{item.professores}</td>
                  <td>{item.cargaHora}</td>
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
