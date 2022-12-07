import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import HeaderLayout from "../../layouts/HeaderLayout";
import styles from "./styles.module.scss";
import { getEventos } from "../../app/api/eventos";
import Spinner from "../../components/Spinner";
import { homeImages } from "../../data/images";

const Home = () => {
  const { data, isLoading } = useQuery(["eventos"], getEventos);

  if (isLoading) return <Spinner />;

  return (
    <HeaderLayout>
      <div className={styles.home}>
        <div className={styles.carrousel_wrapper}>
          <Carousel>
            {homeImages.map((url, index) => (
              <img key={index} src={url} />
            ))}
          </Carousel>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_wrapper}>
            {data?.map((evento, index) => {
              return (
                <Card
                  key={evento.id_evento}
                  id={evento.id_evento}
                  title={evento.nombre_evento}
                  description={evento.descripcion_evento}
                  src={homeImages[index] || homeImages[0]}
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
