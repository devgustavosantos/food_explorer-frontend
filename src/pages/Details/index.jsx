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
import { AdmButtons } from "../../components/AdmButtons";
import { ClientButtons } from "../../components/ClientButtons";

const ingredientImage =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8de12504-9b82-4b94-9b25-d78d6ccf2808/pngegg_%288%29_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T111342Z&X-Amz-Expires=86400&X-Amz-Signature=b02a5bc08182bd013ef9a614060b2e72ca65074c93960fd3cc06d1878a2b8838&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pngegg%2520%288%29%25201.png%22&x-id=GetObject";

export function Details() {
  const [ingredients, setINgredients] = useState([
    {
      id: 2,
      name: "sal",
      image: ingredientImage,
    },
    {
      id: 3,
      name: "açucar",
      image: ingredientImage,
    },
    {
      id: 1,
      name: "Farinha",
      image: ingredientImage,
    },
    {
      id: 10,
      name: "Farinha",
      image: ingredientImage,
    },
    {
      id: 15,
      name: "Farinha",
      image: ingredientImage,
    },
  ]);

  const [adm, setAdm] = useState(false);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack} />
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ffd85c1c-f542-42c7-a37b-b09159048457/Mask_group.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T111215Z&X-Amz-Expires=86400&X-Amz-Signature=6acfe9a4fe070738208f73d1602ff549720565b5c8ae4dfb2c177f5f9cd5935a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mask%2520group.png%22&x-id=GetObject"
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
            {adm ? (
              <AdmButtons dishId={10} />
            ) : (
              <ClientButtons dishId={10} withIcon />
            )}
          </div>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
