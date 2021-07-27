import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "  Enthusiastically orchestrate premier web services whereas turnkey relationships. Competently procrastinate goal-oriented catalysts for change through resource-leveling paradigms. Assertively integrate resource sucking sources through resource maximizing channels. Seamlessly deliver virtual paradigms through web-enabled value. Progressively parallel task turnkey materials without effective leadership oriented catalysts for change through.",
      user: "Demo User",
      company: "ABC.inc",
      image: "testimonial.webp",
    },
    {
      content:
        "  Enthusiastically orchestrate premier web services whereas turnkey relationships. Competently procrastinate goal-oriented catalysts for change through resource-leveling paradigms. Assertively integrate resource sucking sources through resource maximizing channels. Seamlessly deliver virtual paradigms through web-enabled value. Progressively parallel task turnkey materials without effective leadership oriented catalysts for change through.",
      user: "Demo User",
      company: "ABC.inc",
      image: "testimonial.webp",
    },
    {
      content:
        "  Enthusiastically orchestrate premier web services whereas turnkey relationships. Competently procrastinate goal-oriented catalysts for change through resource-leveling paradigms. Assertively integrate resource sucking sources through resource maximizing channels. Seamlessly deliver virtual paradigms through web-enabled value. Progressively parallel task turnkey materials without effective leadership oriented catalysts for change through.",
      user: "Demo User",
      company: "ABC.inc",
      image: "testimonial.webp",
    },
  ];

  const TestimonialsIndividual = () => {
    return testimonials.map((testimonial, i) => {
      return (
        <Grid item md={4} key={i}>
          <Image src="left-quote.png" height={100} width={100} />
          <p className={styles.content}>{testimonial.content}</p>
          <div className={styles.user_area}>
            <Grid item md={3}>
              <Image src={testimonial.image} className={styles.test_img} />
            </Grid>
            <Grid item md={7}>
              <h3 className={styles.name}>{testimonial.user}</h3>
              <p className={styles.company}>{testimonial.company}</p>
            </Grid>
          </div>
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={3} className={styles.container}>
      <TestimonialsIndividual />
    </Grid>
  );
};

export default Testimonials;
