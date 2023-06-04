import {useEffect,useState} from 'react';

import {Imagem} from  "../../Styles/destaqueStyled"

export function RandomImage() {
    const [index, setIndex] = useState<number | undefined>(-1);
    const [randomImage, setRandomImage] = useState<string>('');
    const images = [
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/162377/project_thumb_large_aba4f302-7bc6-4816-ae36-5c72f70b6153.png",
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/166567/project_thumb_large_cfd05bf7-2b94-489c-ac00-a5f907383e0a.jpg",
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/166198/project_thumb_large_aa65f7f9-155a-42f9-b92f-176f6aafa7ee.png",
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/167225/project_thumb_large_f1f3f85e-82f6-498e-adca-a9f9a1510979.png",
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/164619/project_thumb_large_5cf8dc68-495a-4b4e-b876-19591c7ee323.png",
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/159881/project_thumb_large_26d29650-16a3-4e8c-87f2-4802faef94a6.png",
    ];

    useEffect(() => {
      let  randomIndex = Math.floor(Math.random() * images.length);

      while(randomIndex == index || randomIndex == -1){
        randomIndex = Math.floor(Math.random() *images.length);
      }
      setIndex(randomIndex);
      setRandomImage(images[randomIndex]);
    }, []);

  
    return (
      <div>
        <Imagem src={randomImage} alt="Imagem Aleatória" />
      </div>
    );
  }