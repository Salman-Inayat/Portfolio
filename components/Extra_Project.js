<Card className={cx(styles.root, shadowStyles.root)}>
  <CardActionArea>
    <CardMedia
      className={styles.media}
      image={user.name}
      title="Contemplative Reptile"
    />
    <Grid container spacing={3}>
      <Grid item md={5}>
        <CardContent>
          <TextInfoContent
            useStyles={useBlogTextInfoContentStyles}
            classes={contentStyles}
            overline={"Full Stack"}
            heading={user.title}
            // body={"Technologies Used"}
          />
          <Link href={user.github}>
            <img src="Github.png" className={styles.github_img} />
          </Link>
        </CardContent>
      </Grid>
      <Grid item md={7}>
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            Technologies Used
          </Typography>
          {user.techs.map((el, j) => (
            <img className={styles.tech_images} key={j} src={el} />
          ))}
        </CardContent>
      </Grid>
    </Grid>
  </CardActionArea>
</Card>;
