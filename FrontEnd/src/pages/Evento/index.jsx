import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import React from "react";
import { useParams } from "react-router-dom";
import { getEvento } from "../../app/api/eventos";
import Spinner from "../../components/Spinner";
import { homeImages } from "../../data/images";
import HeaderLayout from "../../layouts/HeaderLayout";
import styles from "./styles.module.scss";

const Evento = () => {
  const params = useParams();

  const { data = {}, isLoading } = useQuery(["eventos", params.id], () =>
    getEvento({ id: params.id })
  );

  if (isLoading) return <Spinner />;

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  console.log(data);

  return (
    <HeaderLayout>
      <div
        className={styles.evento_container}
        style={{ backgroundImage: `url(${homeImages[random(0, 3)]})` }}
      >
        <div className={styles.evento_header}>
          <h1>{data.nombre_evento}</h1>
          <p className={styles.fecha}>
            Del{" "}
            {DateTime.fromISO(
              data.hora_inicio_evento || DateTime.now().toISO()
            ).toFormat("dd 'de' LLL 'del' yyyy 'a las' HH:mm", {
              locale: "es",
            })}{" "}
            hasta el{" "}
            {DateTime.fromISO(
              data.fecha_fin_evento || DateTime.now().toISO()
            ).toFormat("dd 'de' LLL 'del' yyyy 'a las' HH:mm", {
              locale: "es",
            })}
          </p>
        </div>
        <div className={styles.evento_detalles}>
          <ul>
            <li>Tipo evento: {data.tipo_evento}</li>
            <li>Cupos: {data.cupo_evento}</li>
            <li>Requisitos: {data.requisitos_evento}</li>
            <li>Direccion: {data.direccion_evento}</li>
          </ul>
        </div>
        <p className={styles.descripcion}>{data.descripcion_evento}</p>
        <div className={styles.btn_container}>
          <a href={data.url_evento || "#"}>
            <button>Ir al evento</button>
          </a>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        cupiditate facere, aspernatur, incidunt aliquam ab ex consequuntur ad
        voluptatibus corrupti dolorum labore amet culpa soluta expedita maiores,
        animi perspiciatis corporis?
      </div>
    </HeaderLayout>
  );
};

export default Evento;
