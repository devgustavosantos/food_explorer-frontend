import { useState } from "react";

import { FiEdit2, FiTrash } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

import { Container, Content } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";

export function Details() {
  const [ingredients, setINgredients] = useState([
    {
      id: 2,
      name: "sal",
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e966ed89-6ea6-4b5c-afe2-5da6c6563392/pngegg_%288%29_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T193800Z&X-Amz-Expires=86400&X-Amz-Signature=dee5bee95bb6fca0c71379acf55852c673b90663f974b3514ef8cc2e223553fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pngegg%2520%288%29%25201.png%22&x-id=GetObject",
    },
    {
      id: 3,
      name: "açucar",
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e966ed89-6ea6-4b5c-afe2-5da6c6563392/pngegg_%288%29_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T193800Z&X-Amz-Expires=86400&X-Amz-Signature=dee5bee95bb6fca0c71379acf55852c673b90663f974b3514ef8cc2e223553fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pngegg%2520%288%29%25201.png%22&x-id=GetObject",
    },
    {
      id: 1,
      name: "Farinha",
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e966ed89-6ea6-4b5c-afe2-5da6c6563392/pngegg_%288%29_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T193800Z&X-Amz-Expires=86400&X-Amz-Signature=dee5bee95bb6fca0c71379acf55852c673b90663f974b3514ef8cc2e223553fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pngegg%2520%288%29%25201.png%22&x-id=GetObject",
    },
    {
      id: 10,
      name: "Farinha",
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e966ed89-6ea6-4b5c-afe2-5da6c6563392/pngegg_%288%29_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T193800Z&X-Amz-Expires=86400&X-Amz-Signature=dee5bee95bb6fca0c71379acf55852c673b90663f974b3514ef8cc2e223553fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pngegg%2520%288%29%25201.png%22&x-id=GetObject",
    },
    {
      id: 15,
      name: "Farinha",
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e966ed89-6ea6-4b5c-afe2-5da6c6563392/pngegg_%288%29_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T193800Z&X-Amz-Expires=86400&X-Amz-Signature=dee5bee95bb6fca0c71379acf55852c673b90663f974b3514ef8cc2e223553fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pngegg%2520%288%29%25201.png%22&x-id=GetObject",
    },
  ]);
  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack} />
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ffd85c1c-f542-42c7-a37b-b09159048457/Mask_group.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T193957Z&X-Amz-Expires=86400&X-Amz-Signature=e36b3e83ef5eb09d82b0ba0f715960589c477b9a016ae0305dbbb82db78875c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mask%2520group.png%22&x-id=GetObject"
            alt="Foto do Prato"
          />
          <h1>Nome do prato</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="ingredients">
            {ingredients &&
              ingredients.map(ingredient => (
                <Ingredient
                  image={ingredient.image}
                  name={ingredient.name}
                  key={String(ingredient.id)}
                />
              ))}
          </div>
          <p className="price">
            R$ <span>32,55</span>
          </p>
          <div className="buttons">
            <div className="adm-buttons">
              <Button icon={FiEdit2} title="Editar" isHighlighted={false} />
              <Button icon={FiTrash} title="Excluir" />
            </div>
            <div className="client-buttons">
              <Button icon={FiEdit2} title="Editar" isHighlighted={false} />
              <Button icon={FiTrash} title="Excluir" />
            </div>
          </div>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
