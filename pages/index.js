import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";

export default function Home() {
  return (
    <div>
      <Typist>
        <span> First Sentence </span>
        <Typist.Backspace count={8} delay={200} />
        <span> Phrase </span>
      </Typist>
    </div>
  );
}
