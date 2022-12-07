import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import HeaderLayout from "../../layouts/HeaderLayout";
import styles from "./styles.module.scss";
import { getEventos } from "../../app/api/eventos";
import Spinner from "../../components/Spinner";

const img = [
  "https://agenciapower1111.cl/deportes/wp-content/uploads/2021/08/Post-Web-8.png",
  "https://cdnuploads.aa.com.tr/uploads/Contents/2020/03/13/thumbs_b_c_8113c4a7ee59f7c57205c38f9fa15ff2.jpg?v=161811",
  "https://www.fiba.basketball/api/img/graphic/c5132053-5932-4af1-9e9b-8597ed500e94/940/529",
];

const Home = () => {
  const { data, isLoading } = useQuery(["eventos"], getEventos);

  if (isLoading) return <Spinner />;

  return (
    <HeaderLayout>
      <div className={styles.home}>
        <div className={styles.carrousel_wrapper}>
          <Carousel>
            {img.map((url, index) => (
              <img key={index} src={url} />
            ))}
          </Carousel>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_wrapper}>
            {data?.map((evento) => {
              return (
                <Card
                  key={evento.id_evento}
                  id={evento.id_evento}
                  title={evento.nombre_evento}
                  description={evento.descripcion_evento}
                  src={img[0]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Home;
